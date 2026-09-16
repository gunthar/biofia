provider "google-beta" {
  project = "biofia"
  region  = "us-central1"
}

# 1. Enable Secret Manager API
resource "google_project_service" "secretmanager" {
  provider           = google-beta
  project            = "biofia"
  service            = "secretmanager.googleapis.com"
  disable_on_destroy = false
}

# 2. Provision the Developer Connect Service Agent
resource "google_project_service_identity" "devconnect_p4sa" {
  provider = google-beta
  project  = "biofia"
  service  = "developerconnect.googleapis.com"
}

# 3. Grant Developer Connect Service Agent permission to manage secrets
resource "google_project_iam_member" "devconnect_secret" {
  provider = google-beta
  project  = "biofia"
  role     = "roles/secretmanager.admin"
  member   = google_project_service_identity.devconnect_p4sa.member
}

# 4. Create the Service Account for Firebase App Hosting
resource "google_service_account" "app_hosting_sa" {
  provider     = google-beta
  project      = "biofia"
  account_id   = "firebase-app-hosting-compute"
  display_name = "Firebase App Hosting Compute Service Account"
}

# 5. Grant required permissions to the App Hosting Service Account
resource "google_project_iam_member" "app_hosting_sa_roles" {
  provider = google-beta
  project  = "biofia"
  for_each = toset([
    "roles/developerconnect.readTokenAccessor",
    "roles/firebase.sdkAdminServiceAgent",
    "roles/firebaseapphosting.computeRunner"
  ])
  role   = each.key
  member = "serviceAccount:${google_service_account.app_hosting_sa.email}"
}

# 6. Create the Developer Connect Connection
resource "google_developer_connect_connection" "default" {
  provider      = google-beta
  project       = "biofia"
  location      = "us-central1"
  connection_id = "test-connection"
  github_config {
    github_app = "FIREBASE"
  }

  depends_on = [
    google_project_iam_member.devconnect_secret,
    google_project_service.secretmanager
  ]
}

# 7. Link your connected GitHub repository
resource "google_developer_connect_git_repository_link" "website_repo" {
  provider               = google-beta
  project                = "biofia"
  location               = "us-central1"
  git_repository_link_id = "biofia-repo"
  parent_connection      = google_developer_connect_connection.default.connection_id
  clone_uri              = "https://github.com/gunthar/biofia.git"
}

# 8. Create your App Hosting Backend
resource "google_firebase_app_hosting_backend" "default" {
  provider         = google-beta
  project          = "biofia"
  location         = "us-central1"
  backend_id       = "biofia-backend"
  app_id           = "1:662074847743:web:5d084edac3bbe92904b7ca"
  display_name     = "BioFIA Backend"
  serving_locality = "GLOBAL_ACCESS"
  service_account  = google_service_account.app_hosting_sa.email

  codebase {
    repository     = google_developer_connect_git_repository_link.website_repo.name
    root_directory = "/"
  }

  depends_on = [
    google_project_iam_member.app_hosting_sa_roles
  ]
}

# 9. Bind your custom domain biofia.org
resource "google_firebase_app_hosting_domain" "biofia_domain" {
  provider   = google-beta
  project    = "biofia"
  location   = "us-central1"
  backend    = google_firebase_app_hosting_backend.default.backend_id
  domain_id  = "biofia.org"
}
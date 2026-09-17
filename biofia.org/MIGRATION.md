# Moving biofia.org from Firebase App Hosting to classic Firebase Hosting

## Why this exists

The Claude Designer export for this site included `main.tf` and a `terraform.tfstate`. That state
showed the `biofia` Firebase project already has real, provisioned infrastructure for **Firebase App
Hosting** — a backend (`biofia-backend`) wired via Developer Connect to `github.com/gunthar/biofia`,
with the custom domain **biofia.org attached to that App Hosting backend**.

App Hosting is built for framework apps with a build step (Next.js, Angular SSR, etc.) running in
Cloud Build/Cloud Run. This site is plain static HTML/CSS/JS with no build step — a plain fit for
classic **Firebase Hosting**, which is also what the exported `firebase.json` was already written
for. You confirmed you want classic Hosting, so this repo is configured for that. This file is the
runbook for retiring the App Hosting side so `biofia.org` actually serves it.

**Nothing in this migration can be done from here** — it needs your GCP/Firebase credentials and
access to your DNS provider, neither of which this session has. Do these steps yourself, in order.

## 0. Before you touch anything

The `terraform.tfstate` bundled in the original export is a point-in-time copy — it is **not**
included in this repo (state should never be committed) and it may not match whatever your
authoritative state is now. Run the commands below from wherever you actually keep the real
Terraform state for this project (a `terraform init` there should show the same resources listed
below). `infra/main.tf` in this repo is kept only as a reference of what was provisioned — don't
apply it from a fresh directory with no matching state.

## 1. Tear down the App Hosting infrastructure

From your real Terraform working directory:

```bash
terraform destroy \
  -target=google_firebase_app_hosting_domain.biofia_domain \
  -target=google_firebase_app_hosting_backend.default \
  -target=google_developer_connect_git_repository_link.website_repo \
  -target=google_developer_connect_connection.default \
  -target=google_project_iam_member.app_hosting_sa_roles \
  -target=google_service_account.app_hosting_sa \
  -target=google_project_iam_member.devconnect_secret \
  -target=google_project_service_identity.devconnect_p4sa
```

Terraform resolves the correct destroy order itself even though the targets are listed out of
order above. This removes the App Hosting backend, its domain binding, the GitHub Developer
Connect link, and the service account/IAM bindings that only existed to support them.

Leaving `google_project_service.secretmanager` (the Secret Manager API enablement) alone is fine —
it's harmless to leave enabled and other things in the project may depend on it. Add it to the
destroy list only if you're sure nothing else uses Secret Manager.

Once the destroy is clean, delete `infra/` from this repo (or move `main.tf` into whatever repo
actually owns this project's infrastructure — a website's git repo isn't the natural home for its
hosting provider's Terraform anyway).

## 2. Make sure classic Hosting is deployed at least once

From this repo's root, with the Firebase CLI authenticated against the `biofia` project:

```bash
firebase deploy --only hosting
```

This publishes to the project's default Hosting URL (`biofia.web.app` / `biofia.firebaseapp.com`).
Confirm the site loads correctly there before touching the domain.

## 3. Attach biofia.org to the Hosting site instead

In the [Firebase console](https://console.firebase.google.com/) → your `biofia` project → **Hosting**:

1. Click **Add custom domain** and enter `biofia.org` (and `www.biofia.org` if you use it).
2. Firebase will show you a TXT record to add at your DNS provider to verify ownership, then the
   A records (or, for a subdomain, a CNAME) to point the domain at Hosting. Use exactly what the
   console shows you — those values are account/project-specific.
3. Wait for DNS propagation and Firebase's automatic SSL provisioning (can take a few hours).

Because the domain is currently attached to the App Hosting backend, you likely need to **remove
it from App Hosting first** (Firebase console → App Hosting → biofia-backend → Domains → remove
biofia.org) before Firebase will let you attach it to the Hosting site — a domain can only serve
one target at a time. Do this either right before step 3, or as part of the Terraform destroy in
step 1 if you're comfortable doing it there instead.

## 4. Wire up CI

See the "Deploying" section of `README.md` — one `firebase init hosting:github` run (or manually
adding the `FIREBASE_SERVICE_ACCOUNT_BIOFIA` repo secret) turns on the GitHub Actions workflows
already in `.github/workflows/`.

/* @ds-bundle: {"format":4,"namespace":"BioFIADesignSystem_0c35a6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7edd56e7c596","components/core/Button.jsx":"e3f6e9079721","components/core/Card.jsx":"27c331ea3841","components/core/Icon.jsx":"d4c0a52222c8","components/core/IconButton.jsx":"4a267e233595","components/core/Tag.jsx":"ffe408404b6a","components/feedback/Dialog.jsx":"722ba2e0c4cf","components/feedback/Toast.jsx":"6dd3b4316193","components/feedback/Tooltip.jsx":"b2ab500d4889","components/forms/Checkbox.jsx":"aa06b2050760","components/forms/Input.jsx":"5eb2b9aecdd4","components/forms/Radio.jsx":"9e1bd63b4b04","components/forms/Select.jsx":"69dfad159edf","components/forms/Switch.jsx":"17637791aec4","components/navigation/Tabs.jsx":"4293e53afc9a","ui_kits/website/About.jsx":"8c01463d4393","ui_kits/website/Chrome.jsx":"721f8cf5f0c7","ui_kits/website/Home.jsx":"a46de3f562c1","ui_kits/website/Programs.jsx":"0be0ec8fc494"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BioFIADesignSystem_0c35a6 = window.BioFIADesignSystem_0c35a6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  navy: {
    background: 'var(--color-navy-tint)',
    color: 'var(--color-navy)'
  },
  indigo: {
    background: 'var(--color-indigo-tint)',
    color: 'var(--color-indigo)'
  },
  clay: {
    background: 'var(--color-clay-tint)',
    color: 'var(--color-clay-dark)'
  },
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-secondary)'
  }
};
function Badge({
  children,
  tone = 'navy'
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontFamily: 'var(--font-sans-ui)',
      ...t
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  description,
  footer,
  accent = 'none',
  children,
  style
}) {
  const accentColor = {
    navy: 'var(--color-navy)',
    indigo: 'var(--color-indigo)',
    clay: 'var(--color-clay)',
    none: null
  }[accent];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-md)',
      padding: 24,
      fontFamily: 'var(--font-sans-ui)',
      borderTop: accentColor ? `3px solid ${accentColor}` : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 600,
      marginBottom: 10
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 21,
      fontWeight: 500,
      color: 'var(--text-primary)',
      marginBottom: 8
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--border-default)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PATHS = {
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-right': 'm9 18 6-6-6-6',
  'arrow-right': 'M5 12h14M13 5l7 7-7 7',
  info: 'M12 16v-4m0-4h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z',
  leaf: 'M11 20A7 7 0 0 1 4 13c0-4 3-8 8-9 5 1 8 5 8 9a7 7 0 0 1-7 7Z M11 20V9',
  menu: 'M4 6h16M4 12h16M4 18h16',
  plus: 'M12 5v14M5 12h14'
};
function Icon({
  name = 'check',
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = PATHS[name] || PATHS.check;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style
  }, d.split(' M').map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: i === 0 ? seg : 'M' + seg
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 14
  },
  md: {
    padding: '12px 22px',
    fontSize: 15.5
  },
  lg: {
    padding: '15px 28px',
    fontSize: 16.5
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--color-navy)',
    color: 'var(--color-base)',
    border: '1px solid var(--color-navy)'
  },
  secondary: {
    background: 'var(--color-indigo)',
    color: 'var(--color-base)',
    border: '1px solid var(--color-indigo)'
  },
  clay: {
    background: 'var(--color-clay)',
    color: 'var(--color-base)',
    border: '1px solid var(--color-clay)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-ink)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-ink)',
    border: '1px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  onClick,
  style
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans-ui)',
      fontWeight: 600,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'filter var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      ...v,
      ...s,
      ...style
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.filter = 'brightness(0.92)'),
    onMouseLeave: e => e.currentTarget.style.filter = 'none',
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = 'scale(0.97)'),
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)'
  }, icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fontSize + 2
  }), children, icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fontSize + 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  name = 'x',
  label,
  size = 40,
  variant = 'ghost',
  onClick,
  disabled = false
}) {
  const bg = variant === 'filled' ? 'var(--color-navy)' : 'transparent';
  const color = variant === 'filled' ? 'var(--color-base)' : 'var(--color-ink)';
  const border = variant === 'outline' ? '1px solid var(--border-strong)' : '1px solid transparent';
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label || name,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color,
      border,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--duration-base) var(--ease-standard)'
    },
    onMouseEnter: e => !disabled && (e.currentTarget.style.background = variant === 'filled' ? 'var(--color-navy-dark)' : 'var(--surface-sunken)'),
    onMouseLeave: e => e.currentTarget.style.background = bg
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size * 0.45
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px 5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      fontSize: 13,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans-ui)',
      background: 'var(--surface-card)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    style: {
      background: 'none',
      border: 'none',
      padding: 0,
      display: 'flex',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    },
    "aria-label": "Remove"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(26,29,27,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      fontFamily: 'var(--font-sans-ui)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-popover)',
      width: 420,
      maxWidth: '90vw',
      padding: 28
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 22,
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    background: 'var(--color-ink)',
    color: 'var(--color-base)',
    icon: 'info'
  },
  success: {
    background: 'var(--color-navy)',
    color: 'var(--color-base)',
    icon: 'check'
  },
  emphasis: {
    background: 'var(--color-clay)',
    color: 'var(--color-ink)',
    icon: 'info'
  }
};
function Toast({
  message,
  tone = 'info',
  onClose
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: t.background,
      color: t.color,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)',
      fontFamily: 'var(--font-sans-ui)',
      fontSize: 14.5,
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      display: 'flex',
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  side = 'top'
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    }
  }[side] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--color-ink)',
      color: 'var(--color-base)',
      fontSize: 12.5,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans-ui)',
      boxShadow: 'var(--shadow-popover)',
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans-ui)',
      fontSize: 14.5,
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 19,
      height: 19,
      borderRadius: 5,
      border: `1px solid ${checked ? 'var(--color-navy)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--color-navy)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "var(--color-base)",
    strokeWidth: 3
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  helpText,
  error,
  type = 'text'
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans-ui)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      font: 'inherit',
      fontSize: 15,
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${error ? 'var(--color-clay-dark)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      outline: 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-standard)'
    },
    onFocus: e => e.currentTarget.style.boxShadow = 'var(--ring-focus)',
    onBlur: e => e.currentTarget.style.boxShadow = 'none'
  }), (helpText || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--color-clay-dark)' : 'var(--text-muted)'
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans-ui)',
      fontSize: 14.5,
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(),
    style: {
      width: 19,
      height: 19,
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--color-indigo)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-indigo)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…'
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const current = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      fontFamily: 'var(--font-sans-ui)',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-strong)',
      background: 'var(--surface-card)',
      fontSize: 15,
      color: current ? 'var(--text-primary)' : 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, current ? current.label : placeholder, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--text-muted)"
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      right: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-popover)',
      zIndex: 10,
      overflow: 'hidden'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    },
    style: {
      padding: '10px 14px',
      fontSize: 14.5,
      cursor: 'pointer',
      background: o.value === value ? 'var(--surface-sunken)' : 'transparent'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-sunken)',
    onMouseLeave: e => e.currentTarget.style.background = o.value === value ? 'var(--surface-sunken)' : 'transparent'
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans-ui)',
      fontSize: 14.5,
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-navy)' : 'var(--color-stone)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--color-base)',
      transition: 'left var(--duration-base) var(--ease-standard)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultValue
}) {
  const [active, setActive] = useState(defaultValue || tabs[0] && tabs[0].value);
  const activeTab = tabs.find(t => t.value === active);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans-ui)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    onClick: () => setActive(t.value),
    style: {
      background: 'none',
      border: 'none',
      padding: '10px 16px',
      fontSize: 14.5,
      fontWeight: 600,
      cursor: 'pointer',
      color: active === t.value ? 'var(--color-navy)' : 'var(--text-secondary)',
      borderBottom: active === t.value ? '2px solid var(--color-navy)' : '2px solid transparent',
      marginBottom: -1
    }
  }, t.label))), activeTab && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 2px',
      fontSize: 14.5,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, activeTab.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
const {
  Badge,
  Input,
  Select,
  Checkbox,
  Button
} = window.BioFIADesignSystem_0c35a6;
function About() {
  const [region, setRegion] = React.useState('af');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 48px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-navy)',
      fontWeight: 600,
      marginBottom: 14
    }
  }, "The Network"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      marginBottom: 20
    }
  }, "A global alliance, not a single fund"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-secondary)',
      lineHeight: 1.7,
      maxWidth: 720,
      marginBottom: 44
    }
  }, "BioFIA exists to rewire the flow of capital for planetary regeneration. We design and prototype next-generation financial instruments that recognize ecosystems as living infrastructure, embed ecological intelligence into markets, and shift power to those who protect nature."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 10
    }
  }, "Convergence, by design"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.65
    }
  }, "By converging finance, technology, and governance innovation, we aim to make biodiversity the backbone of a thriving, just, and post-carbon economy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 10
    }
  }, "Power to the stewards"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.65
    }
  }, "Every instrument we prototype is co-designed with the communities and institutions who protect the ecosystem it draws on."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 32,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 21,
      marginBottom: 18
    }
  }, "Inquire about partnership"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Organization",
    placeholder: "e.g. Regional development bank"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Region of focus",
    value: region,
    onChange: setRegion,
    options: [{
      value: 'af',
      label: 'Africa'
    }, {
      value: 'lac',
      label: 'Latin America & Caribbean'
    }, {
      value: 'sea',
      label: 'Southeast Asia'
    }]
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me updates on new instruments",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow-right"
  }, "Submit inquiry"))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon
} = window.BioFIADesignSystem_0c35a6;
function Header({
  page,
  onNavigate
}) {
  const links = [{
    id: 'home',
    label: 'Mission'
  }, {
    id: 'programs',
    label: 'Programs'
  }, {
    id: 'about',
    label: 'Network'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      borderBottom: '1px solid var(--border-default)',
      background: 'var(--surface-page)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNavigate('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, "BioFIA")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNavigate(l.id),
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: page === l.id ? 'var(--color-navy)' : 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "arrow-right"
  }, "Join the Alliance"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '40px 48px',
      borderTop: '1px solid var(--border-default)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    style: {
      height: 18
    }
  }), "Biodiversity Finance Innovation Alliance"), /*#__PURE__*/React.createElement("div", null, "\xA9 2026 BioFIA \u2014 a global network for regenerative capital"));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Icon
} = window.BioFIADesignSystem_0c35a6;
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 48px 80px',
      maxWidth: 900,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-indigo)',
      fontWeight: 600,
      marginBottom: 18
    }
  }, "A global network for nature-positive capital"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      lineHeight: 1.05
    }
  }, "We rewire the flow of capital ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--color-navy)'
    }
  }, "for planetary regeneration.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--text-secondary)',
      maxWidth: 640,
      margin: '24px auto 0',
      lineHeight: 1.6
    }
  }, "We design and prototype next-generation financial instruments that recognize ecosystems as living infrastructure, embed ecological intelligence into markets, and shift power to those who protect nature."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "arrow-right",
    onClick: () => onNavigate('programs')
  }, "Explore our programs"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate('about')
  }, "Read the network brief"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sunken)',
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, [{
    metric: '17M ha',
    label: 'of forest brought into investable structures'
  }, {
    metric: '$2.4B',
    label: 'in nature-linked capital unlocked'
  }, {
    metric: '42',
    label: 'financial instruments prototyped since 2021'
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono-data)',
      fontSize: 44,
      color: 'var(--color-clay)'
    }
  }, s.metric), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, s.label))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 48px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      marginBottom: 12
    }
  }, "How we work"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 640,
      marginBottom: 40
    }
  }, "By converging finance, technology, and governance innovation, we make biodiversity the backbone of a thriving, post-carbon economy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accent: "forest",
    eyebrow: "Ecological Systems",
    title: "Standing Forest Token",
    description: "A tradable instrument recognizing standing forest as living infrastructure, not a liability to clear."
  }), /*#__PURE__*/React.createElement(Card, {
    accent: "plum",
    eyebrow: "BioFIA Identity",
    title: "Governance Innovation",
    description: "Systems diagrams and institutional structures that shift decision power to nature's stewards."
  }), /*#__PURE__*/React.createElement(Card, {
    accent: "gold",
    eyebrow: "Key Metric",
    title: "Leverage Points",
    description: "We identify where a small structural change unlocks outsized capital flow toward regeneration."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--dark-bg)',
      padding: '72px 48px',
      color: 'var(--dark-text)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 34,
      lineHeight: 1.3
    }
  }, "The Ask"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      opacity: 0.85,
      margin: '16px 0 28px'
    }
  }, "We're recruiting founding partners \u2014 development banks, community land trusts, and philanthropic capital \u2014 to co-design the next generation of nature-linked instruments."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    icon: "arrow-right"
  }, "Become a founding partner"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Tag,
  Tabs
} = window.BioFIADesignSystem_0c35a6;
const PROGRAMS = [{
  id: 'sft',
  name: 'Standing Forest Token',
  tone: 'navy',
  tags: ['Forest', 'Pilot'],
  desc: 'Converts verified forest stewardship into a tradable, yield-bearing instrument for the communities that maintain it.'
}, {
  id: 'mrf',
  name: 'Mangrove Resilience Facility',
  tone: 'navy',
  tags: ['Coastal', 'Live'],
  desc: 'Blended-capital facility financing mangrove restoration against measurable storm-surge risk reduction.'
}, {
  id: 'big',
  name: 'Biodiversity Impact Governance',
  tone: 'indigo',
  tags: ['Governance', 'Design phase'],
  desc: 'A voting-rights framework giving indigenous and community stewards a seat in capital allocation decisions.'
}, {
  id: 'nlb',
  name: 'Nature-Linked Bond Framework',
  tone: 'indigo',
  tags: ['Capital markets', 'Pilot'],
  desc: 'Coupon structures indexed to independently verified ecosystem-health metrics.'
}];
function Programs() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '72px 48px',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-indigo)',
      fontWeight: 600,
      marginBottom: 14
    }
  }, "Programs"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      marginBottom: 16
    }
  }, "Instruments in prototype and pilot"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-secondary)',
      maxWidth: 640,
      marginBottom: 40
    }
  }, "Each program pairs a financial structure with the governance needed to keep power with the people protecting the ecosystem."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20,
      marginBottom: 56
    }
  }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    accent: p.tone,
    title: p.name,
    description: p.desc,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t)))
  }))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: 'overview',
      label: 'Overview',
      content: 'The Standing Forest Token converts verified forest stewardship into a tradable, yield-bearing instrument, issued directly to the community land trusts that maintain the forest.'
    }, {
      value: 'terms',
      label: 'Terms',
      content: '12-month pilot term, quarterly third-party verification, capped issuance per hectare to prevent over-financialization.'
    }, {
      value: 'partners',
      label: 'Partners',
      content: 'Co-designed with community land trusts, two regional development banks, and an independent MRV (measurement, reporting, verification) provider.'
    }]
  }));
}
window.Programs = Programs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

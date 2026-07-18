/* @ds-bundle: {"format":4,"namespace":"IIRLabsDesignSystem_8a63de","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"f09ead93c253","components/feedback/Dialog.jsx":"52bc4deb6e0b","components/feedback/Tag.jsx":"b790d1f867ec","components/feedback/Tooltip.jsx":"566a9530f9a3","components/forms/Button.jsx":"5ccebf2cc06f","components/forms/Checkbox.jsx":"8f68563e6df9","components/forms/Input.jsx":"9736d71192b4","components/forms/Switch.jsx":"4fa18527d905","components/layout/Card.jsx":"66bd7ccb6cd8","components/layout/Tabs.jsx":"111ec1ec6aa2","ui_kits/ir-metrics/CampaignDetailScreen.jsx":"5190010ada95","ui_kits/ir-metrics/DashboardScreen.jsx":"2cec1939f281","ui_kits/ir-metrics/LoginScreen.jsx":"b9ca504896a5","ui_kits/ir-metrics/Sidebar.jsx":"afb06cc62c0a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IIRLabsDesignSystem_8a63de = window.IIRLabsDesignSystem_8a63de || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
const variants = {
  neutral: {
    bg: 'var(--color-bg-surface-raised)',
    fg: 'var(--color-text-secondary)',
    bd: 'var(--color-border-default)'
  },
  success: {
    bg: 'rgba(46,217,163,0.14)',
    fg: 'var(--color-success)',
    bd: 'rgba(46,217,163,0.35)'
  },
  warning: {
    bg: 'rgba(242,185,76,0.14)',
    fg: 'var(--color-warning)',
    bd: 'rgba(242,185,76,0.35)'
  },
  danger: {
    bg: 'rgba(240,84,106,0.14)',
    fg: 'var(--color-danger)',
    bd: 'rgba(240,84,106,0.35)'
  },
  accent: {
    bg: 'rgba(45,220,235,0.14)',
    fg: 'var(--color-accent-primary)',
    bd: 'rgba(45,220,235,0.35)'
  }
};
function Badge({
  tone = 'neutral',
  children
}) {
  const v = variants[tone] || variants.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--fw-semibold)',
      background: v.bg,
      color: v.fg,
      border: '1px solid ' + v.bd
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(5,11,18,0.72)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: '380px',
      maxWidth: '90vw',
      background: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-l)',
      padding: '24px',
      boxShadow: 'var(--shadow-l)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-s)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)',
      marginBottom: '12px'
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-body-m)',
      lineHeight: 'var(--lh-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 10px 5px 12px',
      borderRadius: 'var(--radius-s)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 'var(--fw-medium)',
      background: 'var(--color-bg-surface-raised)',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-border-subtle)'
    }
  }, children, onRemove && React.createElement('span', {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'var(--color-text-tertiary)',
      fontWeight: 700,
      lineHeight: 1
    }
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      background: 'var(--iir-black-950)',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-s)',
      border: '1px solid var(--color-border-default)',
      boxShadow: 'var(--shadow-m)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const sizeMap = {
  s: {
    padding: '8px 14px',
    fontSize: 'var(--text-body-s)'
  },
  m: {
    padding: '11px 20px',
    fontSize: 'var(--text-body-m)'
  },
  l: {
    padding: '14px 26px',
    fontSize: 'var(--text-body-l)'
  }
};
function Button({
  variant = 'primary',
  size = 'm',
  disabled = false,
  icon = null,
  children,
  onClick
}) {
  const s = sizeMap[size] || sizeMap.m;
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    borderRadius: 'var(--radius-m)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'filter var(--duration-base) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),background var(--duration-base)',
    opacity: disabled ? 0.45 : 1,
    ...s
  };
  const variants = {
    primary: {
      background: 'var(--brand-gradient)',
      color: 'var(--color-text-on-accent)'
    },
    secondary: {
      background: 'var(--color-bg-surface-raised)',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-text-primary)',
      borderColor: 'transparent'
    },
    danger: {
      background: 'var(--color-danger)',
      color: '#fff'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  if (hover && !disabled) style.filter = 'brightness(1.08)';
  if (active && !disabled) style.transform = 'scale(0.97)';
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--color-text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '20px',
      height: '20px',
      borderRadius: 'var(--radius-s)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'transparent' : 'var(--color-border-default)'),
      background: checked ? 'var(--brand-gradient)' : 'var(--color-bg-inset)',
      transition: 'background var(--duration-base)'
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--color-text-on-accent)',
    strokeWidth: 3
  }, React.createElement('path', {
    d: 'M20 6L9 17l-5-5'
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder = '',
  type = 'text',
  value,
  onChange,
  error = ''
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-sans)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--text-body-s)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--color-text-secondary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--color-text-primary)',
      background: 'var(--color-bg-inset)',
      border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--color-accent-primary)' : 'var(--color-border-default)'),
      borderRadius: 'var(--radius-m)',
      padding: '11px 14px',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px var(--color-focus-ring)' : 'none',
      transition: 'box-shadow var(--duration-base),border-color var(--duration-base)'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--color-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--color-text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('span', {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: '40px',
      height: '22px',
      borderRadius: 'var(--radius-pill)',
      position: 'relative',
      display: 'inline-block',
      background: checked ? 'var(--brand-gradient)' : 'var(--color-bg-inset)',
      border: '1px solid ' + (checked ? 'transparent' : 'var(--color-border-default)'),
      transition: 'background var(--duration-base)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: '2px',
      left: checked ? '20px' : '2px',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--duration-base) var(--ease-standard)',
      boxShadow: 'var(--shadow-s)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function Card({
  title,
  subtitle,
  children,
  footer
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--color-bg-surface-raised)',
      border: '1px solid var(--color-border-subtle)',
      borderRadius: 'var(--radius-m)',
      padding: '20px',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, (title || subtitle) && React.createElement('div', null, title && React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-s)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)'
    }
  }, title), subtitle && React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--color-text-secondary)',
      marginTop: '2px'
    }
  }, subtitle)), children && React.createElement('div', null, children), footer && React.createElement('div', {
    style: {
      borderTop: '1px solid var(--color-border-subtle)',
      paddingTop: '12px'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--color-border-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 16px',
      fontSize: 'var(--text-body-m)',
      fontWeight: 'var(--fw-semibold)',
      color: t === active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
      borderBottom: '2px solid ' + (t === active ? 'var(--color-accent-primary)' : 'transparent'),
      transition: 'color var(--duration-base)'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ir-metrics/CampaignDetailScreen.jsx
try { (() => {
function CampaignDetailScreen({
  campaign,
  onBack
}) {
  const {
    Card,
    Badge,
    Button,
    Tag
  } = window.IIRLabsDesignSystem_8a63de;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  if (!campaign) return null;
  return React.createElement('div', {
    style: {
      flex: 1,
      padding: '28px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontFamily: 'var(--font-sans)',
      overflow: 'auto'
    }
  }, React.createElement('div', null, React.createElement(Button, {
    variant: 'ghost',
    size: 's',
    onClick: onBack,
    icon: React.createElement('i', {
      'data-lucide': 'arrow-left',
      style: {
        width: '14px',
        height: '14px'
      }
    })
  }, 'Campanhas')), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-l)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)'
    }
  }, campaign.name), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px'
    }
  }, React.createElement(Tag, null, campaign.channel), React.createElement(Badge, {
    tone: campaign.tone
  }, campaign.status))), React.createElement(Button, {
    variant: 'secondary'
  }, 'Editar orcamento')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '16px'
    }
  }, React.createElement(Card, {
    title: 'Investido'
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-m)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)'
    }
  }, campaign.spend)), React.createElement(Card, {
    title: 'Custo por lead'
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-m)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)'
    }
  }, campaign.cpl)), React.createElement(Card, {
    title: 'Atribuicao'
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-m)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)'
    }
  }, 'ctwa_clid'))), React.createElement(Card, {
    title: 'Alertas ativos'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-body-s)'
    }
  }, React.createElement('i', {
    'data-lucide': 'bell',
    style: {
      width: '16px',
      height: '16px',
      color: 'var(--color-warning)'
    }
  }), 'Orcamento diario proximo do limite — restam R$ 320 hoje.')));
}
window.CampaignDetailScreen = CampaignDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ir-metrics/CampaignDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ir-metrics/DashboardScreen.jsx
try { (() => {
const kpis = [{
  label: 'Investimento (30d)',
  value: 'R$ 24.380',
  delta: '+6,2%',
  tone: 'success'
}, {
  label: 'Leads gerados',
  value: '312',
  delta: '+18%',
  tone: 'success'
}, {
  label: 'Custo por lead',
  value: 'R$ 78,14',
  delta: '-4,3%',
  tone: 'success'
}, {
  label: 'ROAS',
  value: '3,4x',
  delta: '-0,2x',
  tone: 'warning'
}];
const campaigns = [{
  name: 'Black Friday — Conversao',
  channel: 'Meta Ads',
  status: 'Ativa',
  tone: 'success',
  spend: 'R$ 8.240',
  cpl: 'R$ 62,10'
}, {
  name: 'Busca — Marca',
  channel: 'Google Ads',
  status: 'Ativa',
  tone: 'success',
  spend: 'R$ 5.120',
  cpl: 'R$ 41,80'
}, {
  name: 'Retargeting — Carrinho',
  channel: 'Meta Ads',
  status: 'Orcamento 82%',
  tone: 'warning',
  spend: 'R$ 4.980',
  cpl: 'R$ 95,40'
}, {
  name: 'Display — Awareness',
  channel: 'Google Ads',
  status: 'Pausada',
  tone: 'neutral',
  spend: 'R$ 2.010',
  cpl: 'R$ 133,00'
}];
function DashboardScreen({
  onSelectCampaign
}) {
  const {
    Card,
    Badge,
    Tabs
  } = window.IIRLabsDesignSystem_8a63de;
  const [range, setRange] = React.useState('30 dias');
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement('div', {
    style: {
      flex: 1,
      padding: '28px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      fontFamily: 'var(--font-sans)',
      overflow: 'auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-l)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)'
    }
  }, 'Visao geral'), React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--color-text-tertiary)'
    }
  }, 'Meta Ads + Google Ads, todas as contas')), React.createElement(Tabs, {
    tabs: ['7 dias', '30 dias', '90 dias'],
    active: range,
    onChange: setRange
  })), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '16px'
    }
  }, kpis.map(k => React.createElement(Card, {
    key: k.label
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--color-text-secondary)'
    }
  }, k.label), React.createElement('div', {
    style: {
      fontSize: 'var(--text-heading-l)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--color-text-primary)',
      margin: '6px 0'
    }
  }, k.value), React.createElement(Badge, {
    tone: k.tone
  }, k.delta + ' vs. periodo anterior')))), React.createElement(Card, {
    title: 'Investimento diario',
    subtitle: 'Meta Ads vs Google Ads'
  }, React.createElement('svg', {
    viewBox: '0 0 600 160',
    style: {
      width: '100%',
      height: '160px'
    }
  }, React.createElement('defs', null, React.createElement('linearGradient', {
    id: 'g1',
    x1: '0',
    y1: '0',
    x2: '1',
    y2: '0'
  }, React.createElement('stop', {
    offset: '0%',
    stopColor: '#2DDCEB'
  }), React.createElement('stop', {
    offset: '100%',
    stopColor: '#1296D4'
  }))), React.createElement('polyline', {
    points: '0,120 80,100 160,110 240,70 320,80 400,40 480,55 560,20',
    fill: 'none',
    stroke: 'url(#g1)',
    strokeWidth: '3'
  }), React.createElement('polyline', {
    points: '0,140 80,135 160,138 240,120 320,130 400,110 480,118 560,100',
    fill: 'none',
    stroke: 'var(--color-border-strong)',
    strokeWidth: '2'
  }))), React.createElement(Card, {
    title: 'Campanhas',
    subtitle: 'Clique para ver detalhes'
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, campaigns.map((c, i) => React.createElement('div', {
    key: c.name,
    onClick: () => onSelectCampaign && onSelectCampaign(c),
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
      gap: '12px',
      padding: '12px 8px',
      cursor: 'pointer',
      borderTop: i === 0 ? 'none' : '1px solid var(--color-border-subtle)',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--color-text-primary)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--text-body-s)'
    }
  }, c.name), React.createElement('span', {
    style: {
      color: 'var(--color-text-tertiary)',
      fontSize: 'var(--text-body-s)'
    }
  }, c.channel), React.createElement(Badge, {
    tone: c.tone
  }, c.status), React.createElement('span', {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-body-s)'
    }
  }, c.spend), React.createElement('span', {
    style: {
      color: 'var(--color-text-secondary)',
      fontSize: 'var(--text-body-s)'
    }
  }, 'CPL ' + c.cpl))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ir-metrics/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ir-metrics/LoginScreen.jsx
try { (() => {
function LoginScreen({
  onLogin
}) {
  const {
    Input,
    Button
  } = window.IIRLabsDesignSystem_8a63de;
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  return React.createElement('div', {
    style: {
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--iir-black-950)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      width: '360px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '8px'
    }
  }, React.createElement('img', {
    src: '../../assets/logo-stacked-white.png',
    style: {
      height: '64px'
    }
  }), React.createElement('span', {
    style: {
      color: 'var(--color-text-tertiary)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase'
    }
  }, 'IR Metrics')), React.createElement(Input, {
    label: 'E-mail',
    placeholder: 'voce@empresa.com',
    value: email,
    onChange: e => setEmail(e.target.value)
  }), React.createElement(Input, {
    label: 'Senha',
    type: 'password',
    placeholder: '••••••••',
    value: pass,
    onChange: e => setPass(e.target.value)
  }), React.createElement(Button, {
    variant: 'primary',
    size: 'l',
    onClick: onLogin
  }, 'Entrar'), React.createElement('span', {
    style: {
      color: 'var(--color-text-tertiary)',
      fontSize: 'var(--text-caption)',
      textAlign: 'center'
    }
  }, 'Monitoramento inteligente de midia paga.')));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ir-metrics/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ir-metrics/Sidebar.jsx
try { (() => {
const items = [{
  id: 'overview',
  label: 'Visao geral',
  icon: 'layout-dashboard'
}, {
  id: 'campaigns',
  label: 'Campanhas',
  icon: 'megaphone'
}, {
  id: 'alerts',
  label: 'Alertas',
  icon: 'bell'
}, {
  id: 'reports',
  label: 'Relatorios',
  icon: 'file-text'
}, {
  id: 'settings',
  label: 'Configuracoes',
  icon: 'settings'
}];
function Sidebar({
  active,
  onNavigate
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return React.createElement('div', {
    style: {
      width: '220px',
      minWidth: '220px',
      background: 'var(--iir-navy-900)',
      borderRight: '1px solid var(--color-border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 12px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      gap: '4px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '0 8px',
      marginBottom: '24px'
    }
  }, React.createElement('img', {
    src: '../../assets/logo-app-icon.png',
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '7px'
    }
  }), React.createElement('span', {
    style: {
      color: 'var(--color-text-primary)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-body-m)'
    }
  }, 'IR Metrics')), items.map(it => React.createElement('div', {
    key: it.id,
    onClick: () => onNavigate && onNavigate(it.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 12px',
      borderRadius: 'var(--radius-m)',
      cursor: 'pointer',
      color: active === it.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
      background: active === it.id ? 'var(--color-bg-surface-raised)' : 'transparent',
      fontSize: 'var(--text-body-s)',
      fontWeight: 'var(--fw-medium)',
      transition: 'background var(--duration-base)'
    }
  }, React.createElement('i', {
    'data-lucide': it.icon,
    style: {
      width: '16px',
      height: '16px',
      color: active === it.id ? 'var(--color-accent-primary)' : 'var(--color-text-tertiary)'
    }
  }), it.label)));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ir-metrics/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

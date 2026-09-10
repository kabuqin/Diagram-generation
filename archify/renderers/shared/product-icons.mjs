import { esc } from './utils.mjs';

// Authored line-art product logos drawn on a 24x24 grid. They are stroke-only
// shapes (filled dots use class="icon-fill") so the viewer stylesheet keeps a
// single source of truth for weight, caps, joins, and semantic tone color.
const PRODUCT_ICON_SHAPES = {
  user: `<circle cx="12" cy="12" r="9"/>
         <circle cx="12" cy="9.6" r="3"/>
         <path d="M6.6 17.4c1.1-2.7 3.1-4.1 5.4-4.1s4.3 1.4 5.4 4.1"/>`,
  cdn: `<circle cx="12" cy="12" r="8.5"/>
        <ellipse cx="12" cy="12" rx="3.8" ry="8.5"/>
        <path d="M3.5 12h17M4.7 7.8h14.6M4.7 16.2h14.6"/>`,
  ddos: `<path d="M12 2.8 19 5.4v4.8c0 4.5-2.7 7.8-7 9.4-4.3-1.6-7-4.9-7-9.4V5.4Z"/>
         <circle cx="12" cy="10.2" r="1.3" class="icon-fill"/>
         <path d="M12 6.4v1.5M12 12.5v1.5M8.2 10.2h1.5M14.3 10.2h1.5M9.4 7.6l1.1 1.1M13.5 11.7l1.1 1.1M14.6 7.6l-1.1 1.1M10.5 11.7l-1.1 1.1"/>`,
  waf: `<path d="M12 2.8 19 5.4v4.8c0 4.5-2.7 7.8-7 9.4-4.3-1.6-7-4.9-7-9.4V5.4Z"/>
        <path d="M12 7.6c2 2.2 3 3.9 3 5.4a3 3 0 0 1-6 0c0-1.5 1-3.2 3-5.4Z"/>`,
  firewall: `<rect x="3.5" y="6.5" width="17" height="11" rx="1.5"/>
             <path d="M3.5 10.2h17M3.5 13.8h17M9.2 6.5v3.7M14.8 6.5v3.7M6.4 10.2v3.6M12 10.2v3.6M17.6 10.2v3.6M9.2 13.8v3.7M14.8 13.8v3.7"/>`,
  bastion: `<rect x="5.5" y="10.5" width="13" height="9" rx="2"/>
            <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>
            <circle cx="12" cy="14.2" r="1.3" class="icon-fill"/>
            <path d="M12 15.5v1.9"/>`,
  slb: `<circle cx="12" cy="5.6" r="2.6"/>
        <circle cx="5.4" cy="18" r="2.6"/>
        <circle cx="12" cy="18" r="2.6"/>
        <circle cx="18.6" cy="18" r="2.6"/>
        <path d="M12 8.2v7.2M5.4 15.4v-2.2h13.2v2.2"/>`,
  'waf-cloud': `<path d="M6.5 12h10.2a3.2 3.2 0 0 0 .3-6.4 5.2 5.2 0 0 0-9.9-1.6 4.1 4.1 0 0 0-.6 8Z"/>
                <path d="M12 12.6l3.4 1.3v2.3c0 2.1-1.3 3.7-3.4 4.4-2.1-.7-3.4-2.3-3.4-4.4v-2.3Z"/>
                <path d="m10.7 16.4 1 1 1.9-1.9"/>`,
  ecs: `<rect x="4.5" y="4.5" width="15" height="6.2" rx="1.6"/>
        <rect x="4.5" y="13.3" width="15" height="6.2" rx="1.6"/>
        <circle cx="7.7" cy="7.6" r=".95" class="icon-fill"/>
        <circle cx="7.7" cy="16.4" r=".95" class="icon-fill"/>
        <path d="M11.2 7.6h5.4M11.2 16.4h5.4"/>`,
  'vpc-firewall': `<rect x="3.5" y="5.5" width="5.4" height="13" rx="1.2"/>
                   <rect x="15.1" y="5.5" width="5.4" height="13" rx="1.2"/>
                   <path d="M3.5 9.8h5.4M3.5 14.2h5.4M15.1 9.8h5.4M15.1 14.2h5.4"/>
                   <path d="M9.4 12h5.2M11 10.4 9.4 12l1.6 1.6M13 10.4l1.6 1.6-1.6 1.6"/>`,
  rds: `<ellipse cx="12" cy="5.8" rx="7" ry="2.6"/>
        <path d="M5 5.8v12.4c0 1.5 3.1 2.6 7 2.6s7-1.1 7-2.6V5.8M5 12c0 1.5 3.1 2.6 7 2.6s7-1.1 7-2.6"/>`,
  oss: `<path d="M12 3.2 20 7.6v8.8L12 20.8 4 16.4V7.6Z"/>
        <path d="M4 7.6l8 4.4 8-4.4M12 12v8.8"/>`,
};

export function renderProductIcon(id, { x, y, size = 26, tone = 'neutral' } = {}) {
  const shape = PRODUCT_ICON_SHAPES[id];
  if (!shape) return '';
  const scale = size / 24;
  return `<g aria-hidden="true" data-product-icon="${esc(id)}" class="product-icon s-${esc(tone)}" transform="translate(${x} ${y}) scale(${scale})">
            ${shape}
          </g>`;
}

// Travel Go - Reusable UI Components & Icons
(function() {
  const { createElement: h, useState, useEffect, useMemo, useRef } = React;

  // Icon Components (Crisp, High-Resolution SVG)
  const Icons = {
    Compass: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: 12, cy: 12, r: 10 }),
      h('polygon', { points: '16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76' })
    ),
    MapPin: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' }),
      h('circle', { cx: 12, cy: 10, r: 3 })
    ),
    Calendar: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2, ry: 2 }),
      h('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
      h('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
      h('line', { x1: 3, y1: 10, x2: 21, y2: 10 })
    ),
    Users: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: 9, cy: 7, r: 4 }),
      h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
      h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' })
    ),
    Search: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: 11, cy: 11, r: 8 }),
      h('line', { x1: 21, y1: 21, x2: 16.65, y2: 16.65 })
    ),
    Star: ({ filled = true, ...props }) => h('svg', { ...props, fill: filled ? 'currentColor' : 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
    ),
    Heart: ({ filled = false, ...props }) => h('svg', { ...props, fill: filled ? 'currentColor' : 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' })
    ),
    Check: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '20 6 9 17 4 12' })
    ),
    X: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
      h('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
    ),
    ArrowRight: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('line', { x1: 5, y1: 12, x2: 19, y2: 12 }),
      h('polyline', { points: '12 5 19 12 12 19' })
    ),
    ArrowLeft: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('line', { x1: 19, y1: 12, x2: 5, y2: 12 }),
      h('polyline', { points: '12 19 5 12 12 5' })
    ),
    Clock: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: 12, cy: 12, r: 10 }),
      h('polyline', { points: '12 6 12 12 16 14' })
    ),
    Shield: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    ),
    Award: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: 12, cy: 8, r: 7 }),
      h('polyline', { points: '8.21 13.89 7 23 12 20 17 23 15.79 13.88' })
    ),
    Tag: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' }),
      h('line', { x1: 7, y1: 7, x2: 7.01, y2: 7 })
    ),
    Headset: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M3 18v-6a9 9 0 0 1 18 0v6' }),
      h('path', { d: 'M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' })
    ),
    Globe: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('circle', { cx: 12, cy: 12, r: 10 }),
      h('line', { x1: 2, y1: 12, x2: 22, y2: 12 }),
      h('path', { d: 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z' })
    ),
    Menu: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('line', { x1: 3, y1: 12, x2: 21, y2: 12 }),
      h('line', { x1: 3, y1: 6, x2: 21, y2: 6 }),
      h('line', { x1: 3, y1: 18, x2: 21, y2: 18 })
    ),
    Phone: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' })
    ),
    Mail: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' }),
      h('polyline', { points: '22,6 12,13 2,6' })
    ),
    ChevronDown: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '6 9 12 15 18 9' })
    ),
    ChevronUp: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polyline', { points: '18 15 12 9 6 15' })
    ),
    Sparkles: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('path', { d: 'M12 3v3m0 12v3M3 12h3m12 0h3m-2.6-6.4l-2.1 2.1M8.7 15.3l-2.1 2.1m0-11.4l2.1 2.1m8.6 8.6l2.1 2.1' })
    ),
    Filter: (props) => h('svg', { ...props, fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
      h('polygon', { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' })
    )
  };

  // Price Formatter Helper
  function formatPrice(usdAmount, currencyCode = 'USD') {
    const cur = window.TRAVEL_DATA.currencies[currencyCode] || window.TRAVEL_DATA.currencies.USD;
    const converted = Math.round(usdAmount * cur.rate);
    return `${cur.symbol}${converted.toLocaleString()}`;
  }

  // Expose to window
  window.TravelComponents = {
    Icons,
    formatPrice
  };
})();

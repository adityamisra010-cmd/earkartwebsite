// ============================================================================
// Earkart — Inline SVG icon set (stroke = currentColor). Lightweight, no deps.
// The `wave` / `audiogram` motifs are the brand signature device.
// ============================================================================

const s = (paths, opts = {}) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${opts.w || 1.6}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

export const icons = {
  ear: s('<path d="M6 10a6 6 0 1 1 11 3.5c-1.5 1.6-2.5 2-2.5 4a2.5 2.5 0 0 1-4.9.7"/><path d="M9 9.5A3 3 0 0 1 14.5 11"/>'),
  wave: s('<path d="M4 12h1.5M8 12h1.5M12 12h1.5M16 12h1.5"/><path d="M6 8v8M10 6v12M14 5v14M18 9v6"/>', { w: 1.5 }),
  soundwave: s('<path d="M3 12v0M6.5 9v6M10 5.5v13M13.5 8v8M17 4.5v15M20.5 10v4"/>', { w: 1.8 }),
  calendar: s('<rect x="3.5" y="4.5" width="17" height="16" rx="2.5"/><path d="M3.5 9h17M8 3v3M16 3v3"/><path d="M8 13h.01M12 13h.01M16 13h.01"/>'),
  phone: s('<path d="M6.5 3.5h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"/>'),
  whatsapp: s('<path d="M4 20l1.4-4A8 8 0 1 1 8 18.5L4 20Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1.2-.5 1.2-1l-.2-1.2-1.8-.6-.8.9c-1-.4-1.8-1.2-2.2-2.2l.9-.8-.6-1.8L10 8.3c-.6 0-1 .6-1 1.2Z"/>'),
  pin: s('<path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z"/><circle cx="12" cy="11" r="2.3"/>'),
  mail: s('<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M4 7l8 6 8-6"/>'),
  check: s('<path d="M20 6L9 17l-5-5"/>', { w: 2 }),
  checkCircle: s('<circle cx="12" cy="12" r="9"/><path d="M8.5 12l2.3 2.3L15.5 9.5"/>'),
  shield: s('<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/>'),
  users: s('<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><path d="M16 6a3 3 0 0 1 0 6M17 13.5a5.5 5.5 0 0 1 3.5 5"/>'),
  headset: s('<path d="M5 13v-1a7 7 0 0 1 14 0v1"/><rect x="3.5" y="13" width="3.5" height="6" rx="1.5"/><rect x="17" y="13" width="3.5" height="6" rx="1.5"/><path d="M19 19a4 4 0 0 1-4 3h-2"/>'),
  chart: s('<path d="M4 4v16h16"/><path d="M8 15l3-4 3 2 4-6"/>'),
  document: s('<path d="M7 3.5h6l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path d="M13 3.5V8h4"/><path d="M9 13h6M9 16.5h6"/>'),
  download: s('<path d="M12 4v10m0 0l-4-4m4 4l4-4"/><path d="M5 18.5h14"/>'),
  arrowRight: s('<path d="M5 12h14m0 0l-6-6m6 6l-6 6"/>', { w: 1.8 }),
  chevronDown: s('<path d="M6 9l6 6 6-6"/>', { w: 1.8 }),
  chevronRight: s('<path d="M9 6l6 6-6 6"/>', { w: 1.8 }),
  plus: s('<path d="M12 5v14M5 12h14"/>', { w: 1.8 }),
  search: s('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
  sparkle: s('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>'),
  handshake: s('<path d="M4 9l4-3 4 2 4-2 4 3"/><path d="M4 9v5l5 4 3-2 3 2 5-4V9"/><path d="M12 8l-2.5 2.5a1.5 1.5 0 0 0 2 2L14 10"/>'),
  clinic: s('<path d="M4 20V9l8-5 8 5v11"/><path d="M4 20h16"/><path d="M10 20v-4h4v4"/><path d="M12 7.5v3M10.5 9h3"/>'),
  clock: s('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  bluetooth: s('<path d="M8 7l8 5-4 3V5l4 3-8 5"/>'),
  volume: s('<path d="M4 9v6h3l5 4V5L7 9H4Z"/><path d="M16 9a4 4 0 0 1 0 6"/>'),
  globe: s('<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.3 2.5 14.7 0 17M12 3.5c-2.5 2.3-2.5 14.7 0 17"/>'),
  star: s('<path d="M12 4l2.3 4.7 5.2.8-3.8 3.7.9 5.1L12 15.9 7.4 18.3l.9-5.1L4.5 9.5l5.2-.8L12 4Z"/>'),
  quote: s('<path d="M9 7c-2.5 0-4 2-4 4.5S6.5 16 9 16c0-2 .5-3 .5-3H7s0-3.5 2-3.5V7Zm9 0c-2.5 0-4 2-4 4.5S15.5 16 18 16c0-2 .5-3 .5-3H16s0-3.5 2-3.5V7Z" fill="currentColor" stroke="none"/>'),
  menu: s('<path d="M4 7h16M4 12h16M4 17h16"/>', { w: 1.8 }),
  close: s('<path d="M6 6l12 12M18 6L6 18"/>', { w: 1.8 }),
  linkedin: s('<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10v6M8 7v.01M12 16v-3.5a2 2 0 0 1 4 0V16"/>'),
  instagram: s('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17 7v.01"/>'),
  facebook: s('<path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 0 1 1-1Z"/>'),
  youtube: s('<rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.5l4 2.5-4 2.5v-5Z" fill="currentColor" stroke="none"/>'),
};

// Signature soundwave motif — a decorative audiogram-style curve device.
export const brandWave = (id = "w") => `
<svg class="brand-wave" viewBox="0 0 480 120" fill="none" aria-hidden="true" preserveAspectRatio="none">
  <path class="brand-wave__line brand-wave__line--1" d="M0 60 Q60 10 120 60 T240 60 T360 60 T480 60" stroke="currentColor" stroke-width="1.4"/>
  <path class="brand-wave__line brand-wave__line--2" d="M0 72 Q60 30 120 72 T240 72 T360 72 T480 72" stroke="currentColor" stroke-width="1" opacity="0.55"/>
  <path class="brand-wave__line brand-wave__line--3" d="M0 48 Q60 90 120 48 T240 48 T360 48 T480 48" stroke="currentColor" stroke-width="1" opacity="0.4"/>
</svg>`;

// Equalizer-style vertical bars (used as a compact brand accent)
export const equalizer = () => `
<span class="eq" aria-hidden="true">
  <span class="eq__bar"></span><span class="eq__bar"></span><span class="eq__bar"></span>
  <span class="eq__bar"></span><span class="eq__bar"></span>
</span>`;

export const logo = () => `
<span class="logo" aria-label="Earkart home">
  <svg class="logo__mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="18.5" stroke="currentColor" stroke-width="1.4" opacity="0.35"/>
    <path d="M12 24a8 8 0 1 1 14 -5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M15 22a4 4 0 0 1 6 -2.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 26.5c0 1.6 -1 2.6 -2.6 2.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="27" cy="14" r="1.6" fill="currentColor"/>
  </svg>
  <span class="logo__type"><span class="logo__ear">ear</span>KART</span>
</span>`;

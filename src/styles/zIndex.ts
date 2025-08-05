export const Z_INDEX = {
  // Base interface elements
  BASE: 1,

  // Dropdown elements and tooltips
  DROPDOWN: 100,
  TOOLTIP: 200,

  // Sticky elements
  STICKY: 500,

  // Navigation and headers
  HEADER: 1000,
  NAVIGATION: 1000,

  // Modal windows (by priority)
  MODAL_BACKDROP: 2000,
  MODAL_LOW: 2100, // Regular modal windows
  MODAL_MEDIUM: 2500, // Important modal windows
  MODAL_HIGH: 3000, // Critical modal windows (confirmations)

  // Notifications and alerts
  NOTIFICATION: 4000,
  ALERT: 4500,

  // Absolutely top level (loaders, overlays)
  OVERLAY: 9000,
  LOADER: 9500,
  DEBUG: 9999,
} as const;

export type ZIndexKey = keyof typeof Z_INDEX;

export const getZIndex = (key: ZIndexKey): number => Z_INDEX[key];

export const Z_INDEX = {
  BASE: 1,

  DROPDOWN: 100,

  HEADER: 1000,

  MODAL_MEDIUM: 2500,
  MODAL_HIGH: 3000,
} as const;

export type ZIndexKey = keyof typeof Z_INDEX;

export const getZIndex = (key: ZIndexKey): number => Z_INDEX[key];

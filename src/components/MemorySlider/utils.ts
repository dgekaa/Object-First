export const getSliderPosition = (val: number | string): number => {
  const numValue = val === '' ? 0 : Number(val);
  return Math.min((numValue / 50) * 100, 100);
};

export const getValueFromPosition = (position: number): number => {
  return Math.round((position / 100) * 50);
};

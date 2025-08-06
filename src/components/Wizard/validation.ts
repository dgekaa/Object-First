const MIN_CPU_COUNT = 1;
const MAX_CPU_COUNT = 12;

const MIN_RAM_SIZE = 1;
const MAX_RAM_SIZE = 50;

const MAX_NAME_LENGTH = 80;
const NAME_REGEX = /^[a-zA-Z0-9\s\-_.]+$/;

export const validateVMName = (name: string): string => {
  if (!name.trim()) {
    return '';
  }
  if (name.length > MAX_NAME_LENGTH) {
    return 'Name is too long';
  }

  if (!NAME_REGEX.test(name)) {
    return 'Name contains invalid characters';
  }
  return '';
};

export const validateCPUCount = (count: number | string): string => {
  if (count === '' || count === null || count === undefined) {
    return 'CPU count is required';
  }

  const numCount = Number(count);
  if (isNaN(numCount) || numCount < MIN_CPU_COUNT || numCount > MAX_CPU_COUNT) {
    return `Number of processors must be between ${MIN_CPU_COUNT} and ${MAX_CPU_COUNT}`;
  }

  return '';
};

export const validateRAMSize = (size: number | string): string => {
  if (size === '' || size === null || size === undefined) {
    return 'RAM size is required';
  }

  const numSize = Number(size);
  if (isNaN(numSize) || numSize < MIN_RAM_SIZE || numSize > MAX_RAM_SIZE) {
    return `Enter memory amount from ${MIN_RAM_SIZE} to ${MAX_RAM_SIZE}GB`;
  }

  return '';
};

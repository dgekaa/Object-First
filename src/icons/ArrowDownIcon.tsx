import type { JSX } from 'react';

interface ArrowDownIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ArrowDownIcon = ({
  width = 12,
  height = 12,
  className,
}: ArrowDownIconProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10.5C5.72386 10.5 5.5 10.2761 5.5 10V3.5C5.5 3.22386 5.72386 3 6 3C6.27614 3 6.5 3.22386 6.5 3.5V8.29289L8.14645 6.64645C8.34171 6.45118 8.65829 6.45118 8.85355 6.64645C9.04882 6.84171 9.04882 7.15829 8.85355 7.35355L6.35355 9.85355C6.15829 10.0488 5.84171 10.0488 5.64645 9.85355L3.14645 7.35355C2.95118 7.15829 2.95118 6.84171 3.14645 6.64645C3.34171 6.45118 3.65829 6.45118 3.85355 6.64645L5.5 8.29289V10C5.5 10.2761 5.72386 10.5 6 10.5Z"
      fill="currentColor"
    />
  </svg>
);

import type { JSX } from 'react';

interface ArrowIconProps {
  size?: number;
  color?: string;
}

export const ArrowIcon = ({
  size = 16,
  color = 'currentColor',
}: ArrowIconProps): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
  >
    <path
      d="M8 12L12 8L16 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

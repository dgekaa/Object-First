import type { JSX } from 'react';

interface ArrowUpIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ArrowUpIcon = ({
  width = 12,
  height = 12,
  className,
}: ArrowUpIconProps): JSX.Element => (
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
      d="M6 1.5C6.27614 1.5 6.5 1.72386 6.5 2V8.5C6.5 8.77614 6.27614 9 6 9C5.72386 9 5.5 8.77614 5.5 8.5V3.70711L3.85355 5.35355C3.65829 5.54882 3.34171 5.54882 3.14645 5.35355C2.95118 5.15829 2.95118 4.84171 3.14645 4.64645L5.64645 2.14645C5.84171 1.95118 6.15829 1.95118 6.35355 2.14645L8.85355 4.64645C9.04882 4.84171 9.04882 5.15829 8.85355 5.35355C8.65829 5.54882 8.34171 5.54882 8.14645 5.35355L6.5 3.70711V2C6.5 1.72386 6.27614 1.5 6 1.5Z"
      fill="currentColor"
    />
  </svg>
);

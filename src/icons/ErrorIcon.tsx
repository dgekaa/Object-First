import type { JSX } from 'react';

interface ErrorIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ErrorIcon = ({
  className,
  width = 16,
  height = 16,
}: ErrorIconProps): JSX.Element => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="currentColor" />
    <path
      d="M8 4C8.55228 4 9 4.44772 9 5V8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8V5C7 4.44772 7.44772 4 8 4Z"
      fill="white"
    />
    <circle cx="8" cy="11" r="1" fill="white" />
  </svg>
);

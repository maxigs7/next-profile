import { ComponentPropsWithoutRef } from 'react';

const ChevronDownIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({
  className,
  strokeWidth = 1,
  ...props
}) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default ChevronDownIcon;

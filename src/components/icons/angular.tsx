import { ComponentPropsWithoutRef } from 'react';

const AngularIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 75 75"
  >
    <path fill="#DD0031" d="M37.5 9 9.57 18.96l4.26 36.93L37.5 69l23.67-13.11 4.26-36.93L37.5 9Z" />
    <path fill="#C3002F" d="M37.5 9v6.66-.03V69l23.67-13.11 4.26-36.93L37.5 9Z" />
    <path
      fill="#fff"
      d="M37.5 15.63 20.04 54.78h6.51l3.51-8.76h14.82l3.51 8.76h6.51L37.5 15.63Zm5.1 24.99H32.4l5.1-12.27 5.1 12.27Z"
    />
  </svg>
);

export default AngularIcon;

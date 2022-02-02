import { ComponentPropsWithoutRef } from 'react';

const LogoIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18" className={className}>
    <path
      fill="currentColor"
      d="m9.358 12.173 6.05 3.492-3.751 2.16-2.293-1.32-2.276 1.32-3.756-2.16 6.026-3.492Zm0-6.138 9.011 5.196v2.656l-1.44.847-7.57-4.367-7.548 4.367-1.44-.835V11.23l8.987-5.197ZM9.357 0l9.01 5.19v4.327L9.364 4.333.369 9.529V5.197L9.357 0Z"
    />
  </svg>
);

export default LogoIcon;

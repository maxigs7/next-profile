import { ComponentPropsWithoutRef } from 'react';

const GitIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 75 75"
  >
    <path
      fill="#F05133"
      d="M71.683 34.336 40.663 3.318a4.576 4.576 0 0 0-6.47 0L27.751 9.76l8.17 8.17a5.436 5.436 0 0 1 6.88 6.928l7.876 7.875a5.434 5.434 0 0 1 5.625 1.292 5.445 5.445 0 1 1-8.886 1.778l-7.345-7.344v19.328a5.445 5.445 0 1 1-4.476-.158V28.12a5.444 5.444 0 0 1-2.956-7.14l-8.054-8.056-21.27 21.268a4.577 4.577 0 0 0 0 6.473l31.02 31.019a4.576 4.576 0 0 0 6.472 0l30.875-30.875a4.578 4.578 0 0 0 0-6.473Z"
    />
  </svg>
);

export default GitIcon;

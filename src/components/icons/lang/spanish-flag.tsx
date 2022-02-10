import { ComponentPropsWithoutRef } from 'react';

const SpanishFlagIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 60 60"
  >
    <path
      d="M0 30C0 33.6696 0.660117 37.1847 1.86598 40.4347L30 43.0434L58.134 40.4347C59.3399 37.1847 60 33.6696 60 30C60 26.3304 59.3399 22.8152 58.134 19.5653L30 16.9565L1.86598 19.5653C0.660117 22.8152 0 26.3304 0 30Z"
      fill="#FFDA44"
    />
    <path
      d="M58.134 19.5653C53.8952 8.14137 42.8989 0 30 0C17.101 0 6.10475 8.14137 1.86597 19.5653H58.134Z"
      fill="#D80027"
    />
    <path
      d="M1.86597 40.4347C6.10475 51.8586 17.101 60 30 60C42.8989 60 53.8952 51.8586 58.134 40.4347H1.86597Z"
      fill="#D80027"
    />
  </svg>
);

export default SpanishFlagIcon;

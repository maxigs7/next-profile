import { ComponentPropsWithoutRef } from 'react';

const LinkedinIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className={className}>
    <path
      fill="currentColor"
      d="M17.04 17.041h-2.962v-4.64c0-1.107-.02-2.532-1.542-2.532-1.543 0-1.78 1.206-1.78 2.45v4.722H7.794V7.497h2.845v1.305h.04a3.118 3.118 0 0 1 2.807-1.542c3.003 0 3.557 1.976 3.557 4.546l-.001 5.235ZM4.45 6.193a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.93 17.04H2.965V7.497H5.93v9.544ZM18.518.001H1.476A1.46 1.46 0 0 0 0 1.443v17.114A1.46 1.46 0 0 0 1.476 20h17.042c.808.01 1.47-.636 1.482-1.443V1.442A1.463 1.463 0 0 0 18.518 0"
    />
  </svg>
);

export default LinkedinIcon;

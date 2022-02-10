import { ComponentPropsWithoutRef } from 'react';

const Html5Icon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 75 75"
  >
    <path
      fill="#000"
      d="M15.879 0h3.369v3.34h3.105V0h3.37v10.107h-3.37V6.738h-3.076v3.37H15.88V0Zm14.297 3.37h-2.974V0h9.331v3.37h-2.988v6.737h-3.37V3.37ZM38.013 0h3.53l2.168 3.56L45.879 0h3.53v10.107H46.04v-5.01L43.682 8.73l-2.359-3.632v5.01h-3.31V0Zm13.066 0h3.37v6.768h4.775v3.34h-8.145"
    />
    <path fill="#E44D26" d="m15.762 68.994-4.834-54.258h53.144l-4.834 54.229L37.456 75" />
    <path fill="#F16529" d="M37.5 70.386V19.189h21.724l-4.146 46.29" />
    <path
      fill="#EBEBEB"
      d="M20.8 25.825h16.7v6.65h-9.404l.615 6.812H37.5v6.636H22.617l-1.816-20.098Zm2.11 23.438h6.68l.469 5.317 7.441 1.992v6.944l-13.652-3.809"
    />
    <path
      fill="#fff"
      d="M54.14 25.825H37.47v6.65h16.055l.616-6.65Zm-1.215 13.462H37.47v6.65h8.203l-.776 8.643-7.427 1.992v6.914l13.623-3.779"
    />
  </svg>
);

export default Html5Icon;

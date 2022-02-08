import ActiveLink from '@/components/active-link';
import React, { ComponentProps } from 'react';

interface IProps extends ComponentProps<'div'> {
  href: string;
  onClick?: () => void;
}

const MenuItem: React.FC<IProps> = ({ children, href, onClick }) => {
  return (
    <ActiveLink
      href={href}
      activeClassName="bg-dodgeBlue-500 text-white md:border-b-2 md:border-b-dodgeBlue-500 md:bg-transparent md:text-dodgeBlue-900"
    >
      <a className="flex justify-center items-center py-2 md:px-5 h-full" onClick={onClick}>
        {children}
      </a>
    </ActiveLink>
  );
};

export default React.memo(MenuItem);

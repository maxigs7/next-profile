import { MenuIcon } from '@/components/icons';
import React from 'react';
import { ComponentProps } from 'react';

const MenuButton: React.FC<ComponentProps<'button'>> = (props) => {
  return (
    <button
      type="button"
      className="inline-flex items-center p-2 text-dodgeBlue-900 rounded-lg md:hidden hover:bg-gray-100 ml-auto"
      aria-controls="mobile-menu"
      aria-expanded="false"
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <MenuIcon className="h-6 w-6" />
    </button>
  );
};

export default React.memo(MenuButton);

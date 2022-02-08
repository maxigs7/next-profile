import { useCallback, useState } from 'react';
import LogoLink from './logo-link';
import Menu from './menu';
import MenuButton from './menu-button';
import SocialLinks from './social-links';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onItemClick = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const toggle = useCallback(() => {
    setIsOpen((st) => !st);
  }, [setIsOpen]);

  return (
    <nav className="bg-white h-16 w-screen fixed shadow-sm z-[100]">
      <div className="md:container flex items-center h-full mx-auto flex-wrap">
        {/* LEFT SIDE: Logo */}
        <LogoLink />

        {/* CENTER: MENU */}

        <Menu isOpen={isOpen} onItemClick={onItemClick} />

        {/* RIGHT SIDE: SOCIALS */}
        <SocialLinks />

        {/* MOBILE BUTTON */}
        <MenuButton onClick={toggle} />
      </div>
    </nav>
  );
};

export default Nav;

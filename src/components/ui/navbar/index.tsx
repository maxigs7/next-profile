import { useState } from 'react';
import LogoLink from './logo-link';
import Menu from './menu';
import MenuButton from './menu-button';
import SocialLinks from './social-links';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white h-16 w-screen fixed shadow-sm z-[100]">
      <div className="md:container flex items-center h-full mx-auto flex-wrap">
        {/* LEFT SIDE: Logo */}
        <LogoLink />

        {/* CENTER: MENU */}

        <Menu isOpen={isOpen} />

        {/* RIGHT SIDE: SOCIALS */}
        <SocialLinks />

        {/* MOBILE BUTTON */}
        <MenuButton onClick={() => setIsOpen((st) => !st)} />
      </div>
    </nav>
  );
};

export default Nav;

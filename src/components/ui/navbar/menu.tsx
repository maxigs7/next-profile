import cx from '@/lib/classnames';
import MenuItem from './menu-item';

interface IProps {
  isOpen: boolean;
  onItemClick?: () => void;
}

const Menu: React.FC<IProps> = ({ isOpen, onItemClick }) => {
  const menuClasses = cx(
    'bg-white order-2 basis-full md:h-full border-t-2 border-t-gray-100 md:border-t-0 md:order-[initial] md:basis-[initial] transition origin-top md:transform-none',
    !isOpen && 'scale-y-0 overflow-hidden',
  );
  return (
    <div className={menuClasses}>
      <ul className="flex flex-col md:flex-row uppercase h-full text-center font-medium text-dodgeBlue-900">
        <li>
          <MenuItem onClick={onItemClick} href="/">
            Home
          </MenuItem>
        </li>
        <li>
          <MenuItem onClick={onItemClick} href="/about-me">
            About Me
          </MenuItem>
        </li>
        <li>
          <MenuItem onClick={onItemClick} href="/resume">
            Resume
          </MenuItem>
        </li>
        <li>
          <MenuItem onClick={onItemClick} href="/contact">
            Contact
          </MenuItem>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

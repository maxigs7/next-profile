import { useLocale } from '@/hooks';
import { TranslationTokens } from '@/i18n';
import cx from '@/lib/classnames';
import MenuItem from './menu-item';

interface IProps {
  isOpen: boolean;
  onItemClick?: () => void;
}

const menuItems = [
  {
    href: '/',
    labelKey: 'menu_home' as TranslationTokens,
  },
  {
    href: '/about-me',
    labelKey: 'menu_about_me' as TranslationTokens,
  },
  {
    href: '/resume',
    labelKey: 'menu_resume' as TranslationTokens,
  },
  {
    href: '/contact',
    labelKey: 'menu_contact' as TranslationTokens,
  },
];

const Menu: React.FC<IProps> = ({ isOpen, onItemClick }) => {
  const { locale, t } = useLocale();
  const menuClasses = cx(
    'bg-white order-2 basis-full md:h-full border-t-2 border-t-gray-100 md:border-t-0 md:order-[initial] md:basis-[initial] transition origin-top md:transform-none',
    !isOpen && 'scale-y-0 overflow-hidden',
  );

  return (
    <div className={menuClasses}>
      <ul className="flex flex-col md:flex-row uppercase h-full text-center font-medium text-dodgeBlue-900">
        {menuItems.map((item, index) => (
          <li key={index}>
            <MenuItem onClick={onItemClick} href={item.href} locale={locale}>
              {t(item.labelKey)}
            </MenuItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

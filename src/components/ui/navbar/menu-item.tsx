import ActiveLink from '@/components/active-link';

interface IProps {
  href: string;
}

const MenuItem: React.FC<IProps> = ({ children, href }) => {
  return (
    <ActiveLink
      href={href}
      activeClassName="bg-dodgeBlue-500 text-white md:border-b-2 md:border-b-dodgeBlue-500 md:bg-transparent md:text-dodgeBlue-900"
    >
      <a className="flex justify-center items-center py-2 md:px-5 h-full">{children}</a>
    </ActiveLink>
  );
};

export default MenuItem;

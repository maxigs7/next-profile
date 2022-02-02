import Link from 'next/link';
import { LogoFull, LogoRounded } from '../logo';

const LogoLink: React.FC = () => {
  return (
    <Link href="/">
      <a className="mr-auto">
        <LogoFull className="hidden md:inline-flex" />
        <LogoRounded className="md:hidden" />
      </a>
    </Link>
  );
};

export default LogoLink;

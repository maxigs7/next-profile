import { AccrIcon, LogoIcon } from '@/components/icons';
import cx from '@/lib/classnames';
import { ComponentProps } from 'react';

const LogoFull: React.FC<ComponentProps<'svg'>> = ({ className }) => (
  <div className={cx(className, 'bg-dodgeBlue-500 p-2 text-white')}>
    <LogoIcon className="w-8 h-8" />
    <AccrIcon className="ml-5 w-16 h-8" />
  </div>
);

export default LogoFull;

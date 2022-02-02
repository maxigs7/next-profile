import { LogoIcon } from '@/components/icons';
import cx from '@/lib/classnames';
import { ComponentProps } from 'react';

const LogoRounded: React.FC<ComponentProps<'svg'>> = ({ className }) => (
  <div className={cx(className, 'inline-flex bg-dodgeBlue-500 rounded-full p-2 text-white')}>
    <LogoIcon className="w-8 h-8" />
  </div>
);

export default LogoRounded;

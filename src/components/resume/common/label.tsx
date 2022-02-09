import cx from '@/lib/classnames';
import { ComponentProps } from 'react';

const Label: React.FC<ComponentProps<'div'>> = ({ children, className }) => (
  <div className={cx('bg-dodgeBlue-500 rounded-bl-xl text-white text-sm text-center', className)}>
    {children}
  </div>
);

export default Label;

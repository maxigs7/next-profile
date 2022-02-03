import cx from '@/lib/classnames';
import { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'p'> {}

const Text: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={cx('text-base md:text-lg', className)}>
      {children}
    </p>
  );
};

export default Text;

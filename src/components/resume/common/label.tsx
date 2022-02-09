import cx from '@/lib/classnames';
import { ComponentProps } from 'react';

const Label: React.FC<ComponentProps<'div'>> = ({ children, className }) => (
  <div
    className={cx(
      'bg-dodgeBlue-500 rounded-bl-xl text-white text-xs text-center uppercase px-7 py-1',
      className,
    )}
  >
    {children}
  </div>
);

export default Label;

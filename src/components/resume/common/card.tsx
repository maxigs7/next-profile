import cx from '@/lib/classnames';
import { ComponentProps } from 'react';

const Card: React.FC<ComponentProps<'div'>> = ({ children, className }) => (
  <div className={cx('bg-white rounded-xl shadow', className)}>{children}</div>
);

export default Card;

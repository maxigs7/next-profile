import cx from '@/lib/classnames';
import React from 'react';

interface IProps extends React.ComponentProps<'span'> {}

const Label: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <span className={cx('text-dodgeBlue-900', className)} {...props}>
      {children}
    </span>
  );
};

export default Label;

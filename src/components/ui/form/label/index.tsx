import cx from '@/lib/classnames';
import React from 'react';

const Label: React.FC<React.ComponentProps<'span'>> = ({ children, className, ...props }) => {
  return (
    <span className={cx('text-dodgeBlue-900', className)} {...props}>
      {children}
    </span>
  );
};

export default Label;

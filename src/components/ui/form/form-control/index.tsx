import cx from '@/lib/classnames';
import React from 'react';

const FormControl: React.FC<React.ComponentProps<'label'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <label className={cx('block', className)} {...props}>
      {children}
    </label>
  );
};

export default FormControl;

import cx from '@/lib/classnames';
import React from 'react';

interface IProps extends React.ComponentProps<'label'> {}

const FormControl: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <label className={cx('block', className)} {...props}>
      {children}
    </label>
  );
};

export default FormControl;

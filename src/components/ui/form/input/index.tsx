import cx from '@/lib/classnames';
import React from 'react';

const Input: React.FC<React.ComponentProps<'input'>> = ({ className, type = 'text', ...props }) => {
  return (
    <input
      type={type}
      className={cx(
        'block w-full px-0.5 border-0 border-b-2 border-dodgeBlue-200 focus:ring-0 focus:border-dodgeBlue-500',
        className,
      )}
      placeholder="John Doe"
      {...props}
    />
  );
};

export default Input;

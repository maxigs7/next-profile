import cx from '@/lib/classnames';
import React from 'react';

const Textarea: React.FC<React.ComponentProps<'textarea'>> = ({
  children,
  className,
  rows = 3,
  ...props
}) => {
  return (
    <textarea
      className={cx(
        'block w-full px-0.5 border-0 border-b-2 border-dodgeBlue-200 focus:ring-0 focus:border-dodgeBlue-500',
        className,
      )}
      rows={rows}
      {...props}
    >
      {children}
    </textarea>
  );
};

export default Textarea;

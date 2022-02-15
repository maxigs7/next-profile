import cx from '@/lib/classnames';
import { ComponentPropsWithoutRef } from 'react';

const regex = /text-(xs|sm|base|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/;
const hasTextSize = (className: string) => regex.test(className);

const Text: React.FC<ComponentPropsWithoutRef<'p'>> = ({ children, className, ...props }) => {
  return (
    <p
      {...props}
      className={cx(
        !className && 'text-base md:text-lg',
        className && !hasTextSize(className) && 'text-base md:text-lg',
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Text;

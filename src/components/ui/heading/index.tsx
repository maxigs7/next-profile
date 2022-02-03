import cx from '@/lib/classnames';
import { ComponentProps } from 'react';

interface IProps extends ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type MapType = Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', string>;

const classMap: MapType = {
  h1: 'text-5xl md:text-6xl',
  h2: 'text-4xl md:text-5xl',
  h3: 'text-3xl md:text-4xl',
  h4: 'text-2xl md:text-3xl',
  h5: 'text-xl md:text-2xl',
  h6: 'text-lg md:text-xl',
};

const Heading: React.FC<IProps> = ({ as: Component = 'h1', children, className, ...props }) => {
  return (
    <Component {...props} className={cx(classMap[Component], className)}>
      {children}
    </Component>
  );
};

export default Heading;

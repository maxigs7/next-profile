import { getIcon, Heading, IconType } from '@/components';
import cx from '@/lib/classnames';
import { ComponentPropsWithoutRef, useMemo } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  icon?: IconType;
}

const Title: React.FC<IProps> = ({ children, className, icon }) => {
  const Icon = useMemo(() => icon && getIcon(icon), [icon]);
  return (
    <Heading
      as="h2"
      className={cx(
        'bg-dodgeBlue-500 flex items-center justify-center text-white uppercase px-3 py-1 sm:rounded-md w-full sm:w-auto',
        className,
      )}
    >
      {Icon && <Icon className="h-8 w-8 md:h-10 md:w-10 mr-1" />}
      {children}
    </Heading>
  );
};

export default Title;

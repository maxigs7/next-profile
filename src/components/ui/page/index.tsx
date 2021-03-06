import cx from '@/lib/classnames';
import { ComponentPropsWithoutRef } from 'react';
import Heading from '../heading';
import { useIcon, IconType } from './icon-title';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  icon?: IconType;
  title?: string;
  isContainer?: boolean;
}

const Page: React.FC<IProps> = ({ children, className, icon, isContainer = true, title }) => {
  const classes = cx('relative pt-20', isContainer && 'md:container mx-auto', className);
  const Icon = useIcon(icon);

  return (
    <div className={classes}>
      {title && (
        <Heading className="font-medium text-center flex items-center justify-center">
          {Icon && <Icon className="h-12 w-12 md:h-16 md:w-16 mr-1" />}
          {title}
        </Heading>
      )}
      {children}
    </div>
  );
};

export default Page;

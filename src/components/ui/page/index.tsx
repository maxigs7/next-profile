import cx from '@/lib/classnames';
import { ComponentPropsWithoutRef } from 'react';
import Heading from '../heading';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  icon?: React.ReactNode;
  title?: string;
  isContainer?: boolean;
}

const Page: React.FC<IProps> = ({ children, className, icon, isContainer = true, title }) => {
  const classes = cx('relative pt-20', isContainer && 'md:container mx-auto', className);
  return (
    <div className={classes}>
      {title && (
        <Heading className="font-medium text-center flex items-center justify-center">
          {icon}
          {title}
        </Heading>
      )}
      {children}
    </div>
  );
};

export default Page;

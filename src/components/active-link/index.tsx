import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';
import { Children } from 'react';

interface IProps extends PropsWithChildren<LinkProps> {
  activeClassName: string;
}

const ActiveLink: React.FC<IProps> = ({ activeClassName, children, ...props }) => {
  const { asPath } = useRouter();
  const child: any = Children.only(children);
  const childClassName = child.props.className || '';
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;

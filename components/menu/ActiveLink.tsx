import * as React from 'react';
import { withRouter, RouterProps } from 'next/router';
import Link, { LinkProps } from 'next/link';

const ActiveLink = ({ router, children, ...props }: ActiveLinkProps) => {
  const child = React.Children.only(children);

  let className = child.props.className || null;
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  const handleClick = (e: Event) => {
    e.preventDefault();
    if (!!props.href) {
      router.push(props.href);
    }
  };

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className,
        onClick: handleClick
      })}
    </Link>
  );
};

export interface ActiveLinkProps extends LinkProps {
  router: RouterProps;
  activeClassName?: string;
}

export default withRouter(ActiveLink);

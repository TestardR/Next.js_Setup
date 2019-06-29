import React, { Fragment } from 'react';
import Link from 'next/link';

const Header = props => {
  const title = props.title;
  const children = props.children;

  return (
    <Fragment>
      <h1>{title}</h1>
      {children}
      <Link href="/">
        <a className="headerLink">Go to home page</a>
      </Link>
      <Link href="/about">
        <a className="headerLink">Go to about page</a>
      </Link>
    </Fragment>
  );
};

export default Header;

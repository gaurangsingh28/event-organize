import React from 'react';

import Link from 'next/link';

function NavbarLink({ url, title, className }) {
  return (
    <Link href={url}>
      <a className={className}>{title}</a>
    </Link>
  );
}

export default NavbarLink;

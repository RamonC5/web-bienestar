'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="text-color_text no-underline hover:underline mx-4">
    {children}
  </Link>
);

export default NavLink;
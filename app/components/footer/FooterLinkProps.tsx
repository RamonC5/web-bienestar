'use client';

import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, title, children }) => {
  return (
    <Link href={href} title={title} className="text-text text-sm no-underline transition duration-100 ease-in-out hover:border-b hover:border-black">
      {children}
    </Link>
  );
};

export default FooterLink;

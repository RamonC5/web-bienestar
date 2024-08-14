'use client';

import FooterColumn from "./FooterColumnProps";
import SocialLinks from "./SocialLinksProps";

const Footer: React.FC = () => {

  const companyLinks = [
    { href: '/about', title: 'About Us', label: 'Acerca de nosotros' },
    { href: '/contact', title: 'Contact', label: 'Contacto' },
  ];

  const legalLinks = [
    { href: '/terms', title: 'Terms and services', label: 'Términos de uso' },
    { href: '/privacy', title: 'Privacy Policy', label: 'Privacidad' },
    { href: '/cookies', title: 'Cookies', label: 'Cookies' },
  ];

  const socialLinks = [
    { href: '#', title: 'Instagram', icon: '/assets/icons/redessociales/instagram.svg', alt: 'Instagram' },
    { href: '#', title: 'LinkedIn', icon: '/assets/icons/redessociales/linkedin.svg', alt: 'LinkedIn' },
    { href: '#', title: 'Twitter', icon: '/assets/icons/redessociales/twitter.svg', alt: 'Twitter' },
  ];

  return (
    <footer className="text-center bg-secondary w-full p-5 flex flex-col items-center">
      <div className="w-full max-w-5xl flex flex-col">
        <div className="flex flex-col items-center w-full mt-5 space-y-8 md:flex-row md:justify-around md:space-y-0">
          <FooterColumn title="Compañía" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>
        <div className="w-full mt-5 flex flex-col items-center space-y-2 md:flex-row md:justify-between">
          <small className="text-text">© xxxx <span id="year"></span>, All rights reserved</small>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

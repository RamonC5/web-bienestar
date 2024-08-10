'use client';

interface SocialLinksProps {
  links: { href: string; title: string; icon: string; alt: string }[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex gap-2 mt-2">
      {links.map((link) => (
        <a key={link.href} href={link.href} title={link.title} className="text-text no-underline">
          <img src={link.icon} alt={link.alt} className="w-6 h-6 transition-transform duration-200 ease-in-out transform hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

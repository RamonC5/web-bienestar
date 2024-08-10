import FooterLink from "./FooterLinkProps";

interface FooterColumnProps {
    title: string;
    links: { href: string; title: string; label: string }[];
  }
  
  const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
    return (
      <section>
        <h3 className="text-lg font-bold border-b-2 border-black mb-2">{title}</h3>
        <ul className="list-none p-0 m-0 space-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <FooterLink href={link.href} title={link.title}>
                {link.label}
              </FooterLink>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default FooterColumn;
  
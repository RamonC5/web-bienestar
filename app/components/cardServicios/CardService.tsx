'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CardServiceProps {
  href: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  description?: string;
  experts: string;
}

const CardService: React.FC<CardServiceProps> = ({ href, title, imgSrc, imgAlt, experts }) => {
  return (
    <li className="flex flex-col bg-white rounded-md shadow-md border border-secondary p-4">
      <Link href={href} aria-label={title} className="flex flex-col items-center text-center text-primary no-underline hover:underline">
        <Image src={imgSrc} alt={imgAlt} width={100} height={100} className="mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{experts}</p>
      </Link>
    </li>
  );
};

export default CardService;

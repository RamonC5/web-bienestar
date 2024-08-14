// components/CoverPhoto.tsx
import Image from 'next/image';
import { FC } from 'react';

interface CoverPhotoProps {
  coverPhotoUrl: string;
}

const CoverPhoto: FC<CoverPhotoProps> = ({ coverPhotoUrl }) => (
  <div className="relative w-full h-44 bg-gradient-to-r from-purple-500 to-blue-500">
    <Image src={coverPhotoUrl} alt="Cover Photo" layout="fill" objectFit="cover" className="rounded-b-lg" />
  </div>
);

export default CoverPhoto;

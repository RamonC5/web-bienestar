// components/ProfileAvatar.tsx
import Image from 'next/image';
import { FC } from 'react';

interface ProfileAvatarProps {
  avatarUrl: string;
}

const ProfileAvatar: FC<ProfileAvatarProps> = ({ avatarUrl }) => (
<div className="relative">
  <Image
    src={avatarUrl}
    alt="User avatar"
    width={120}
    height={120}
    className="w-40 h-40 rounded-full border-4 border-white shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2 object-cover" />
</div>
);

export default ProfileAvatar;

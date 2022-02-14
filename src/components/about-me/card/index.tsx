import Image from 'next/image';
import { IProfile } from '@/model';
import React, { ComponentPropsWithoutRef } from 'react';
import { LocationMarkerIcon, Text } from '@/components';
import cx from '@/lib/classnames';

interface IProps extends ComponentPropsWithoutRef<'div'> {
  profile: IProfile;
}

const AboutMeCard: React.FC<IProps> = ({ className, profile }) => {
  return (
    <div
      className={cx(
        'bg-white rounded shadow relative max-w-md p-5 pt-20 md:pt-5 md:pl-32 text-center md:text-left mx-auto',
        className,
      )}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-0 md:-translate-x-1/3 md:-translate-y-1/3">
        <Image
          className="rounded-full w-36 h-36 shadow-sm"
          alt="profile image"
          src="/profile.jpeg"
          quality={80}
          objectFit="cover"
          width="150"
          height="150"
        />
      </div>
      <Text className="font-medium">
        {profile.firstName} {profile.lastName}
      </Text>
      <Text className="uppercase text-sm">{profile.title}</Text>
      <Text className="flex items-center justify-center md:justify-start mt-5 text-sm">
        <LocationMarkerIcon className="w-4 h-4 mr-1" />
        {profile.city}, {profile.country}
      </Text>
    </div>
  );
};

export default AboutMeCard;

import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SkypeIcon,
  TwitterIcon,
} from '@/components';
import { SocialNetwork } from '@/model';
import { ComponentPropsWithoutRef, useMemo } from 'react';

type MapType = Record<SocialNetwork, React.ElementType<ComponentPropsWithoutRef<'svg'>>>;

export const useSocialIcons = (icon: SocialNetwork) => {
  const socialIcons: MapType = useMemo(
    () => ({
      discord: DiscordIcon,
      facebook: FacebookIcon,
      instagram: InstagramIcon,
      linkedin: LinkedinIcon,
      skype: SkypeIcon,
      twitter: TwitterIcon,
    }),
    [],
  );
  return socialIcons[icon];
};

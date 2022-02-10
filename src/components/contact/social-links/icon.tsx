import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  SkypeIcon,
  TwitterIcon,
} from '@/components';
import { SocialNetwork } from '@/model';
import { ComponentPropsWithoutRef } from 'react';

type MapType = Record<SocialNetwork, React.ElementType<ComponentPropsWithoutRef<'svg'>>>;

const socialIcons: MapType = {
  discord: DiscordIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  skype: SkypeIcon,
  twitter: TwitterIcon,
};

export const getSocialIcons = (icon: SocialNetwork) => {
  console.log(icon, socialIcons);
  return socialIcons[icon];
};

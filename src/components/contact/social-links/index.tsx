import cx from '@/lib/classnames';
import { ISocialProfile } from '@/model';
import React from 'react';
import SocialLink from './social-link';

interface IProps extends React.ComponentProps<'div'> {
  profiles: ISocialProfile[];
}

const ContactSocialLinks: React.FC<IProps> = ({ className, profiles }) => {
  return (
    <div className={cx('flex gap-3 justify-center', className)}>
      {profiles.map((profile) => (
        <SocialLink key={profile.network} profile={profile} />
      ))}
    </div>
  );
};

export default ContactSocialLinks;

import cx from '@/lib/classnames';
import { ISocialProfile } from '@/model';
import { getSocialIcons } from './icon';

interface IProps extends React.ComponentProps<'div'> {
  profile: ISocialProfile;
}

const SocialLink: React.FC<IProps> = ({ className, profile }) => {
  const Icon = getSocialIcons(profile.network);
  if (!Icon) return null;

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={profile.url}
      className={cx(
        'rounded-full flex items-center justify-center bg-dodgeBlue-500 text-white p-3',
        className,
      )}
    >
      <Icon className="h-10 w-10" />
    </a>
  );
};

export default SocialLink;

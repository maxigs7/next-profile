import { GithubIcon, LinkedinIcon } from '@/components/icons';

const SocialLinks: React.FC = () => {
  return (
    <div className="md:ml-auto h-full flex items-center">
      <a target="_blank" href="https://github.com/" rel="noopener noreferrer" className="p-2">
        <GithubIcon className="h-6 w-6" />
      </a>
      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer" className="p-2">
        <LinkedinIcon className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;

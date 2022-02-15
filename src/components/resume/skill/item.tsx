import { ISkill } from '@/model';
import { ComponentProps } from 'react';
import { useIcon } from './icon';

type Props = ISkill & Omit<ComponentProps<'div'>, 'id'>;

const SkillItem: React.FC<Props> = ({ identifier }) => {
  const Icon = useIcon(identifier);
  if (!Icon) return null;
  return (
    <Icon className="max-w-20 max-h-20 grayscale hover:grayscale-0 hover:scale-125 hover:drop-shadow-lg transition-transform duration-300 " />
  );
};

export default SkillItem;

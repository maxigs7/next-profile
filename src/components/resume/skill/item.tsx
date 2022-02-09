import { ISkill } from '@/model';
import { ComponentProps, useMemo } from 'react';
import { getIcon } from './icon';

type Props = ISkill & ComponentProps<'div'>;

const SkillItem: React.FC<Props> = ({ id }) => {
  const Icon = useMemo(() => getIcon(id), [id]);
  if (!Icon) return null;
  return (
    <Icon className="max-w-20 max-h-20 grayscale hover:grayscale-0 hover:scale-125 hover:drop-shadow-lg transition-transform duration-300 " />
  );
};

export default SkillItem;

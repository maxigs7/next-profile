import { Heading, SparklesIcon } from '@/components';
import { useLocale } from '@/hooks';
import cx from '@/lib/classnames';
import { ISkill } from '@/model';
import { ComponentProps } from 'react';
import SkillItem from './item';

interface IProps extends ComponentProps<'div'> {
  skills: ISkill[];
}

const SkillList: React.FC<IProps> = ({ className, skills }) => {
  const { t } = useLocale();
  return (
    <div className={cx('bg-dodgeBlue-700 text-dodgeBlue-50 py-5 md:py-10', className)}>
      <Heading as="h2" className="uppercase flex items-center justify-center mb-5">
        <SparklesIcon className="h-8 w-8 md:h-10 md:w-10 mr-1" />
        {t('resume_skills')}
      </Heading>
      <div className="flex flex-col flex-wrap justify-center items-center gap-5 sm:flex-row sm:gap-7 sm:mx-3 md:mx-auto md:gap-14 md:container">
        {skills.map((skill) => (
          <SkillItem {...skill} key={skill.key} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;

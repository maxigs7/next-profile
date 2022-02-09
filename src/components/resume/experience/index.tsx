import cx from '@/lib/classnames';
import { IWork } from '@/model';
import { ComponentProps } from 'react';
import { lineLarge } from '../common/line';
import Title from '../common/title';
import ExperienceItem from './item';

interface IProps extends ComponentProps<'div'> {
  experiences?: IWork[];
}

const ExperienceList: React.FC<IProps> = ({ className, experiences = [] }) => (
  <div className={cx('flex flex-col items-center', className)}>
    <Title icon="briefcase" className="mb-4 md:mb-8">
      Experience
    </Title>
    <div className="flex flex-col gap-8 md:gap-16 items-center">
      {experiences.map((exp) => (
        <ExperienceItem className={cx('max-w-lg', lineLarge)} key={exp.id} {...exp} />
      ))}
    </div>
  </div>
);

export default ExperienceList;

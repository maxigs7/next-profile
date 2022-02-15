import cx from '@/lib/classnames';
import { IWork } from '@/model';
import Image from 'next/image';
import { ComponentProps } from 'react';
import Card from '../common/card';
import TimeLabel from '../common/label';
import { Text } from '../../ui';
import useFormatDistance from '@/lib/useFormatDistance';
import useFormatMonthYear from '@/lib/useFormatMonthYear';

type Props = IWork & ComponentProps<'div'>;

const ExperienceItem: React.FC<Props> = ({
  className,
  company,
  companyId,
  endDate,
  position,
  startDate,
  summary,
}) => {
  const endMonthYear = useFormatMonthYear(endDate) || 'Current';
  const startMonthYear = useFormatMonthYear(startDate);
  const timeAgo = useFormatDistance(startDate, endDate);

  return (
    <Card className={cx('p-3 pt-5 relative mx-2 md:mx-0', className)}>
      <TimeLabel className="absolute top-0 right-0 rounded-tr-xl ">
        {startMonthYear} - {endMonthYear}
      </TimeLabel>

      <header className="flex flex-col justify-center items-center pt-3 sm:flex-row sm:justify-start sm:gap-3">
        <div className="w-[200px] h-[60px] relative">
          <Image
            className="object-center sm:object-left"
            alt={company}
            src={`/${companyId}.png`}
            quality={80}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-center mt-2 sm:text-left sm:mt-0">
          <Text className="uppercase font-semibold">{position}</Text>
          <div className="flex gap-2 items-center">
            <Text className="uppercase font-light">{company}</Text>
            <Text className="text-gray-400 text-sm">({timeAgo})</Text>
          </div>
        </div>
      </header>
      <Text className="text-justify mt-2">{summary}</Text>
    </Card>
  );
};

export default ExperienceItem;

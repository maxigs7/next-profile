import cx from '@/lib/classnames';
import { ICertificate } from '@/model';
import Image from 'next/image';
import { ComponentProps } from 'react';
import Card from '../common/card';
import TimeLabel from '../common/label';
import { Text } from '../../ui';
import useFormatMonthYear from '@/lib/useFormatMonthYear';

type Props = ICertificate & ComponentProps<'div'>;

const CertificateItem: React.FC<Props> = ({ className, date, id, issuer, name }) => {
  const monthYear = useFormatMonthYear(date);
  return (
    <Card className={cx('p-3 pt-5 relative mx-2 md:mx-0', className)}>
      <TimeLabel className="absolute top-0 right-0 rounded-tr-xl">{monthYear}</TimeLabel>

      <header className="flex flex-col justify-center items-center pt-3 sm:flex-row sm:justify-start sm:gap-3">
        <div className="relative min-h-[64px] min-w-[64px]">
          <Image
            className="object-left-top"
            alt={issuer}
            src={`/${id.split('-')[0]}.png`}
            quality={80}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-center mt-2 sm:text-left sm:mt-0">
          <Text className="text-sm uppercase font-semibold">{name}</Text>
          <Text className="text-sm uppercase font-light">{issuer}</Text>
        </div>
      </header>
    </Card>
  );
};

export default CertificateItem;

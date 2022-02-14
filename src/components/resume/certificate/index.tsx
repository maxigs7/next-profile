import { useLocale } from '@/hooks';
import cx from '@/lib/classnames';
import { ICertificate } from '@/model';
import { ComponentProps } from 'react';
import { lineShort } from '../common/line';
import Title from '../common/title';
import CertificateItem from './item';

interface IProps extends ComponentProps<'div'> {
  certificates?: ICertificate[];
}

const CertificateList: React.FC<IProps> = ({ className, certificates = [] }) => {
  const { t } = useLocale();
  return (
    <div className={cx('flex flex-col items-center', className)}>
      <Title icon="academic-cap" className="mb-4 md:mb-8">
        {t('resume_certificate')}
      </Title>
      <div className="flex flex-col gap-5 md:gap-10 items-center">
        {certificates.map((cert) => (
          <CertificateItem className={cx('max-w-lg w-full', lineShort)} key={cert.id} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificateList;

import { GlobeIcon, Heading } from '@/components';
import { useLocale } from '@/hooks';
import cx from '@/lib/classnames';
import { ILanguage } from '@/model';
import { ComponentProps } from 'react';
import LanguageItem from './item';

interface IProps extends ComponentProps<'div'> {
  languages: ILanguage[];
}

const LanguageList: React.FC<IProps> = ({ className, languages }) => {
  const { t } = useLocale();

  return (
    <div className={cx('bg-dodgeBlue-700 text-dodgeBlue-50 py-5 md:py-10', className)}>
      <Heading as="h2" className="uppercase flex items-center justify-center mb-5">
        <GlobeIcon className="h-8 w-8 md:h-10 md:w-10 mr-1" />
        {t('resume_languages')}
      </Heading>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 md:gap-20">
        {languages.map((lang) => (
          <LanguageItem key={lang.code} {...lang} />
        ))}
      </div>
    </div>
  );
};

export default LanguageList;

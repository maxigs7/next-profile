import { StarFilledIcon, StarIcon } from '@/components';
import cx from '@/lib/classnames';
import { ILanguage } from '@/model';
import { ComponentProps, useMemo } from 'react';
import LanguageFlag from './flag';

type Props = ILanguage & ComponentProps<'div'>;

const LanguageItem: React.FC<Props> = ({ className, code, level }) => {
  const stars = useMemo(() => [...new Array(5)], []);
  return (
    <div className={className}>
      <LanguageFlag code={code} className="h-12 w-12 mr-3" />

      {stars.map((v, i) => {
        if (i < level) {
          return (
            <StarFilledIcon
              key={i}
              className={cx('h-10 w-10', i === stars.length - 1 ? 'mr-0' : 'mr-1')}
            />
          );
        }
        return (
          <StarIcon key={i} className={cx('h-10 w-10', i === stars.length - 1 ? 'mr-0' : 'mr-1')} />
        );
      })}
    </div>
  );
};

export default LanguageItem;

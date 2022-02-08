import { EnglishFlagIcon, SpanishFlagIcon } from '@/components';
import { ComponentProps } from 'react';

interface IProps extends ComponentProps<'svg'> {
  code: string;
}

const LanguageFlag: React.FC<IProps> = ({ code, ...props }) => {
  switch (code.toLowerCase()) {
    case 'es':
      return <SpanishFlagIcon {...props} />;
    case 'en':
      return <EnglishFlagIcon {...props} />;
    default:
      return null;
  }
};

export default LanguageFlag;

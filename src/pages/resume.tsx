import { Page, ResumeLanguageList } from '@/components';
import { ILanguage } from '@/model';
import Head from 'next/head';

interface IResumePage {
  languages: ILanguage[];
}

const ResumePage: React.FC<IResumePage> = ({ languages }) => (
  <Page isContainer={false} className="h-screen w-screen" icon="identification" title="Resume">
    <Head>
      <title>MGS - Resume</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ResumeLanguageList languages={languages} className="mt-5" />
  </Page>
);

export default ResumePage;

export async function getStaticProps(): Promise<{ props: IResumePage }> {
  return {
    props: {
      languages: [
        {
          code: 'es',
          name: 'Spanish',
          level: 5,
        },
        {
          code: 'en',
          name: 'English',
          level: 4,
        },
      ],
    },
  };
}

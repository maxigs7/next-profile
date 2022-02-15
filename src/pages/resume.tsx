import { getCertificates, getExperiences, getLanguages, getSkills } from '@/api';
import {
  Page,
  ResumeCertificateList,
  ResumeExperienceList,
  ResumeLanguageList,
  ResumeSkillList,
} from '@/components';
import { useLocale } from '@/hooks';
import { TranslationKey } from '@/i18n';
import { ICertificate, ILanguage, ISkill, IWork } from '@/model';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface IResumePage {
  certificates: ICertificate[];
  experiences: IWork[];
  languages: ILanguage[];
  skills: ISkill[];
}

const ResumePage: React.FC<IResumePage> = ({ certificates, experiences, languages, skills }) => {
  const { t } = useLocale();

  return (
    <Page
      isContainer={false}
      className="min-h-screen pb-3"
      icon="identification"
      title={t('resume_title')}
    >
      <Head>
        <title>MGS - {t('resume_title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResumeLanguageList languages={languages} className="mt-5" />

      <div className="flex flex-col lg:flex-row gap-5 md:container mx-auto justify-center">
        <ResumeExperienceList experiences={experiences} className="mt-5" />
        <ResumeCertificateList certificates={certificates} className="mt-5" />
      </div>

      <ResumeSkillList skills={skills} className="mt-5" />
    </Page>
  );
};

export default ResumePage;

export const getServerSideProps: GetServerSideProps<IResumePage> = async ({ locale }) => {
  const lang = locale as TranslationKey;
  const certificates = await getCertificates(lang);
  const experiences = await getExperiences(lang);
  const languages = await getLanguages(lang);
  const skills = await getSkills();

  return {
    props: {
      certificates,
      experiences,
      languages,
      skills,
    },
  };
};

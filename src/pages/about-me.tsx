import { getProfile } from '@/api';
import { AboutMeCard, AboutMeSummary, Page } from '@/components';
import { TranslationKey } from '@/i18n';
import { IProfile } from '@/model';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface IAboutMePage {
  profile: IProfile;
}

const AboutMePage: React.FC<IAboutMePage> = ({ profile }) => (
  <Page className="min-h-screen pb-3" icon="user-circle" title="About Me">
    <Head>
      <title>MGS - About Me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="pt-16 flex flex-col gap-10">
      <AboutMeCard profile={profile} className="mt-10 md:mt-5" />
      {profile.summary && <AboutMeSummary summary={profile.summary} />}
    </div>
  </Page>
);

export default AboutMePage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const lang = locale as TranslationKey;
  const profile = await getProfile(lang);
  return {
    props: {
      profile,
    },
  };
};

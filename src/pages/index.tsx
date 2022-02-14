import { getProfile } from '@/api';
import { Heading, Page } from '@/components';
import { useLocale } from '@/hooks';
import { TranslationKey } from '@/i18n';
import { IProfile } from '@/model';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface IHomePage {
  profile: IProfile;
}

const HomePage: React.FC<IHomePage> = ({ profile }) => {
  const { t } = useLocale();
  return (
    <Page isContainer={false} className="h-screen w-screen">
      <Head>
        <title>MGS - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        layout="fill"
        className="pointer-events-none"
        alt="Background"
        src="/home-bg.jpeg"
        objectFit="cover"
        quality={100}
      />
      <div className="w-full h-full bg-opacity-50 bg-black flex justify-center items-center z-1 relative">
        <div className="text-center text-white">
          <Heading as="h2" className="mb-4">
            {t('home_title_im')}
          </Heading>
          <Heading className="mb-4 font-bold">
            {profile.firstName} {profile.lastName}
          </Heading>
          <Heading as="h2" className="mb-12">
            {profile.title}
          </Heading>
          <div className="flex flex-col px-10 md:flex-row items-center justify-center">
            <Link href="/about-me">
              <a className="bg-dodgeBlue-500 uppercase text-white text-center p-4 mb-3 w-64 md:mb-0 md:mr-3">
                {t('home_more_about_me_button')}
              </a>
            </Link>
            <Link href="/">
              <a className="bg-dodgeBlue-50 uppercase text-dodgeBlue-900 text-center p-4 w-64">
                {t('home_download_resume_button')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const lang = locale as TranslationKey;
  const profile = await getProfile(lang);
  return {
    props: {
      profile,
    },
  };
};

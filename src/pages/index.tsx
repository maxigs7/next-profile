import { Heading, Page } from '@/components';
import { IProfile } from '@/model';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

interface IHomePage {
  profile: IProfile;
}

export default function Home({ profile }: IHomePage) {
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
            Hi, I&apos;m
          </Heading>
          <Heading className="mb-4 font-bold">
            {profile.firstName} {profile.lastName}
          </Heading>
          <Heading as="h2" className="mb-12">
            {profile.label}
          </Heading>
          <div className="flex flex-col px-10 md:flex-row items-center justify-center">
            <Link href="/about-me">
              <a className="bg-dodgeBlue-500 uppercase text-white text-center p-4 mb-3 w-64 md:mb-0 md:mr-3">
                More About Me
              </a>
            </Link>
            <Link href="/">
              <a className="bg-dodgeBlue-50 uppercase text-dodgeBlue-900 text-center p-4 w-64">
                Download Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  return {
    props: {
      profile: {
        firstName: 'Maximiliano',
        lastName: 'Gonzalez Schweizer',
        label: 'Full Stack Developer',
      } as IProfile,
    },
  };
}

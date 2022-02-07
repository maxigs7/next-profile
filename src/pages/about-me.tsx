import { AboutMeCard, AboutMeSummary, Page, UserCircleIcon } from '@/components';
import { IProfile } from '@/model';
import Head from 'next/head';

interface IHomePage {
  profile: IProfile;
}

export default function Home({ profile }: IHomePage) {
  return (
    <Page
      className="h-screen w-screen"
      icon={<UserCircleIcon className="h-12 w-12 mr-1" />}
      title="About Me"
    >
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
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  return {
    props: {
      profile: {
        email: 'maxi.g14@hotmail.com',
        firstName: 'Maximiliano',
        image: '/profile.jpeg',
        label: 'Full Stack Developer',
        lastName: 'Gonzalez Schweizer',
        location: {
          city: 'Corrientes',
          country: 'Argentina',
        },
        phone: '+543794245853',
        skype: 'max.g14',
        profiles: [],
        summary: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nulla atque debitis aspernatur unde est similique libero illum quisquam quos aperiam, sunt laudantium minus earum impedit amet? A, molestiae natus?</p>
        <p>Qui tempora veritatis consequatur, ut temporibus exercitationem fugiat perferendis amet pariatur dolorem tenetur dignissimos porro. Eaque similique repellat asperiores error sunt, reiciendis dolores, deleniti aperiam itaque sint neque minima explicabo.</p>
        <p>Voluptate magni provident dolorem, placeat aperiam sapiente eveniet in quaerat quae itaque exercitationem atque minima inventore, aut sint blanditiis voluptates. Molestiae sint magnam, cum nihil excepturi ad? Unde, deserunt maiores.</p>
        <p>Repellat dolorem magni tempora quas placeat perspiciatis. Dicta doloribus, aut provident nemo rerum ut dignissimos quibusdam sequi aspernatur accusantium molestias ducimus tenetur, magni ratione maiores nobis illo eaque tempore harum?</p>`,
      } as IProfile,
    },
  };
}

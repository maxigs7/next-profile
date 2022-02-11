import { AboutMeCard, AboutMeSummary, Page } from '@/components';
import { IProfile } from '@/model';
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

export async function getStaticProps(): Promise<{ props: IAboutMePage }> {
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
        profiles: [
          {
            network: 'skype',
            username: 'max.g14',
            url: 'skype:max.g14?call',
          },
          {
            network: 'linkedin',
            username: 'maxigs7',
            url: 'https://linkedin.com/ar/maxigs7',
          },
        ],
        summary: `<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nulla atque debitis aspernatur unde est similique libero illum quisquam quos aperiam, sunt laudantium minus earum impedit amet? A, molestiae natus?</p>
        <p>Qui tempora veritatis consequatur, ut temporibus exercitationem fugiat perferendis amet pariatur dolorem tenetur dignissimos porro. Eaque similique repellat asperiores error sunt, reiciendis dolores, deleniti aperiam itaque sint neque minima explicabo.</p>
        <p>Voluptate magni provident dolorem, placeat aperiam sapiente eveniet in quaerat quae itaque exercitationem atque minima inventore, aut sint blanditiis voluptates. Molestiae sint magnam, cum nihil excepturi ad? Unde, deserunt maiores.</p>
        <p>Repellat dolorem magni tempora quas placeat perspiciatis. Dicta doloribus, aut provident nemo rerum ut dignissimos quibusdam sequi aspernatur accusantium molestias ducimus tenetur, magni ratione maiores nobis illo eaque tempore harum?</p>`,
      } as IProfile,
    },
  };
}

import { ContactForm, ContactSocialLinks, Page } from '@/components';
import { ISocialProfile } from '@/model';
import Head from 'next/head';

interface IContactPage {
  profiles: ISocialProfile[];
}

const ContactPage: React.FC<IContactPage> = ({ profiles }) => (
  <Page className="min-h-screen" icon="identification" title="Contact Me">
    <Head>
      <title>MGS - Contact Me</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="pt-16 flex flex-col gap-10">
      <ContactSocialLinks profiles={profiles} />
      <ContactForm />
    </div>
  </Page>
);

export default ContactPage;

export async function getStaticProps(): Promise<{ props: IContactPage }> {
  return {
    props: {
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
    },
  };
}

import { ContactForm, ContactSocialLinks, Page } from '@/components';
import { IContact, ISocialProfile } from '@/model';
import { useContactForm } from 'hooks';
import Head from 'next/head';

interface IContactPage {
  profiles: ISocialProfile[];
}

const ContactPage: React.FC<IContactPage> = ({ profiles }) => {
  const submitContact = useContactForm();
  const onSubmit = async (contact: IContact) => {
    await submitContact(contact);
  };

  return (
    <Page className="min-h-screen pb-3" icon="identification" title="Contact Me">
      <Head>
        <title>MGS - Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-16 flex flex-col gap-10">
        <ContactSocialLinks profiles={profiles} />
        <ContactForm onSubmitForm={onSubmit} />
      </div>
    </Page>
  );
};

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

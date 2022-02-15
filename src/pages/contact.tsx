import { getProfileSocials } from '@/api';
import { ContactForm, ContactSocialLinks, Page } from '@/components';
import { useContactForm, useLocale } from '@/hooks';
import { IContact, ISocialProfile } from '@/model';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface IContactPage {
  profiles: ISocialProfile[];
}

const ContactPage: React.FC<IContactPage> = ({ profiles }) => {
  const { t } = useLocale();
  const submitContact = useContactForm();
  const onSubmit = async (contact: IContact) => {
    await submitContact(contact);
  };

  return (
    <Page className="min-h-screen pb-3" icon="identification" title={t('contact_title')}>
      <Head>
        <title>MGS - {t('contact_title')}</title>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const profiles = await getProfileSocials();
  return {
    props: {
      profiles,
    },
  };
};

import {
  Page,
  ResumeCertificateList,
  ResumeExperienceList,
  ResumeLanguageList,
} from '@/components';
import { ICertificate, ILanguage, IWork } from '@/model';
import Head from 'next/head';

interface IResumePage {
  certificates: ICertificate[];
  experiences: IWork[];
  languages: ILanguage[];
}

const ResumePage: React.FC<IResumePage> = ({ certificates, experiences, languages }) => (
  <Page isContainer={false} className="h-screen" icon="identification" title="Resume">
    <Head>
      <title>MGS - Resume</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ResumeLanguageList languages={languages} className="mt-5" />

    <div className="flex flex-col lg:flex-row gap-5 md:container mx-auto justify-center">
      <ResumeExperienceList experiences={experiences} className="mt-5" />
      <ResumeCertificateList certificates={certificates} className="mt-5" />
    </div>
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
      experiences: [
        {
          company: 'Spark Digital',
          highlights: [],
          id: 'spark-digital',
          position: 'Frontend Developer',
          startDate: '2020-09-14',
          summary: `Working at Rappi for 4 months as an Angular Developer, developing new features, bugs fixing, improving performance and SEO. Currently working at Slice, which is a pizza's selling platform in the USA, where my role is React Developer, implementing new features, bug fixing and improving performance as well as SEO.`,
        },
        {
          company: 'Overactive',
          endDate: '2020-09-11',
          highlights: [],
          id: 'overactive',
          position: 'Fullstack Developer',
          startDate: '2019-06-03',
          summary: `Working for XPO Logistic account using microservices oriented architecture with .NET Core 3 and Angular 9 following SCRUM practices. Creating microservices from scratch using its own library and working different frontend modules.`,
        },
        {
          company: 'Devlights',
          endDate: '2016-04-01',
          highlights: [],
          id: 'devlights',
          position: 'Fullstack Developer',
          startDate: '2019-05-01',
          summary: `I had worked for a US client in different types of projects, using technologies such as AngularJS or Angular and ASP.NET MVC 5. Developed Mobile Applications for healthcare companies using Ionic 2.`,
        },
        {
          company: 'Desarrollos NEA',
          endDate: '2012-07-02',
          highlights: [],
          id: 'desnea',
          position: 'Fullstack Developer',
          startDate: '2016-04-30',
          summary: `Developing web systems from scratch for local clients using AngularJS and ASP.NET MVC to get improvements in the clients processes and making their interactions and decisions easier.`,
        },
      ],
      certificates: [
        {
          date: '2016-09-01',
          id: 'microsoft-1',
          issuer: 'Microsoft',
          name: 'Microsoft Certified Solutions Associate: Web Applications Charter Member',
        },
        {
          date: '2016-09-01',
          id: 'microsoft-2',
          issuer: 'Microsoft',
          name: 'Microsoft Certified Solutions Developer: Web Applications',
        },
        {
          date: '2015-12-01',
          id: 'microsoft-3',
          issuer: 'Microsoft',
          name: 'Microsoft Certified Solutions Developer: Web Applications',
        },
        {
          date: '2014-12-01',
          id: 'microsoft-4',
          issuer: 'Microsoft',
          name: 'Microsoft Specialist',
        },
        {
          date: '2014-10-01',
          id: 'mug-1',
          issuer: 'Microsoft User Group Argentina',
          name: 'Cross Platform Mobile Development with Xamarin',
        },
        {
          date: '2014-09-01',
          id: 'microsoft-5',
          issuer: 'Microsoft',
          name: 'Microsoft Certified Professional',
        },
        {
          date: '2013-01-01',
          id: 'platzi-1',
          issuer: 'Platzi',
          name: 'Professional Frontend Course',
        },
      ],
    },
  };
}

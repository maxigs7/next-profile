import { Heading } from '@/components';
import Link from 'next/link';

const ErrorPage: React.FC = () => (
  <div className="h-screen w-screen bg-blue-600 text-white flex justify-center items-center flex-col">
    <Heading className="mb-3">500</Heading>
    <Heading as="h2" className="mb-10 text-center">
      An error has ocurred
    </Heading>

    <Link href="/">
      <a className="inline-block px-8 py-4 bg-red-400 text-white rounded-lg">Go Home</a>
    </Link>
  </div>
);

export default ErrorPage;

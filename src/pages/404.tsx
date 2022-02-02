import Link from 'next/link';

const NotFoundPage: React.FC = () => (
  <div className="h-screen w-screen bg-blue-600 text-white flex justify-center items-center flex-col">
    <h1 className="mb-3 text-9xl">404</h1>
    <h3 className="mb-10 text-center">Woops! Page not found</h3>
    <Link href="/">
      <a className="inline-block px-8 py-4 bg-red-400 text-white rounded-lg">Go Home</a>
    </Link>
  </div>
);

export default NotFoundPage;

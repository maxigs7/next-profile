import { Navbar } from '../ui';

const Layout: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;

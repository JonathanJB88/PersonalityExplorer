import { Header, Footer } from './';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className='relative flex flex-col min-h-screen bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${require('../assets/heroBg.jpg')})` }}
    >
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

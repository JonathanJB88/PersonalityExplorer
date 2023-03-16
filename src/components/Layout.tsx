import { Header, Footer } from './';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <div className='container px-4 mx-auto'>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

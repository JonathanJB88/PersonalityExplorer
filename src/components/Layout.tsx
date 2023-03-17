import { Outlet } from 'react-router-dom';
import { Header, Footer } from './';

export const Layout: React.FC = () => {
  return (
    <div
      className='relative flex flex-col min-h-screen bg-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${require('../assets/heroBg.jpg')})` }}
    >
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

import { Outlet } from 'react-router-dom';

import { Header, Footer } from './';

import heroBg from '../assets/heroBg.jpg';

export const Layout: React.FC = () => (
  <div
    className='relative flex flex-col min-h-screen bg-center bg-no-repeat bg-cover'
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <Header />
    <main className='flex-grow'>
      <Outlet />
    </main>
    <Footer />
  </div>
);

import { Navbar } from './';

import logo from '../assets/pelogo.png';

export const Header: React.FC = () => (
  <header className='py-4 bg-background text-text'>
    <div className='container flex items-center justify-between px-4 mx-auto'>
      <div className='flex flex-row items-center'>
        <img src={logo} className='cursor-pointer h-14 w-14' alt='Personality Explorer Test Logo' />
        <h1 className='ml-2 text-base font-semibold cursor-pointer font-header lg:text-3xl'>Personality Explorer</h1>
      </div>
      <Navbar />
    </div>
  </header>
);

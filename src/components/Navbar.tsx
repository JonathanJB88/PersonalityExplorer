import { useState } from 'react';

import { NavItem } from './';
import { navItems } from '../data';

export const Navbar: React.FC = () => {
  //
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='font-body lg:hidden'>
        <button
          className={`flex items-center px-3 py-2 border rounded text-text border-text hover:text-primary hover:border-primary ${
            isOpen ? 'hidden' : 'block'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className='w-3 h-3 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </nav>
      <nav className={`font-body ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}>
        <ul className='flex flex-col lg:flex-row lg:space-x-6'>
          {navItems.map(({ label, path }) => (
            <NavItem key={path} label={label} path={path} toggleIcon={() => setIsOpen(!isOpen)} />
          ))}
        </ul>
      </nav>
    </>
  );
};

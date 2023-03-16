import { Navbar } from './';

export const Header: React.FC = () => {
  //

  return (
    <header className='bg-background text-text py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <div className='flex flex-row items-center'>
          <img
            src={require('../assets/pelogo.png')}
            className='h-14 w-14 cursor-pointer'
            alt='Personality Explorer Test Logo'
          />
          <h1 className='font-header font-semibold text-base lg:text-3xl ml-2 cursor-pointer'>Personality Explorer</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

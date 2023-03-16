import { heading, subheading } from '../data';

export const Hero: React.FC = () => {
  return (
    <section className='relative h-screen'>
      <div className='container flex flex-col items-center justify-center h-full px-4 mx-auto'>
        <h1 className='text-3xl font-bold font-header md:text-5xl text-text'>{heading}</h1>
        <h2 className='mt-6 mb-8 text-xl text-center font-body text-text md:max-w-lg'>{subheading}</h2>

        <button className='px-8 py-2 text-white rounded-md font-body bg-primary hover:bg-secondary focus:outline-none'>
          Start the Test
        </button>
      </div>
    </section>
  );
};

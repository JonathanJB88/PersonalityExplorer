import { testimonialsData } from '../data';

export const Testimonials: React.FC = () => (
  <section className='py-12 rounded-lg bg-background bg-opacity-80 text-text'>
    <div className='container px-4 mx-auto'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {testimonialsData.map(({ name, picture, quote }, index) => (
          <div key={index} className='text-center'>
            <img src={picture} alt={name} className='w-16 h-16 mx-auto mb-4 rounded-full' />
            <p className='italic font-body'>{quote}</p>
            <p className='mt-2 font-semibold font-header'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

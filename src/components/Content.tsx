import { CTASection, FeaturesSection, Testimonials } from './';

export const Content: React.FC = () => (
  <section className='flex flex-col flex-grow'>
    <div className='container flex flex-col items-center justify-center flex-grow px-4 mx-auto my-auto -space-y-6'>
      <FeaturesSection />
      <CTASection />
      <Testimonials />
    </div>
  </section>
);

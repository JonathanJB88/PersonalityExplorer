import { CTASection, FeaturesSection, Testimonials } from './';

export const Content: React.FC = () => (
  <section className='flex min-h-screen'>
    <div className='container flex flex-col items-center justify-center min-h-full px-4 mx-auto my-auto'>
      <FeaturesSection />
      <CTASection />
      <Testimonials />
    </div>
  </section>
);

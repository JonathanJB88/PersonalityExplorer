import { CTASection, FeaturesSection, SubHero, Testimonials } from './';

export const Hero: React.FC = () => {
  return (
    <section className='flex min-h-screen'>
      {/* //TODO: mt-36 should be conditional according to SubHero render */}
      <div className='container flex flex-col items-center justify-center min-h-full px-4 mx-auto my-auto mt-36'> 
        <SubHero />
        {/* <FeaturesSection />
        <CTASection />
        <Testimonials /> */}
      </div>
    </section>
  );
};

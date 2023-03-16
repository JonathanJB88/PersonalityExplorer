import { CTASection, FeaturesSection, SubHero, Testimonials } from './';
import { useContext } from 'react';
import { TestContext } from '../context';

export const Hero: React.FC = () => {
  //
  const { isTestStarted } = useContext(TestContext);

  return (
    <section className='flex min-h-screen'>
      <div
        className={`container flex flex-col items-center justify-center min-h-full px-4 mx-auto my-auto ${
          !isTestStarted ? 'mt-36' : 'mt-0'
        }`}
      >
        {!isTestStarted ? (
          <SubHero />
        ) : (
          <>
            <FeaturesSection />
            <CTASection />
            <Testimonials />
          </>
        )}
      </div>
    </section>
  );
};

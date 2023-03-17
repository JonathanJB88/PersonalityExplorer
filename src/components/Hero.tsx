import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TestContext } from '../context';
import { CTASection, FeaturesSection, SubHero, Testimonials } from './';

export const Hero: React.FC = () => {
  //
  const { resetTest } = useContext(TestContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/') {
      resetTest();
    }
  }, [pathname, resetTest]);

  const handleClick = () => {
    navigate('/content');
  };

  return (
    <section className='flex min-h-screen'>
      <div className='container flex flex-col items-center justify-center min-h-full px-4 mx-auto my-auto mt-40'>
        <SubHero onClick={handleClick} />
      </div>
    </section>
  );
};

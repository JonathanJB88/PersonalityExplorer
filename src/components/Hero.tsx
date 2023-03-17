import { useNavigate } from 'react-router-dom';

import { SubHero } from './';

export const Hero: React.FC = () => {
  //
  const navigate = useNavigate();

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

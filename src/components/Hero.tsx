import { useNavigate } from 'react-router-dom';

import { SubHero } from './';

export const Hero: React.FC = () => {
  //
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/content');
  };

  return (
    <section className='flex flex-col flex-grow'>
      <div className='container flex flex-col items-center justify-center flex-grow px-4 mx-auto mt-40'>
        <SubHero onClick={handleClick} />
      </div>
    </section>
  );
};

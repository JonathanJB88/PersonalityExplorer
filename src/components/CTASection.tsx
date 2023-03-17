import { useNavigate } from 'react-router-dom';
import { Btn } from './Btn';

export const CTASection: React.FC = () => {
  //
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the test page
    navigate('/test');
  };

  return (
    <section className='py-12 bg-background text-text'>
      <div className='container px-4 mx-auto text-center'>
        <h2 className='text-2xl font-bold font-header md:text-4xl'>Are you ready to explore your personality?</h2>
        <Btn onClick={handleClick} label='Start the test now' />
      </div>
    </section>
  );
};

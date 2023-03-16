import { Btn } from './Btn';

export const CTASection: React.FC = () => {
  return (
    <section className='py-12 bg-background text-text'>
      <div className='container px-4 mx-auto text-center'>
        <h2 className='text-2xl font-bold font-header md:text-4xl'>Are you ready to explore your personality?</h2>
        <Btn onClick={() => {}} label='Start the test now' />
      </div>
    </section>
  );
};

import { heading, subheading } from '../data';
import { Btn } from './';

interface Props {
  onClick: () => void;
}

export const SubHero: React.FC<Props> = ({ onClick }) => {
  //

  return (
    <>
      <h1 className='text-3xl font-bold text-center font-header md:text-5xl text-text'>{heading}</h1>
      <h2 className='mt-6 mb-8 text-xl text-center font-body text-text md:max-w-lg'>{subheading}</h2>

      <Btn label='Start Test' onClick={onClick} />
    </>
  );
};

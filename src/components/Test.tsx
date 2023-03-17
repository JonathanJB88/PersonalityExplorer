import { Toaster } from 'react-hot-toast';

import { Questions } from './';
import { useTest } from '../hooks';

export const Test: React.FC = () => {
  //
  const { isLaptopOrDesktop, showModal, currQuestion, handleClick, renderResultsModal } = useTest();

  return (
    <>
      <Toaster position={isLaptopOrDesktop ? 'bottom-center' : 'top-center'} />
      {showModal && renderResultsModal()}
      <Questions currQuestion={currQuestion} handleClick={handleClick} />
    </>
  );
};

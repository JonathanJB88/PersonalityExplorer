import introvertedImg from '../assets/introverted.png';
import extrovertedImg from '../assets/extroverted.png';
import ambivertImg from '../assets/ambivert.png';
import { TestQ } from '../interfaces';

interface Props {
  result?: {
    label: string;
    description: string;
  };
  questions: TestQ[];
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  resetTest: () => void;
  setCurrQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrQuestion: React.Dispatch<React.SetStateAction<TestQ>>;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResultsModal: React.FC<Props> = ({
  setShowModal,
  resetTest,
  setCurrQuestionIndex,
  setCurrQuestion,
  setIsSubmitting,
  questions,
  result,
}) => {
  const handleClick = () => {
    setShowModal(false);
    resetTest();
    setCurrQuestionIndex(0);
    setCurrQuestion(questions[0]);
    setIsSubmitting(false);
  };

  const getPersonalityImage = () => {
    if (result?.label === 'Introverted') return introvertedImg;
    if (result?.label === 'Extroverted') return extrovertedImg;
    if (result?.label === 'Ambivert') return ambivertImg;
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
      <div className='relative w-full max-w-2xl p-6 mx-4 bg-white rounded-md shadow-md backdrop-blur-lg backdrop-opacity-75 sm:mx-0'>
        <h3 className='mb-2 text-2xl font-medium text-center'>Your Test Results</h3>
        <h4 className='my-5 text-xl font-medium text-center'>{result?.label}</h4>
        <p className='mb-4 text-justify'>{result?.description}</p>

        <div className='flex justify-center'>
          <img className='w-48 h-48 rounded-full' src={getPersonalityImage()} alt={result?.label} />
        </div>

        <button
          className='block w-full px-4 py-2 mx-auto mt-4 text-white rounded-md font-body bg-primary hover:bg-secondary focus:outline-none sm:w-auto'
          onClick={() => handleClick()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

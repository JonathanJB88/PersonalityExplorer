import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';

import { CustomToast } from '../components';
import { TestContext } from '../context';
import { TestQ } from '../interfaces';

import introvertedImg from '../assets/introverted.png';
import extrovertedImg from '../assets/extroverted.png';
import ambivertImg from '../assets/ambivert.png';

export const useTest = () => {
  const { questions, result, nextQuestion, showResult, resetTest } = useContext(TestContext);
  const isLaptopOrDesktop = useMediaQuery({ query: '(max-width: 1024px)' });

  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [currQuestion, setCurrQuestion] = useState<TestQ>(questions[0]);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = (points: number) => {
    if (isSubmitting) return;
    if (currQuestionIndex === questions.length - 1) {
      setIsSubmitting(true);
      const toastId = toast(
        <CustomToast
          message='Test completed! Click here to view results.'
          onClick={() => {
            showResult();
            setShowModal(true);
            toast.dismiss(toastId);
          }}
        />,
        { duration: 5000 }
      );
      return;
    }
    nextQuestion(points);
    const index = currQuestionIndex + 1;
    setCurrQuestionIndex(index);
    setCurrQuestion(questions[index]);
  };

  const renderResultsModal = () => {
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
            want to take the test again?
          </button>
        </div>
      </div>
    );
  };

  return {
    isLaptopOrDesktop,
    showModal,
    currQuestion,
    questions,
    handleClick,
    renderResultsModal,
  };
};

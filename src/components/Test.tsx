import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

import { TestContext } from '../context';
import { TestQ } from '../interfaces/interfaces';
import { CustomToast } from './';

import { useMediaQuery } from 'react-responsive';
import introvertedImg from '../assets/introverted.png';
import extrovertedImg from '../assets/extroverted.png';
import ambivertImg from '../assets/ambivert.png';

export const Test: React.FC = () => {
  //
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
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
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Toaster position={isLaptopOrDesktop ? 'bottom-center' : 'top-center'} />
      {showModal && renderResultsModal()}
      <div className='max-w-2xl mx-auto mt-16 mb-16'>
        <h2 className='mb-8 text-3xl font-bold text-center'>Test Questions</h2>

        <motion.div
          className='p-6 bg-white rounded-md shadow-md backdrop-blur-lg backdrop-opacity-75'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <p className='mb-8 text-xl font-medium text-center'>{currQuestion.question}</p>
          <ul>
            {currQuestion.options.map((option) => (
              <li key={option.id} className='mb-4'>
                <button
                  className='w-full px-4 py-2 text-justify transition-colors bg-gray-100 rounded-md hover:bg-primary hover:text-white'
                  onClick={() => handleClick(option.points)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

//   return (
//     <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50'>
//       <div className='relative w-full max-w-2xl p-6 mx-4 bg-white rounded-md shadow-md backdrop-blur-lg backdrop-opacity-75 sm:mx-0'>
//         <h3 className='mb-2 text-2xl font-medium text-center'>Your Test Results</h3>
//         <h4 className='mb-4 text-xl font-medium text-center'>{result?.label}</h4>
//         <p className='mb-4'>{result?.description}</p>
//         <div className='flex justify-center'>
//           <img className='w-48 h-48 rounded-full' src={getPersonalityImage()} alt={result?.label} />
//         </div>
//         <button
//           className='block w-full px-4 py-2 mx-auto mt-4 text-white rounded-md font-body bg-primary hover:bg-secondary focus:outline-none'
//           onClick={() => handleClick()}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';

import { TestContext } from '../context';
import { TestQ } from '../interfaces/interfaces';
import { CustomToast } from './';

export const Test: React.FC = () => {
  //
  const { questions, result, nextQuestion, showResult, resetTest } = useContext(TestContext);

  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [currQuestion, setCurrQuestion] = useState<TestQ>(questions[0]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (points: number) => {
    if (currQuestionIndex === questions.length - 1) {
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
    };

    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='p-6 bg-white rounded'>
          <h3 className='mb-2 text-2xl font-medium'>Test Results</h3>
          <p>{result?.label}</p>
          <p>{result?.description}</p>
          <button className='px-4 py-2 mt-4 text-white rounded bg-primary' onClick={() => handleClick()}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Toaster />
      {showModal && renderResultsModal()}
      <div className='max-w-lg mx-auto'>
        <h2 className='mb-4 text-3xl font-bold'>Test Questions</h2>

        <motion.div
          className='p-4 bg-white rounded-md shadow-md'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <p className='mb-2 text-xl font-medium'>{currQuestion.question}</p>
          <ul>
            {currQuestion.options.map((option) => (
              <li key={option.id} className='mb-2'>
                <button
                  className='w-full px-4 py-2 text-left transition-colors bg-gray-100 rounded-md hover:bg-primary hover:text-white'
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

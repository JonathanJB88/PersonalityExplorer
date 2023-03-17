import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { TestContext } from '../context';

export const Test: React.FC = () => {
  const { questions, currentQuestionIndex, nextQuestion } = useContext(TestContext);
  const currentQuestion = questions[currentQuestionIndex];

  const handleClick = (points: number) => {
    nextQuestion(points);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='max-w-lg mx-auto'>
      <h2 className='mb-4 text-3xl font-bold'>Test Questions</h2>
      <motion.div
        className='p-4 bg-white rounded-md shadow-md'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <p className='mb-2 text-xl font-medium'>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option) => (
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
  );
};

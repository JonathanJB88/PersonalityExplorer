import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TestContext } from '../context';

export const Test: React.FC = () => {
  //
  const { questions, currentQuestionIndex, result, score, nextQuestion, showResult } = useContext(TestContext);
  const currentQuestion = questions[currentQuestionIndex];
  const isTestFinished = currentQuestionIndex === questions.length;

  const handleClick = (points: number) => {
    nextQuestion(points);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const percentage = (score / questions.length) * 100;

      let resultId;
      if (percentage <= 33) {
        resultId = 1; // Introverted
      } else if (percentage <= 66) {
        resultId = 2; // Ambivert
      } else {
        resultId = 3; // Extroverted
      }

      showResult(resultId);
    }
  }, [currentQuestionIndex, questions.length, showResult, score]);

  return (
    <div className='max-w-lg mx-auto'>
      <h2 className='mb-4 text-3xl font-bold'>{isTestFinished ? 'Result' : 'Test Questions'}</h2>
      {isTestFinished ? (
        <div className='p-4 bg-white rounded-md shadow-md'>
          <h3 className='mb-2 text-2xl font-medium'>{result?.label}</h3>
          <p>{result?.description}</p>
        </div>
      ) : (
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
      )}
    </div>
  );
};

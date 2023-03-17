import { motion } from 'framer-motion';

import { TestQ } from '../interfaces';

interface Props {
  currQuestion: TestQ;
  handleClick: (points: number) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const Questions: React.FC<Props> = ({ currQuestion, handleClick }) => (
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
);

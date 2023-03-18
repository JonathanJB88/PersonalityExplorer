import { useContext } from 'react';
import { TestContext } from '../context';

export const useTestContext = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }

  return context;
};

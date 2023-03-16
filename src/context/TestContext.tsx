import { createContext } from 'react';
import { TestQ, Result } from '../interfaces';

export interface TestContextProps {
  // State
  isLoading: boolean;
  questions: TestQ[];
  currentQuestionIndex: number;
  score: number;
  results: Result[];
  isTestStarted: boolean;

  // Methods
  nextQuestion: (points: number) => void;
  startTest: () => void;
  resetTest: () => void;
}

export const TestContext = createContext<TestContextProps>({} as TestContextProps);

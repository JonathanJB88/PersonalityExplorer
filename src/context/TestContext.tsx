import { createContext } from 'react';
import { TestQ, Result } from '../interfaces';

export interface TestContextProps {
  // State
  isLoading: boolean;
  questions: TestQ[];
  currentQuestionIndex: number;
  score: number;
  results: Result[];

  // Methods
  nextQuestion: (points: number) => void;
  resetTest: () => void;
}

export const TestContext = createContext<TestContextProps>({} as TestContextProps);

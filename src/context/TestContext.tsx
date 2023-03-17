import { createContext } from 'react';
import { TestQ, Result } from '../interfaces';

export interface TestContextProps {
  // State
  isLoading: boolean;
  questions: TestQ[];
  score: number;
  results: Result[];
  result: Result | undefined;

  // Methods
  nextQuestion: (points: number) => void;
  showResult: () => void;
  resetTest: () => void;
}

export const TestContext = createContext<TestContextProps>({} as TestContextProps);

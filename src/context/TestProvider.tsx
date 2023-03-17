import { useEffect, useReducer } from 'react';

import { testQuestions, results } from '../data';
import { TestContext, testReducer } from './';
import { TestQ, Result } from '../interfaces';

export interface TestState {
  isLoading: boolean;
  questions: TestQ[];
  score: number;
  results: Result[];
  result: Result | undefined;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TestState = {
  isLoading: true,
  questions: testQuestions,
  score: 0,
  results: results,
  result: undefined,
};

export const TestProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(testReducer, INITIAL_STATE);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 1000);
  }, []);

  const nextQuestion = (points: number): void => {
    dispatch({ type: 'NEXT_QUESTION', payload: points });
  };

  const resetTest = (): void => {
    dispatch({ type: 'RESET_TEST' });
  };

  const showResult = (): void => {
    dispatch({ type: 'SHOW_RESULT' });
  };

  return (
    <TestContext.Provider
      value={{
        ...state,
        nextQuestion,
        resetTest,
        showResult,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

import { useEffect, useReducer } from 'react';

import { testQuestions, results } from '../data';
import { TestContext, testReducer } from './';
import { TestQ, Result } from '../interfaces';
import { loadStateFromLocalStorage } from '../helpers';
import { saveStateToLocalStorage } from '../helpers/localStorageHelpers';

export interface TestState {
  isLoading: boolean;
  questions: TestQ[];
  currentQuestionIndex: number;
  score: number;
  results: Result[];
  isTestStarted: boolean;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TestState = loadStateFromLocalStorage() || {
  isLoading: true,
  questions: testQuestions,
  currentQuestionIndex: 0,
  score: 0,
  results: results,
  isTestStarted: false,
};

export const TestProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(testReducer, INITIAL_STATE);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      dispatch({ type: 'setLoading', payload: false });
    }, 1000);

    // Save state to local storage
    saveStateToLocalStorage(state);
  }, [state]);

  const nextQuestion = (points: number): void => {
    dispatch({ type: 'NEXT_QUESTION', payload: points });
  };

  const resetTest = (): void => {
    dispatch({ type: 'RESET_TEST' });
  };

  const startTest = (): void => {
    dispatch({ type: 'START_TEST' });
  };

  return (
    <TestContext.Provider
      value={{
        ...state,
        nextQuestion,
        resetTest,
        startTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

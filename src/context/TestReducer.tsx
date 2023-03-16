import { TestState } from './';

type TestAction =
  | { type: 'NEXT_QUESTION'; payload: number }
  | { type: 'RESET_TEST' }
  | { type: 'setLoading'; payload: boolean }
  | { type: 'START_TEST' };

export const testReducer = (state: TestState, action: TestAction): TestState => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        score: state.score + action.payload,
      };
    case 'RESET_TEST':
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
        isTestStarted: false,
      };
    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'START_TEST':
      return {
        ...state,
        isTestStarted: true,
      };
    default:
      return state;
  }
};

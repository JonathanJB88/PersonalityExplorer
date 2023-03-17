import { TestState } from './';

type TestAction =
  | { type: 'NEXT_QUESTION'; payload: number }
  | { type: 'RESET_TEST' }
  | { type: 'setLoading'; payload: boolean };

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
      };
    case 'setLoading':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

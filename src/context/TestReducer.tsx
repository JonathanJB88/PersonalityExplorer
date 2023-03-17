import { TestState } from './';

type TestAction =
  | { type: 'NEXT_QUESTION'; payload: number }
  | { type: 'RESET_TEST' }
  | { type: 'SHOW_RESULT' }
  | { type: 'SET_LOADING'; payload: boolean };

export const testReducer = (state: TestState, action: TestAction): TestState => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        score: state.score + action.payload,
      };
    case 'SHOW_RESULT':
      const result = state.results.find((res) => state.score >= res.minScore && state.score <= res.maxScore);
      return {
        ...state,
        result,
      };
    case 'RESET_TEST':
      return {
        ...state,
        score: 0,
        result: undefined,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

import { TestState } from './';

type TestAction =
  | { type: 'NEXT_QUESTION'; payload: number }
  | { type: 'RESET_TEST' }
  | { type: 'SHOW_RESULT'; payload: number }
  | { type: 'setLoading'; payload: boolean };

export const testReducer = (state: TestState, action: TestAction): TestState => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        score: state.score + action.payload,
      };
    case 'SHOW_RESULT':
      const matchingResults = state.results.filter(
        (result) => state.score >= result.minScore && state.score <= result.maxScore
      );
      const finalResult = matchingResults.length > 0 ? matchingResults[0] : undefined;
      return {
        ...state,
        result: finalResult,
      };
    case 'RESET_TEST':
      return {
        ...state,
        currentQuestionIndex: 0,
        score: 0,
        result: undefined,
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

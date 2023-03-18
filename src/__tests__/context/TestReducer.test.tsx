import { testReducer, TestState } from '../../context';

describe('testReducer', () => {
  const initialState: TestState = {
    isLoading: true,
    questions: [],
    score: 0,
    results: [],
    result: undefined,
  };

  test('NEXT_QUESTION updates the score', () => {
    const action = { type: 'NEXT_QUESTION', payload: 5 };
    const expectedState = {
      ...initialState,
      score: initialState.score + action.payload,
    };

    // @ts-ignore: Allow sending the unknown action type for testing purposes
    const newState = testReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  test('SHOW_RESULT calculates and sets the result based on the score', () => {
    const action = { type: 'SHOW_RESULT' };
    const expectedState = {
      ...initialState,
      result: initialState.results.find(
        (res) => initialState.score >= res.minScore && initialState.score <= res.maxScore
      ),
    };

    // @ts-ignore: Allow sending the unknown action type for testing purposes
    const newState = testReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  test('RESET_TEST resets the test state', () => {
    const action = { type: 'RESET_TEST' };
    const expectedState = {
      ...initialState,
      score: 0,
      result: undefined,
    };

    // @ts-ignore: Allow sending the unknown action type for testing purposes
    const newState = testReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  test('SET_LOADING updates the isLoading state', () => {
    const action = { type: 'SET_LOADING', payload: true };
    const expectedState = {
      ...initialState,
      isLoading: action.payload,
    };

    // @ts-ignore: Allow sending the unknown action type for testing purposes
    const newState = testReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  test('returns the current state for an unknown action type', () => {
    const action = { type: 'UNKNOWN_ACTION', payload: 'test' };

    // @ts-ignore: Allow sending the unknown action type for testing purposes
    const newState = testReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});

import { render, waitFor, act, fireEvent } from '@testing-library/react';

import { TestProvider, INITIAL_STATE } from '../../context';
import { TestComponent } from '../../components';

const renderWithProvider = (children: JSX.Element) => {
  return render(<TestProvider>{children}</TestProvider>);
};

describe('TestProvider', () => {
  test('renders without crashing', () => {
    const { getByTestId } = renderWithProvider(<TestComponent />);
    expect(getByTestId('test-component')).toBeInTheDocument();
  });

  test('initial state is set properly', () => {
    const { getByTestId } = renderWithProvider(<TestComponent />);
    const contextValues = JSON.parse(getByTestId('test-component-state').textContent || '{}');
    expect(contextValues).toEqual({
      isLoading: INITIAL_STATE.isLoading,
      score: INITIAL_STATE.score,
      questions: INITIAL_STATE.questions,
    });
  });

  test('nextQuestion updates the score', async () => {
    const { getByTestId, getByText } = renderWithProvider(<TestComponent />);
    const button = getByText('Next Question');
    act(() => {
      button.click();
    });
    await waitFor(() => {
      const contextValues = JSON.parse(getByTestId('test-component-state').textContent || '{}');
      expect(contextValues).toEqual({
        isLoading: INITIAL_STATE.isLoading,
        score: 5,
        questions: INITIAL_STATE.questions,
      });
    });
  });

  test('showResult calculates and sets the result based on the score', async () => {
    const { getByTestId, getByText } = renderWithProvider(<TestComponent />);

    // First, update the score
    const nextQuestionButton = getByText('Next Question');
    act(() => {
      nextQuestionButton.click();
    });

    // Then, trigger the showResult action
    const showResultButton = getByText('Show Result');
    act(() => {
      showResultButton.click();
    });

    await waitFor(() => {
      const contextValues = JSON.parse(getByTestId('test-component-state').textContent || '{}');
      const expectedResult = INITIAL_STATE.results.find(
        (res) => contextValues.score >= res.minScore && contextValues.score <= res.maxScore
      );

      expect(contextValues.result).toEqual(expectedResult);
    });
  });

  test('resetTest resets the test state', async () => {
    const { getByTestId, getByText } = renderWithProvider(<TestComponent />);

    // First, update the score and show the result
    const nextQuestionButton = getByText('Next Question');
    const showResultButton = getByText('Show Result');
    act(() => {
      nextQuestionButton.click();
      showResultButton.click();
    });

    // Then, trigger the resetTest action
    const resetTestButton = getByText('Reset Test');
    act(() => {
      resetTestButton.click();
    });

    await waitFor(() => {
      const contextValues = JSON.parse(getByTestId('test-component-state').textContent || '{}');
      expect(contextValues.score).toEqual(INITIAL_STATE.score);
      expect(contextValues.result).toBeUndefined();
    });
  });

  test('setLoading updates the isLoading state', async () => {
    const { getByTestId } = render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    );

    const setLoadingButton = getByTestId('set-loading');

    // Click the Set Loading button to update the isLoading state
    fireEvent.click(setLoadingButton);

    // Wait for the isLoading state to change
    await waitFor(() => {
      const testComponent = getByTestId('test-component');
      const context = testComponent.querySelector('pre');
      if (!context) throw new Error('Context not found');

      const contextValues = JSON.parse(context.textContent || '{}');
      expect(contextValues.isLoading).toEqual(false);
    });
  });
});

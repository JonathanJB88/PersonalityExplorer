import { useContext } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TestContext, TestContextProps, TestProvider } from '../../context';

const contextValue: TestContextProps = {
  isLoading: true,
  questions: [],
  score: 0,
  results: [],
  result: undefined,
  nextQuestion: () => {},
  showResult: () => {},
  resetTest: () => {},
  setLoading: () => {},
};

const MockComponent: React.FC = () => {
  return (
    <TestContext.Provider value={contextValue}>
      <TestContext.Consumer>
        {(value) => <div data-testid='mock-component'>{JSON.stringify(value, null, 2)}</div>}
      </TestContext.Consumer>
    </TestContext.Provider>
  );
};

const MockComponentWithNextQuestion: React.FC = () => {
  const contextValue = useContext(TestContext);

  return (
    <div>
      <pre data-testid='mock-component'>{JSON.stringify(contextValue, null, 2)}</pre>
      <button onClick={() => contextValue.nextQuestion(5)}>Next Question</button>
    </div>
  );
};

describe('TestContext', () => {
  test('TestContext renders correctly for the initial state', () => {
    const { getByTestId } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>
    );
    const component = getByTestId('mock-component');
    expect(component).toBeInTheDocument();
  });

  test('TestContext updates the score when nextQuestion is called', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <MockComponentWithNextQuestion />
      </TestProvider>
    );

    const nextQuestionButton = getByText('Next Question');
    fireEvent.click(nextQuestionButton);

    const component = getByTestId('mock-component');
    const contextValues = JSON.parse(component.textContent || '{}');
    expect(contextValues.score).toEqual(5);
  });
});

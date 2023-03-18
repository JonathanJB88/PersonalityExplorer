import { useTestContext } from '../hooks';

export const TestComponent = () => {
  const { isLoading, score, questions, nextQuestion, showResult, resetTest, setLoading, result } = useTestContext();

  const handleNextQuestion = () => {
    if (typeof nextQuestion === 'function') {
      nextQuestion(5);
    }
  };

  const handleShowResult = () => {
    if (typeof showResult === 'function') {
      showResult();
    }
  };

  const handleResetTest = () => {
    if (typeof resetTest === 'function') {
      resetTest();
    }
  };

  const handleSetLoading = () => {
    if (typeof setLoading === 'function') {
      setLoading(!isLoading);
    }
  };

  return (
    <div data-testid='test-component'>
      <pre data-testid='test-component-state' suppressHydrationWarning>
        {JSON.stringify({ isLoading, score, questions, result }, null, 2)}
      </pre>
      <div>
        <button data-testid='next-question' onClick={handleNextQuestion}>
          Next Question
        </button>
        <button data-testid='show-result' onClick={handleShowResult}>
          Show Result
        </button>
        <button data-testid='reset-test' onClick={handleResetTest}>
          Reset Test
        </button>
        <button data-testid='set-loading' onClick={handleSetLoading}>
          Set Loading
        </button>
      </div>
    </div>
  );
};

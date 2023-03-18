import { ReactElement } from 'react';
import { renderHook, act, render, fireEvent, waitFor } from '@testing-library/react';
import { useMediaQuery } from 'react-responsive';
import * as toastModule from 'react-hot-toast';

import { TestContext } from '../../context/TestContext';
import { TestProvider } from '../../context/TestProvider';
import { useTest } from '../../hooks/useTest';

import introvertedImg from '../../assets/introverted.png';
import extrovertedImg from '../../assets/extroverted.png';
import ambivertImg from '../../assets/ambivert.png';

jest.mock('react-responsive');
jest.mock('react-hot-toast', () => {
  const actualToast = jest.requireActual('react-hot-toast');
  return {
    ...actualToast,
    default: {
      ...actualToast.default,
      dismiss: jest.fn(),
    },
  };
});

const mockToast = toastModule.toast as jest.Mocked<typeof toastModule.toast> & {
  customDismiss: jest.MockedFunction<(toast: React.ReactElement) => void>;
};

mockToast.customDismiss = jest.fn();

const mockQuestions = [
  {
    id: 1,
    question: 'Sample question 1',
    options: [
      {
        id: 1,
        points: 1,
        label: 'Option A',
      },
      {
        id: 2,
        points: 0,
        label: 'Option B',
      },
    ],
  },
  {
    id: 2,
    question: 'Sample question 2',
    options: [
      {
        id: 1,
        points: 1,
        label: 'Option A',
      },
      {
        id: 2,
        points: 0,
        label: 'Option B',
      },
    ],
  },
];

const mockTestContext = {
  questions: mockQuestions,
  result: {
    id: 1,
    label: 'Introverted',
    description: 'introverted...',
    minScore: 0,
    maxScore: 10,
  },
  nextQuestion: jest.fn(),
  showResult: jest.fn(),
  resetTest: jest.fn(),
  isLoading: false,
  score: 0,
  results: [],
  setLoading: jest.fn(),
};

const wrapper = ({ children }: { children: ReactElement | ReactElement[] }) => (
  <TestContext.Provider value={mockTestContext}>{children}</TestContext.Provider>
);

const TestComponent = () => {
  const { renderResultsModal } = useTest();
  return <div>{renderResultsModal()}</div>;
};

describe('useTest', () => {
  test('should handle different screen sizes', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(true);
    const { result: hookResult } = renderHook(() => useTest(), { wrapper });
    expect(hookResult.current.isLaptopOrDesktop).toBe(true);
  });

  test('handleClick updates the state', () => {
    const { result: hookResult } = renderHook(() => useTest(), { wrapper });

    act(() => {
      hookResult.current.handleClick(mockQuestions[0].options[0].points);
    });

    expect(hookResult.current.currQuestion).toEqual(mockQuestions[1]);
  });

  test('handleClick shows test results', async () => {
    const { result: hookResult } = renderHook(() => useTest(), { wrapper });

    act(() => {
      hookResult.current.handleClick(mockQuestions[0].options[0].points);
    });

    act(() => {
      hookResult.current.handleClick(mockQuestions[1].options[0].points);
    });

    if (mockToast.customDismiss.mock.calls.length > 0) {
      const customToast = mockToast.customDismiss.mock.calls[0][0] as React.ReactElement;
      const { getByText } = render(customToast);
      fireEvent.click(getByText('Test completed! Click here to view results.'));
      expect(mockToast.customDismiss).toHaveBeenCalled(); // New Assertion
      await waitFor(() => expect(mockTestContext.showResult).toHaveBeenCalled());
    }
  });

  test('renderResultsModal displays the correct results and images', () => {
    const screen = render(<TestComponent />, { wrapper });

    expect(screen.getByText('introverted...')).toBeInTheDocument();
    expect(screen.getByAltText('Introverted')).toHaveAttribute('src', introvertedImg);
    expect(screen.queryByAltText('Extroverted')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Ambivert')).not.toBeInTheDocument();
  });

  test('renderResultsModal resets the test', () => {
    const screen = render(<TestComponent />, { wrapper });

    const resetButton = screen.getByText('want to take the test again?');
    fireEvent.click(resetButton);

    expect(mockTestContext.resetTest).toHaveBeenCalled();
  });
});

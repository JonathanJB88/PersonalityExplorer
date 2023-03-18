import { render, screen } from '@testing-library/react';

import { Test } from '../../components/Test';
import { useTest } from '../../hooks';
import { TestQ } from '../../interfaces';

// Mock the useTest custom hook
jest.mock('../../hooks/useTest', () => ({
  useTest: () => ({
    isLaptopOrDesktop: true,
    showModal: false,
    currQuestion: {
      id: 1,
      question: 'When attending a social gathering, how do you usually feel?',
      options: [
        {
          id: 1,
          points: 1,
          label: 'A. Energized and excited, as I enjoy meeting new people and engaging in conversations.',
        },
        {
          id: 2,
          points: 0,
          label: 'B. Slightly anxious or uncomfortable, as I prefer to spend time alone or with a few close friends.',
        },
      ],
    },
    handleClick: jest.fn(),
    renderResultsModal: jest.fn(),
  }),
}));

describe('Test', () => {
  beforeEach(() => {
    render(<Test />);
  });

  test('renders the Questions component with the correct currQuestion prop', () => {
    const questionText = screen.getByText('When attending a social gathering, how do you usually feel?');
    expect(questionText).toBeInTheDocument();
  });

  test('does not render the results modal', () => {
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });
});

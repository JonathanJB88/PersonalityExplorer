import { render, screen, fireEvent } from '@testing-library/react';

import { Questions } from '../../components/Questions';
import { TestQ } from '../../interfaces';

const mockHandleClick = jest.fn();

const testQuestion: TestQ = {
  id: 1,
  question: 'which option do you prefer?',
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
};

describe('Questions', () => {
  beforeEach(() => {
    render(<Questions currQuestion={testQuestion} handleClick={mockHandleClick} />);
  });

  test('renders the question text', () => {
    const questionText = screen.getByText(testQuestion.question);
    expect(questionText).toBeInTheDocument();
  });

  test('renders the options', () => {
    testQuestion.options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });
  });

  test('calls handleClick with the correct points when an option is clicked', () => {
    testQuestion.options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      fireEvent.click(optionElement);
      expect(mockHandleClick).toHaveBeenCalledWith(option.points);
    });
  });
});

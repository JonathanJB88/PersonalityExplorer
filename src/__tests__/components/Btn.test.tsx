import { render, fireEvent } from '@testing-library/react';
import { Btn, BtnProps } from '../../components';

describe('Btn component', () => {
  const mockOnClick = jest.fn();

  const defaultProps: BtnProps = {
    label: 'Test Button',
    onClick: mockOnClick,
  };

  test('renders with the provided label', () => {
    const { getByText } = render(<Btn {...defaultProps} />);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  test('calls onClick prop when clicked', () => {
    const { getByText } = render(<Btn {...defaultProps} />);
    fireEvent.click(getByText('Test Button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});

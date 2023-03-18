import { render, screen, fireEvent } from '@testing-library/react';
import { CustomToast } from '../../components/CustomToast';

describe('CustomToast tests', () => {
  test('renders the message prop correctly', () => {
    const message = 'Sample message';
    const onClick = jest.fn();

    render(<CustomToast message={message} onClick={onClick} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('calls onClick prop when div is clicked', () => {
    const message = 'Sample message';
    const onClick = jest.fn();

    render(<CustomToast message={message} onClick={onClick} />);

    fireEvent.click(screen.getByText(message));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

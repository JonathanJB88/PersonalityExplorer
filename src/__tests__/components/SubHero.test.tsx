import { render, fireEvent } from '@testing-library/react';
import { SubHero } from '../../components/SubHero';
import { heading, subheading } from '../../data';

describe('SubHero', () => {
  test('renders without crashing', () => {
    const onClick = jest.fn();
    const { container } = render(<SubHero onClick={onClick} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('displays the correct heading and subheading', () => {
    const onClick = jest.fn();
    const { getByText } = render(<SubHero onClick={onClick} />);

    expect(getByText(heading)).toBeInTheDocument();
    expect(getByText(subheading)).toBeInTheDocument();
  });

  test('handles onClick properly', () => {
    const onClick = jest.fn();
    const { getByText } = render(<SubHero onClick={onClick} />);

    fireEvent.click(getByText('Start Test'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

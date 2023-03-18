import { render, fireEvent } from '@testing-library/react';
import { Hero } from '../../components/Hero';
import { useNavigate } from 'react-router-dom';
import { debug } from 'console';

jest.mock('../../components/SubHero', () => ({
  SubHero: ({ onClick }: { onClick: () => void }) => (
    <div data-testid='subhero' onClick={onClick}>
      SubHero
    </div>
  ),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

const setup = () => {
  const mockNavigate = jest.fn();
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  const utils = render(<Hero />);
  debug();
  const subHero = utils.getByTestId('subhero');
  return {
    mockNavigate,
    subHero,
    ...utils,
  };
};

describe('Hero', () => {
  test('renders SubHero component', () => {
    const { subHero } = setup();
    expect(subHero).toBeInTheDocument();
  });

  test('calls useNavigate hook', () => {
    setup();
    expect(useNavigate).toHaveBeenCalledTimes(1);
  });

  test('navigates to /content when SubHero is clicked', () => {
    const { mockNavigate, subHero } = setup();
    mockNavigate.mockImplementation(() => Promise.resolve());
    fireEvent.click(subHero);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/content');
  });
});

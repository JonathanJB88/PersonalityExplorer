import { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CTASection } from '../../components';

const renderCTASection = () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={children} />
        <Route path='/test' element={<div data-testid='test-page' />} />
      </Routes>
    </BrowserRouter>
  );
  return render(<CTASection />, { wrapper });
};

describe('CTASection component', () => {
  test('renders without throwing an error', () => {
    renderCTASection();
  });

  test('renders header text', () => {
    renderCTASection();
    expect(screen.getByText('Are you ready to explore your personality?')).toBeInTheDocument();
  });

  test('renders button with correct label', () => {
    renderCTASection();
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Start the test now');
  });

  test('navigates to the test page on button click', () => {
    renderCTASection();

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    expect(screen.getByTestId('test-page')).toBeInTheDocument();
  });
});

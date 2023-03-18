import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from '../../components/Navbar';
import { TestProvider } from '../../context/TestProvider';
import { TestContext, TestContextProps } from '../../context/TestContext';
import { navItems } from '../../data';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
  const mockTestContext: Partial<TestContextProps> = {
    isLoading: false,
    questions: [],
    score: 0,
    results: [],
    result: undefined,
    setLoading: jest.fn(),
    nextQuestion: jest.fn(),
    showResult: jest.fn(),
    resetTest: jest.fn(),
  };

  test('renders nav items', () => {
    render(
      <TestContext.Provider value={mockTestContext as TestContextProps}>
        <TestProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </TestProvider>
      </TestContext.Provider>
    );
    navItems.forEach((item) => {
      const link = screen.getByText(item.label);
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe(item.path === '/test' ? '/content' : item.path);
    });
  });

  test('toggles mobile menu', () => {
    render(
      <TestContext.Provider value={mockTestContext as TestContextProps}>
        <TestProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </TestProvider>
      </TestContext.Provider>
    );
    const button = screen.getByTitle('Menu');
    fireEvent.click(button);
    expect(screen.getByText(navItems[0].label)).toBeInTheDocument();
  });

  test('applies correct styles for mobile menu', () => {
    render(
      <TestContext.Provider value={mockTestContext as TestContextProps}>
        <TestProvider>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </TestProvider>
      </TestContext.Provider>
    );
    const button = screen.getByTitle('Menu');
    fireEvent.click(button);
    const nav = screen.getByRole('navigation', { name: 'main menu' });
    expect(nav).toHaveClass('font-body lg:hidden');
  });
});

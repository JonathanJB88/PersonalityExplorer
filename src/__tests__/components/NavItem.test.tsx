import { render, screen, fireEvent } from '@testing-library/react';
import { NavItem } from '../../components/NavItem';
import { TestContext, TestContextProps } from '../../context/TestContext';
import { TestProvider } from '../../context/TestProvider';
import { BrowserRouter } from 'react-router-dom';

describe('NavItem', () => {
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

  test('renders label as link text', () => {
    const label = 'Test';
    const path = '/test';
    render(
      <TestContext.Provider value={mockTestContext as TestContextProps}>
        <TestProvider>
          <BrowserRouter>
            <NavItem label={label} path={path} />
          </BrowserRouter>
        </TestProvider>
      </TestContext.Provider>
    );
    const link = screen.getByText(label);
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('/content');
  });

  test('resets test when home link is clicked', () => {
    const resetTest = jest.fn();
    const toggleIcon = jest.fn();
    render(
      <TestContext.Provider value={mockTestContext as TestContextProps}>
        <TestProvider>
          <BrowserRouter>
            <NavItem label='Home' path='/' toggleIcon={toggleIcon} resetTest={resetTest} />
          </BrowserRouter>
        </TestProvider>
      </TestContext.Provider>
    );
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    expect(resetTest).toHaveBeenCalled();
    expect(toggleIcon).toHaveBeenCalled();
  });
});

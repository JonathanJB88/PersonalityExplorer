import { render, screen } from '@testing-library/react';
import { FeatureCard } from '../../components';

describe('FeatureCard', () => {
  test('renders the component', () => {
    render(<FeatureCard title='Test title' description='Test description' />);
    expect(screen.getByTestId('feature-card-wrapper')).toBeInTheDocument();
  });

  test('renders the correct title', () => {
    const testTitle = 'Test title';
    render(<FeatureCard title={testTitle} description='Test description' />);
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  test('renders the correct description', () => {
    const testDescription = 'Test description';
    render(<FeatureCard title='Test title' description={testDescription} />);
    expect(screen.getByText(testDescription)).toBeInTheDocument();
  });
});

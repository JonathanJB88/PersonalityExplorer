import { render } from '@testing-library/react';
import { FeaturesSection } from '../../components';
import { features } from '../../data';

describe('FeaturesSection Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<FeaturesSection />);
    expect(container).not.toBeNull();
  });

  test('renders correct number of FeatureCard components', () => {
    const { getAllByTestId } = render(<FeaturesSection />);
    const featureCards = getAllByTestId('feature-card-wrapper');
    expect(featureCards.length).toBe(features.length);
  });

  test('passes correct data as props to FeatureCard components', () => {
    const { getAllByTestId } = render(<FeaturesSection />);
    const featureCards = getAllByTestId('feature-card-wrapper');
    featureCards.forEach((card, index) => {
      expect(card).toHaveTextContent(features[index].title);
      expect(card).toHaveTextContent(features[index].description);
    });
  });
});

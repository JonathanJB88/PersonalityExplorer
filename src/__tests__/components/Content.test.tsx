import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Content } from '../../components';

describe('Content component', () => {
  test('renders the FeaturesSection component', () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );
    const featuresSection = screen.getByLabelText('Features');
    expect(featuresSection).toBeInTheDocument();
  });

  test('renders the CTASection component', () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );
    const ctaSection = screen.getByLabelText('CTA');
    expect(ctaSection).toBeInTheDocument();
  });

  test('renders the Testimonials component', () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );
    const testimonialsSection = screen.getByLabelText('Testimonials');
    expect(testimonialsSection).toBeInTheDocument();
  });
});

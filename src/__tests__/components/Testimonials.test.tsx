import { render, screen } from '@testing-library/react';
import { Testimonials } from '../../components';
import { testimonialsData } from '../../data';

// Mock testimonialsData array
jest.mock('../../data', () => ({
  testimonialsData: [
    {
      name: 'Test Name 1',
      picture: 'test_picture_url_1',
      quote: 'Test Quote 1',
    },
    {
      name: 'Test Name 2',
      picture: 'test_picture_url_2',
      quote: 'Test Quote 2',
    },
  ],
}));

describe('Testimonials component', () => {
  test('renders the Testimonials component correctly', () => {
    render(<Testimonials />);
    const section = screen.getByRole('region');
    expect(section).toBeInTheDocument();
  });

  test('renders the correct number of testimonial cards', () => {
    render(<Testimonials />);
    const cards = screen.getAllByRole('gridcell');
    expect(cards.length).toBe(testimonialsData.length);
  });

  test('each testimonial card has the correct content', () => {
    render(<Testimonials />);
    testimonialsData.forEach(({ name, picture, quote }) => {
      const img = screen.getByAltText(name);
      expect(img).toHaveAttribute('src', picture);
      const quoteElement = screen.getByText(quote);
      expect(quoteElement).toBeInTheDocument();
      const nameElement = screen.getByText(name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});

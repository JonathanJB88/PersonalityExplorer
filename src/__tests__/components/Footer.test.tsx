import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/Footer';
import { social } from '../../data';

jest.mock('../../data', () => ({
  social: [
    {
      href: 'https://www.facebook.com/',
      Icon: jest.fn(),
      id: 'facebook',
    },
    {
      href: 'https://www.twitter.com/',
      Icon: jest.fn(),
      id: 'twitter',
    },
  ],
}));

describe('Footer', () => {
  test('renders Follow Us text', () => {
    render(<Footer />);
    const text = screen.getByText(/follow us/i);
    expect(text).toBeInTheDocument();
  });

  test('renders social icons', () => {
    render(<Footer />);
    const socialIcons = screen.getAllByRole('link');
    expect(socialIcons).toHaveLength(social.length);
    socialIcons.forEach((icon, index) => {
      expect(icon).toHaveAttribute('href', social[index].href);
    });
  });

  test('renders copyright text', () => {
    render(<Footer />);
    const text = screen.getByText(/personality explorer/i);
    expect(text).toBeInTheDocument();
  });
});

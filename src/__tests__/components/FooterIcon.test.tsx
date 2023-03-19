import { render, screen } from '@testing-library/react';
import { FooterIcon } from '../../components/FooterIcon';
import { FaFacebookF as FacebookIcon } from '../../data';

describe('FooterIcon component', () => {
  test('renders FooterIcon component with Facebook icon', () => {
    render(<FooterIcon href='https://www.facebook.com' Icon={FacebookIcon} />);
    const link = screen.getByLabelText('social-media-icon');
    expect(link).toBeInTheDocument();
  });
});

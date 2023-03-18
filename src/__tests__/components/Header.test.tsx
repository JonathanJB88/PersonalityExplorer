import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components';

describe('Header', () => {
  test('renders logo and title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText('Personality Explorer Test Logo');
    expect(logo).toBeInTheDocument();
    const title = screen.getByText('Personality Explorer');
    expect(title).toBeInTheDocument();
  });

  test('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const navbars = screen.getAllByRole('navigation');
    expect(navbars.length).toBeGreaterThanOrEqual(2);
  });
});

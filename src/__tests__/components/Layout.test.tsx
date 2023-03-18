import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Layout } from '../../components/Layout';

import heroBg from '../../assets/heroBg.jpg';

describe('Layout', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<div data-testid='outlet-content'>Test Outlet Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });

  test('renders the Header component', () => {
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the Footer component', () => {
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the main element with the Outlet content', () => {
    const mainElement = screen.getByRole('main');
    const outletContent = screen.getByTestId('outlet-content');
    expect(mainElement).toContainElement(outletContent);
  });

  test('sets the background image', () => {
    const backgroundImageDiv = screen.getByTestId('background-image');
    expect(backgroundImageDiv).toHaveStyle({
      backgroundImage: `url(${heroBg})`,
    });
  });
});

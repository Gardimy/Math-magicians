import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Navbar component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
});

test('renders HomePage component on root path', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );
});

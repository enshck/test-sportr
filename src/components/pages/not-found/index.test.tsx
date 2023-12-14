import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import { NotFound } from './index';

it('renders', () => {
  render(<NotFound />);

  expect(screen.getByText(/page not found/i)).toBeVisible();
});

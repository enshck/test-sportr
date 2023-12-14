import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import { Header } from './index';

it('renders', () => {
  render(<Header />);

  expect(screen.getByText(/scoreboard app/i)).toBeVisible();
});

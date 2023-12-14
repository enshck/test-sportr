import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import { ScoreboardPage } from './index';

it('renders check', () => {
  render(<ScoreboardPage />);

  expect(
    screen.getByText(/at the moment any match wasn`t started/i)
  ).toBeVisible();
});

import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import { Page } from './index';

const selectors = {
  root: 'page-root',
};

it('renders', () => {
  render(<Page />);

  expect(screen.getByTestId(selectors.root)).toBeVisible();
});

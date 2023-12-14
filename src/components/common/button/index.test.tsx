import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen, RenderResult } from 'test-utils';
import { Button } from './index';

describe('Button common component', () => {
  const user = userEvent.setup();
  const onClick = jest.fn();
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Button ariaLabel="test-button" onClick={onClick}>
        Test button
      </Button>
    );
  });

  it('renders check', () => {
    expect(screen.getByText(/test button/i)).toBeVisible();
  });

  it('onClick check', async () => {
    await user.click(screen.getByText(/test button/i));

    expect(onClick).toHaveBeenCalled();
  });

  it('disabled button', async () => {
    renderResult.rerender(
      <Button ariaLabel="test-button" onClick={onClick} disabled>
        Test button
      </Button>
    );

    await user.click(screen.getByText(/test button/i));

    expect(screen.getByRole('button', { name: 'test-button' })).toBeDisabled();
  });
});

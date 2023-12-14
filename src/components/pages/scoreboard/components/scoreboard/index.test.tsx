import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen, within } from 'test-utils';
import { Scoreboard } from './index';

const selectors = {
  matchCard: 'match-card',
};

describe('Scoreboard component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<Scoreboard />);
  });

  it('initial result', () => {
    expect(
      screen.getByText(/at the moment any match wasn`t started/i)
    ).toBeVisible();
  });

  it('click on new game', async () => {
    await user.click(screen.getByText(/start new game/i));

    expect(await screen.findByTestId(selectors.matchCard)).toBeVisible();
  });

  it('click on update games', async () => {
    await user.click(screen.getByText(/update score/i));

    expect(
      within(await screen.findByTestId(selectors.matchCard)).getByText(/1/i)
    ).toBeVisible();
  });

  it('click on open summary dialog', async () => {
    await user.click(screen.getByText(/open summary dialog/i));

    expect(await screen.findByText('Summary dialog')).toBeVisible();
  });
});

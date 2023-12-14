import { useState } from 'react';

import style from './style.module.css';
import { Button } from 'components/common/button';
import { GameItem } from './types';

export const Scoreboard = () => {
  const [games] = useState<GameItem[]>([]);

  const onStartNewGame = () => {};

  const onUpdateScore = () => {};

  const openSummaryDialog = () => {};

  return (
    <div className={style.root}>
      <div className={style.buttons}>
        <Button onClick={onStartNewGame}>Start new game</Button>
        <Button onClick={onUpdateScore}>Update score</Button>
        <Button onClick={openSummaryDialog}>Open summary dialog</Button>
      </div>
      {games.length ? (
        games.map((elem) => {
          const { id } = elem;

          return (
            <div className={style.card} key={id} data-testid={'match-card'}>
              {id}
            </div>
          );
        })
      ) : (
        <div className={style.emptyContainer}>
          <p>At the moment any match wasn`t started</p>
        </div>
      )}
    </div>
  );
};

import style from './style.module.css';
import { Scoreboard } from './components/scoreboard';

export const ScoreboardPage = () => (
  <div className={style.root}>
    <div className={style.scoreboardContainer}>
      <Scoreboard />
    </div>
  </div>
);

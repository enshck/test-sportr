type ScoreItem = {
  country: string;
  score: number;
};

export type GameItem = {
  id: string;
  scoreItemsPair: [ScoreItem, ScoreItem];
  startedAt: string;
  finishedAt?: string;
};

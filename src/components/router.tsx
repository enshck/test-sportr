import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from 'constants/routes';
import { Page } from 'components/common/page';
import { ScoreboardPage } from './pages/scoreboard';
import { NotFound } from './pages/not-found';

export const Router = () => (
  <Routes>
    <Route index element={<Navigate to={routes.scoreboard} replace />} />
    <Route element={<Page />}>
      <Route path={routes.scoreboard} element={<ScoreboardPage />} />
    </Route>
    <Route path={routes.any} element={<NotFound />} />
  </Routes>
);

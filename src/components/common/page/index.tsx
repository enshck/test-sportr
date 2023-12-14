import { Outlet } from 'react-router-dom';

import { Header } from '../header';
import style from './style.module.css';

export const Page = () => (
  <div className={style.root} data-testid={'page-root'}>
    <Header />
    <Outlet />
  </div>
);

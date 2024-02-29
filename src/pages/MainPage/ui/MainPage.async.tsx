import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ДЛЯ ПРИМЕРА!!!!!!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));

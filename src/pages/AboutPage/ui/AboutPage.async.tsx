import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ДЛЯ ПРИМЕРА!!!!!!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));

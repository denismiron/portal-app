import React, { useContext, useState, Suspense } from 'react';
import './styles/index.scss'
import { Route, Routes, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

const Component = () => {
    const {t, i18n} = useTranslation();

    const toggle = () =>{
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <button onClick={toggle}>{t('Перевод')}</button>
            {t('Тестовый перевод')}
        </div>
    )
}

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <Component/>
                    <div className='content-page'>
                        <Sidebar/>
                        <AppRouter/>
                    </div>
            </Suspense>
        </div>
    );
};

export default App;
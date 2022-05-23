import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FinishPrivateRouter } from './components';
import s from './style.module.scss';

export enum PATHS_ENUM {
  ANY = '*',
  START = '/',
  ENG = '/eng',
  RUS = '/rus',
  FINISH = '/finish',
}

interface RouterItem {
  path: PATHS_ENUM;
  Component: React.FC;
}

const routes: RouterItem[] = [
  {
    path: PATHS_ENUM.ANY,
    Component: lazy(() => import('./components/NotFound/index')),
  },
  {
    path: PATHS_ENUM.START,
    Component: lazy(() => import('./components/StartScreen/index')),
  },
  {
    path: PATHS_ENUM.ENG,
    Component: lazy(() => import('./components/TypingScreen/index')),
  },
  {
    path: PATHS_ENUM.RUS,
    Component: lazy(() => import('./components/TypingScreen/index')),
  },
  {
    path: PATHS_ENUM.FINISH,
    Component: lazy(() => import('./components/FinishScreen/index')),
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className={s.container}>
        <Routes>
          {routes.length &&
            routes.map(({ Component, path }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Suspense fallback={false}>
                      {path !== PATHS_ENUM.FINISH ? (
                        <Component />
                      ) : (
                        <FinishPrivateRouter>
                          <Component />
                        </FinishPrivateRouter>
                      )}
                    </Suspense>
                  }
                />
              );
            })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

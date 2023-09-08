import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';
import { CookieBanner } from '../Components/CookieBanner/CookieBanner';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);

  const handleVisible = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader handleVisible={handleVisible} />
        {withSidebar && <AppAside visible={isAsideVisible} />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
};

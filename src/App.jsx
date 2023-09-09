import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { CV } from './App/CV';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Faq } from './App/FAQ';
import { TechStack } from './App/Components/TechStack/TechStack';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="tech-stack/*" element={<TechStack />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="faq/*" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

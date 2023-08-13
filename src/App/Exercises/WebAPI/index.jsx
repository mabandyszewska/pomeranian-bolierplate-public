import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';

import { GoBackLink } from '../../Components/GoBack/GoBack';
import { getRouterMetaDataByCurrentPath } from '../../router-data/getRouterMetaDataByCurrentPath';

import { ExerciseItemHeader } from '../ExerciseItemHeader';

import { ExerciseLinks } from './ExerciseLinks';
import {
  blockRouterData as WebAPIBlockRouterData,
  blockRouterMetaData as WebAPIBlockRouterMetaData,
} from './view-router-data';

export function WebAPI() {
  const element = useRoutes(WebAPIBlockRouterData);

  return (
    <div>
      <p>Web API - lista ćwiczeń</p>
      <GoBackLink label="Zamknij" />

      <hr />

      <Routes>
        <Route path="" element={<ExerciseLinks />} />
      </Routes>

      {element}
    </div>
  );
}

export function WebAPIItem() {
  const element = useRoutes(WebAPIBlockRouterData);

  const location = useLocation();

  const { pathname } = location;
  // const pathname = location.pathname

  const exerciseRouteData = getRouterMetaDataByCurrentPath(
    pathname,
    WebAPIBlockRouterMetaData
  );

  return (
    <div className="exercise-item-layout">
      <ExerciseItemHeader data={exerciseRouteData} />

      <hr />

      <div className="exercise-item-content">{element}</div>
    </div>
  );
}

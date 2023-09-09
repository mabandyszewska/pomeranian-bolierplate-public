import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { JsExerciseItem, JsExercises } from './Js';
import { HtmlCssExercises, HtmlCssExerciseItem } from './HtmlCss';
import { Categories } from './Categories';
import { ReactExercises, ReactExercisesItem } from './ReactExercises';

import './styles.css';
import { MasterHeader } from '../Components/MasterHeader/MasterHeader';

export function Exercises() {
  return (
    <Routes>
      <Route path="" element={<BlockLayout />}>
        <Route path="html-css" element={<HtmlCssExercises />} />
        <Route path="js" element={<JsExercises />} />
        <Route path="react" element={<ReactExercises />} />
      </Route>
      <Route path="html-css/*" element={<HtmlCssExerciseItem />} />
      <Route path="js/*" element={<JsExerciseItem />} />
      <Route path="react/*" element={<ReactExercisesItem />} />
    </Routes>
  );
}

function BlockLayout() {
  return (
    <>
      <MasterHeader value="EXERCISES" />
      <p className="margin-exercise-fixer">
        Here you will find all the exercises that were carried out on the
        course.
      </p>
      <div className="exercise-main-container">
        <Categories />
        <Outlet />
      </div>
    </>
  );
}

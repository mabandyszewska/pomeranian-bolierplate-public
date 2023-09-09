import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h4 className="exercise-heading4">categories</h4>
        <NavLink to="html-css">HTML & CSS</NavLink>
        <NavLink to="js">JavaScript</NavLink>
        <NavLink to="react">React</NavLink>
      </div>
    </>
  );
};

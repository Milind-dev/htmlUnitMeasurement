import React from 'react';
import units from '../styles/style.module.css';
const Preloader = () => {
  return (
    <div>
      <div>
        <p className={units.unitMarginCm}> centimeter </p>
        <p className={units.unitMarginMilimeter}> milimeter </p>
        <p className={units.unitMarginInches}> milimeter </p>
        <p className={units.unitMarginRem}> rem </p>
      </div>
      <h1> Preloader </h1>
    </div>
  );
};
export default Preloader;

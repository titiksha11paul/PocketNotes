import React, { useEffect, useState } from 'react';
import display from './Pocketnote.module.css';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

/**
 *
 */

const DisplayNotetile = ({ data }) => {

  const [Mobile, setMobile] = useState();
  useEffect(() => {
    if (window.innerWidth > 480) {
      setMobile(false);
    }
    else {
      setMobile(true);
    }
  }, []);
  
  return (
    <div className={Mobile===true?display.mobiletile:display.datatile}>
      <div className={ Mobile===true?display.rack:display.leftsection}>
        <h2>{data.time}</h2>
        <h2>{data.date}</h2>
      </div>
      <div className={display.rightsection}>
        <p id={display.content}>{data.content}</p>
      </div>
    </div>
  );
};

export default DisplayNotetile;

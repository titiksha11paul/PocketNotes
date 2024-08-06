import React from 'react';
import bgimage from '../../assets/Emptypocket.png';
import lock from '../../assets/Vector.png';
import empty from './Pocketnote.module.css';
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const EmptyPocket = () => {
  return (
      <div className={empty.emptypocket}>
      <img className={empty.emptybg} src={bgimage} alt="" />
      <p className={empty.head}>Pocket Notes</p>
      <p className={empty.sub}>
        Send and receive messages without keeping your phone online.<br></br>
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className={empty.bottomcontent}>
              <img className={empty.emptylock} src={lock} alt="" />
        <p className={empty.sub}>end-to-end encrypted</p>
      </div>
    </div>
  );
};

// #endregion

export default EmptyPocket;

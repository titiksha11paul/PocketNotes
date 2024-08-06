import React from 'react';
import tile from './Notetile.module.css';
import useNoteContext from '../context/useNoteContext';
import { useNavigate } from 'react-router-dom';
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
const Notetile = ({ title }) => {
  const { selectedNote, setSelectedNote } = useNoteContext();
  const navigate = useNavigate();
  
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getFirstLetters = (str) => {
    const firstLetters = str
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return firstLetters;
  };

  const notepage = () => {
    navigate('/notes');
  };

  const handleSelect = () => {
    setSelectedNote(title[0].name);
    if (window.innerWidth < 480) {
      notepage();
    }
  };

  return (
    <div
      className={
        tile.tile +
        ' ' +
        (selectedNote === title[0].name ? tile.selectedtile : null)
      }
      onClick={handleSelect}
    >
      <div
        className={tile.shorthand}
        style={{ backgroundColor: title[0].bgcolor }}
      >
        <h2>{getFirstLetters(title[0].name)}</h2>{' '}
      </div>
      <div className={tile.noteheading}>
        {' '}
        {title.length > 0 ? (
          <h2>{capitalizeFirst(title[0].name)}</h2>
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

// #endregion

export default Notetile;

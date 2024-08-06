import React, { useEffect, useState } from 'react';
import note from './MobileNotes.module.css';
import useNoteContext from '../../context/useNoteContext';

import { useNavigate } from 'react-router-dom';
import enterlogo from '../../assets/arrow.svg';
import back from '../../assets/backarrow.svg';
import DisplayNotetile from './DisplayNotetile';
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
const MobileNotesection = () => {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#fff');
  const [Title, setTitle] = useState('');
  const { notes, setNotes, selectedNote } = useNoteContext();

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
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleKey = (e) => {
    let newline = '<br><br/>';
    if (e.key === 'Enter' ) {
      e.preventDefault();
      setText(e.target.value + `\n`);
    }
  };
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selectedNote)) || []);
    const groupNames = JSON.parse(localStorage.getItem('groupNames'));
    if (groupNames) {
      const selectedGroupname = groupNames.find(
        (item) => item.name === selectedNote
      );
      if (selectedNote) {
        setBgColor(selectedGroupname.bgcolor);
        setTitle(selectedGroupname.name);
      }
    }
  }, [selectedNote, setNotes]);

  // const getData = () => {
  //   let d = new Date();

  //   return
  // }

  const getData = () => {
    let d = new Date().toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let dd = d.slice(0, 2);
    let yy = d.slice(6, 10);
    let mm = monthNames[d.slice(3, 5) - 1];
    return `${dd} ${mm} ${yy}`;
  };
  // const getData = () => {
  //   let d = new Date();
  //   let s = d.getDate() + '-' + d.toString() + '-' + d.getFullYear();
  //   return s;
  // };

  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selectedNote)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selectedNote,
      content: text.trim(),
      date: getData(),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selectedNote, JSON.stringify(notes));
    setText('');
    setNotes(notes);
  };
  const backtohome = () => {
    navigate('/');
  };
  return (
    <div className={note.app}>
      <div className={note.heading}>
        <img src={back} alt="" onClick={backtohome} />
        <div className={note.displayname} style={{ backgroundColor: bgColor }}>
          <h2>{getFirstLetters(Title)}</h2>
        </div>
        <div className={note.title}>
          <h2>{capitalizeFirst(Title)}</h2>
        </div>
      </div>
      <div className={note.noterack}>
        {notes && notes.length > 0
          ? notes.map((note, index) => (
              <DisplayNotetile key={index} data={note} />
            ))
          : null}
      </div>
      <div className={note.textarea}>
        <textarea
          value={text}
          placeholder="Enter your text here......"
          onChange={handleText}
          onKeyDown={handleKey}
        ></textarea>
        <img src={enterlogo} onClick={handleSaveNotes} alt="loading" />
      </div>
    </div>
  );
};

export default MobileNotesection;

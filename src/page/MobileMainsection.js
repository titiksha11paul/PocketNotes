import React, { useEffect, useState } from 'react';
import useNoteContext from '../context/useNoteContext';
import main from '../page/Mobile.module.css';
import Popup from 'reactjs-popup';
import Notetile from '../component/Notetile';

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
const MobileMainsection = () => {
  let [groupNames, setGroupNames] = useState([]);
  let [grouptittle, setGrouptittles] = useState([]);
  let [input, setInput] = useState('');
  let [color, setColor] = useState('');
  let [pop, setPop] = useState(false);
  const { selectedNote } = useNoteContext();

  useEffect(() => {
    const data = localStorage.getItem('groupNames');
    if (data) {
      setGroupNames(JSON.parse(data));
    } else {
      setGroupNames([]);
    }
  }, []);

  useEffect(() => {
    if (groupNames.length > 0) {
      const obj = JSON.parse(localStorage.getItem('groupNames'));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setGrouptittles(result);
    }
  }, [groupNames]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const settingColor = (e) => {
    setColor(e.target.value);
  };

  const handleCreate = () => {
    let newdata = { name: input, bgcolor: color };
    setGroupNames([...groupNames, newdata]);
    localStorage.setItem(
      'groupNames',
      JSON.stringify([...groupNames, newdata])
    );
    setInput('');
    setColor('');
    handleclosepopup();
  };

  const handleclosepopup = () => {
    setPop(false);
  };
  const handlepopup = () => {
    setPop(true);
  };
  return (
    <div className={main.main}>
      {pop === true ? (
        <div className={main.transparent} onClick={handleclosepopup}></div>
      ) : null}
      <div className={main.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <Popup
        trigger={
          <div>
            <button className={main.createnotebtn} onClick={handlepopup}>
              {' '}
              + Create Notes group
            </button>
          </div>
        }
        open={pop}
        position=" center"
      >
        {(close = pop) => (
          <div className={main.popup}>
            <div className={main.content}>
              <h2 className={main.popuph2}>Create New Notes group</h2>
              <div className={main.createpopup}>
                <div className={main.rowinput}>
                  <label>Group Name</label>
                  <input
                    className={main.inputhead}
                    type="text"
                    name="heading"
                    autoComplete="off"
                    onChange={handleInput}
                    placeholder="Enter your group name...."
                  ></input>
                </div>
                <div className={main.rowclr}>
                  <label>Choose colour</label>
                  <button
                    className={
                      main.clr1 +
                      ' ' +
                      (color === '#B38BFA' ? main.highlightbtn : null)
                    }
                    name="color"
                    value="#B38BFA"
                    onClick={settingColor}
                  ></button>
                  <button
                    className={
                      main.clr2 +
                      ' ' +
                      (color === '#FF79F2' ? main.highlightbtn : null)
                    }
                    name="color"
                    value="#FF79F2"
                    onClick={settingColor}
                  ></button>
                  <button
                    className={
                      main.clr3 +
                      ' ' +
                      (color === '#43E6FC' ? main.highlightbtn : null)
                    }
                    name="color"
                    value="#43E6FC"
                    onClick={settingColor}
                  ></button>
                  <button
                    className={
                      main.clr4 +
                      ' ' +
                      (color === '#F19576' ? main.highlightbtn : null)
                    }
                    name="color"
                    value="#F19576"
                    onClick={settingColor}
                  ></button>
                  <button
                    className={
                      main.clr5 +
                      ' ' +
                      (color === '#0047FF' ? main.highlightbtn : null)
                    }
                    name="color"
                    value="#0047FF"
                    onClick={settingColor}
                  ></button>
                  <button
                    className={
                      main.clr6 +
                      ' ' +
                      (color === '#6691FF' ? main.highlightbtn : null)
                    }
                    name="color"
                    value="#6691FF"
                    onClick={settingColor}
                  ></button>
                </div>
              </div>
            </div>
            <div className={main.popbtn}>
              <button
                onClick={handleCreate}
                disabled={input.length === 0 || color.length === 0}
              >
                Create
              </button>
            </div>
          </div>
        )}
      </Popup>
      <div className={main.notetitlerack}>
        {grouptittle.length > 0
          ? grouptittle.map((items, index) => (
              <Notetile key={index} title={items} />
            ))
          : null}
      </div>
    </div>
  );
};

// #endregion

export default MobileMainsection;

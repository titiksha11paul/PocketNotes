import logo from './logo.svg';
import './App.css';
import Mainsection from './page/Mainsection';
import { Provider } from './context/NoteContext';
import { useEffect, useState } from 'react';
import MobileMainsection from './page/MobileMainsection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MobileNotesection from './component/PocketNote/MobileNotesection';
function App() {
  
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", checkScreen);
  });
  const checkScreen = () => {
    setScreenSize(window.innerWidth);
  };

  return (
    <Provider>
      <Router>
      {screenSize > 480 ? (
      <div className="app">
        <Mainsection />
      </div>
      ) :(
        
          <Routes>
            <Route path="/" element={<MobileMainsection />} />
            <Route path="/notes" element={<MobileNotesection />} />
          </Routes>
        
      )
        }
        </Router>
    </Provider>
  );
}

export default App;

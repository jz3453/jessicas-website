import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Navbar from './components/navigation/Navbar';
import About from './components/routes/about/About';

export const DisplayContext = React.createContext();

function App() {
  const [narrowDisplay, setNarrowDisplay] = useState(false);

  return (
    <div className="App">
      <DisplayContext.Provider value={{ narrowDisplay, setNarrowDisplay }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </DisplayContext.Provider>
    </div>
  );
}

export default App;

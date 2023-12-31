import React, { useContext, useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Navbar from './components/navigation/Navbar';
import About from './components/routes/about/About';
import Courses from './components/routes/courses/Courses';
import Contact from './components/routes/contact/Contact';
import Experiences from './components/routes/experiences/Experiences';

import './App.css';

export const DisplayContext = React.createContext();

function App() {
  const [narrowDisplay, setNarrowDisplay] = useState(false);

  return (
    <div className="App">
      <DisplayContext.Provider value={{ narrowDisplay, setNarrowDisplay }}>
        <div className='container'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='page-all'>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experiences" element={<Experiences />} />
            </Routes>
          </div>
        </div>
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
library.add(fab, fas, far)

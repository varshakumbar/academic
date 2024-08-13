import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Interp from './components/academic/Interp';
import Contactas from './components/academic/Contactas'
import Academic from './components/academic/Academic';
import Relation from './components/academic/Relation';
import Programs from './components/academic/Programs';

import Units from './components/academic/Units'
import Curriculatemplate from './components/curriculum/Curriculatemplate';

const App = () => {
  return (
    <Router>
        <Routes>
       <Route path="/academic" element={<Academic/>} />
          <Route path="/academic/interdisciplinary" element={<Interp/>} />
          <Route path="/academic/international" element={<Relation/>} />
          <Route path="/academic/contact" element={<Contactas/>} />
          <Route path="/academic/programs" element={<Programs/>} />
          <Route path="/academic/units" element={<Units/>} />
           <Route path="/curriculum" element={<Curriculatemplate/>} />
        </Routes>
    </Router>
  );
}

export default App;

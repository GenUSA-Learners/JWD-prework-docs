import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Module01 from './pages/Mod-01';
import Module02 from './pages/Mod-02';
import Module03 from './pages/Mod-03';
import Module04 from './pages/Mod-04';
import Module05 from './pages/Mod-05';
import Module06 from './pages/Mod-06';
import Module07 from './pages/Mod-07';
import Module08 from './pages/Mod-08';
import Module09 from './pages/Mod-09';
import Module10 from './pages/Mod-10';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Mod-01' element={<Module01 />} />
          <Route path='/Mod-02' element={<Module02 />} />
          <Route path='/Mod-03' element={<Module03 />} />
          <Route path='/Mod-04' element={<Module04 />} />
          <Route path='/Mod-05' element={<Module05 />} />
          <Route path='/Mod-06' element={<Module06 />} />
          <Route path='/Mod-07' element={<Module07 />} />
          <Route path='/Mod-08' element={<Module08 />} />
          <Route path='/Mod-09' element={<Module09 />} />
          <Route path='/Mod-10' element={<Module10 />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

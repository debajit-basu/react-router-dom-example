import React from 'react';

import { BrowserRouter,Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './component/Home';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';
import Navbar from './component/Navbar';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h1>React router with redux</h1>
              <Navbar />
              <div className="container">
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={AboutUs} />
                  <Route path='/contact' component={Contact} />
              </div>

          </div>
      </BrowserRouter>

  );
}

export default App;

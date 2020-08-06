// Core
import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import {Home} from './components/pages/Home';
import {About} from './components/pages/About';
import { Profile } from './components/pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/profile/:name' component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

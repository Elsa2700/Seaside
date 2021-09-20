import React from 'react';
import HomePage from './Page/HomePage';
import About from './Page/About';
import Shop from './Page/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () =>{
  return(
    <Router basename='/build/index.html'>
      <div>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>

    </Router>
  )
}

export default App;
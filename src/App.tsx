import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './theme/main.scss';

import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <div className="App">

    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>

  </div>
);

export default App;

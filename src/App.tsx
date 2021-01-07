import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink as Link,
  Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Train from './pages/Train';

const Wrapper = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="train">Train</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/train">
            <Train />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
};

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Containers/Home'
import Error from './Components/Error'

import NavBar from './Components/NavBar'


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <br/><br/><br/>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './Containers/Home'
import Error from './Components/Error'
import LoginForm from './Components/LoginForm'
import MySteez from './Containers/MySteez'
import NavBar from './Components/NavBar'
import RegisterForm from './Components/RegisterForm';
import ProductCard from './Components/ProductCard'


class App extends React.Component {



  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <br/><br/><br/>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/mysteez" component={MySteez} />
            <Route path="/product/:id" component={ProductCard} />
            <Route path="/" component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './Containers/Home'
import Error from './Components/Error'
import LoginForm from './Components/LoginForm'
import MySteez from './Containers/MySteez'
import NavBar from './Components/NavBar'
import RegisterForm from './Components/RegisterForm';
import ProductShow from './Components/ProductShow'
import ProductForm from './Components/ProductForm';
import Home from './Containers/Home'


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
            <Route path="/product/:id" component={ProductShow} />
            <Route path="/add-product" component={ProductForm} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

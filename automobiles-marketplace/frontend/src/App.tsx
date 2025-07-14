import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
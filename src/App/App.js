import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from '../components/Navbar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MyNavbar />
        <Routes />
      </Router>
    );
  }
}

export default App;

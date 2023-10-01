
import React from 'react';
//import './App.css';
import './App.scss';

import{
  BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom";
//import { Routes} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Chart from './Chart/MyChart';
import MyChart from './Chart/MyChart';


function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className='mainContainer'>
        <Switch>
          <Route path='/about'>
            <AboutPage/>
          </Route>
          <Route path='/login'>
            <LoginPage/>
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
          <Route>
          </Route>

          <MyChart/> 
        </Switch>
      </div>
    
      
      <Footer/>
      
    </Router>
  );
}

export default App; 



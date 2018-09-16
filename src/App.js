import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import QuestionsList from './QuestionsList';
import QuestionDetails from './QuestionDetails';


class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Route
          exact path="/"
          render= {() => (
            <QuestionsList />
        )}/>
        <Route
          exact path="/question-details"
          render= {() => (
            <QuestionDetails />
        )}/>
      </div>
    );
  }
}

export default App;

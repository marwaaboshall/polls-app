import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import QuestionsList from './QuestionsList';
import QuestionDetails from './QuestionDetails';


class App extends Component {
  state = {
    question: '',
    choices: []
  };
  
  shareQuestionData = (question, choices) => {
    this.setState({
      question,
      choices
    });
    console.log(question, typeof choices);
  }
  render() {
    return (
      <div className="container">
        <Route
          exact path="/"
          render= {() => (
            <QuestionsList shareQuestionData={this.shareQuestionData}/>
        )}/>
        <Route
          exact path="/question-details"
          render= {() => (
            <QuestionDetails question={ this.state.question } choices={ this.state.choices}/>
        )}/>
      </div>
    );
  }
}

export default App;

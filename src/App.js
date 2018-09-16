import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import QuestionDetails from './QuestionDetails';


class App extends Component {
  state = {
    questions: []
  };
  componentDidMount() {
    fetch('https://polls.apiblueprint.org/questions?page=1')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({ questions: data });
      console.log(data);
    })
    .catch((err) =>{
      console.log('An error happened fetching the data' + err);
    });
  }
  render() {
    return (
      <div className="container">
        <Route
          exact path="/"
          render= {() => (
            <Question questionsList={this.state.questions}/>
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';


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
        <header className="row">
          <h1>Questions</h1>
        </header>
        <Question questionsList={this.state.questions}/>
      </div>
    );
  }
}

export default App;

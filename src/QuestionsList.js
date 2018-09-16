import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Question from './Question';
class QuestionsList extends Component {
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
    getQuestionData = (question, choices)=> {
        this.props.shareQuestionData(question, choices);
    }
    render() {
        return (
            <div className="container">
                <header className="row">
                    <h1>Questions</h1>
                </header>
                <Question questionsList={this.state.questions} getQuestionData={this.getQuestionData}/>
            </div>
        )
    }
}

export default QuestionsList;
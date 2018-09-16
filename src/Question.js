import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionDetails from './QuestionDetails';

class Question extends Component {
    state = {
        currentQuestion: '',
        choices: []
    };
    setQuestionData = (currentQuestion, choices) => {
        this.setState({
            currentQuestion,
            choices
        });
    }
    setQuestionData = this.setQuestionData.bind(this);
    
    render() {
        return (
            <div>
                <header className="row">
                    <h1>Questions</h1>
                </header>
                <div className="row align-items-start">
                    {this.props.questionsList.map((question, index) =>
                        <div className="col-6 col-md-4" key={index}>
                            <Link to="/question-details" onClick= { ()=> {this.setQuestionData(question.question,question.choices);}}>{ question.question }</Link>
                            <p>Published at: { question.published_at }</p>
                            <p>Choices: {question.choices.length} </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Question;
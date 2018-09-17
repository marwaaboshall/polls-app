import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Question extends Component {
    static propTypes = {
        question: PropTypes.object.isRequired,
        getQuestionData: PropTypes.func.isRequired
    };

    setQuestionData = (currentQuestion, choices) => {
        this.props.getQuestionData(currentQuestion, choices);
    }
    setQuestionData = this.setQuestionData.bind(this);

    render() {
        return(
            <div className="col-12 col-md-4 question">
                <Link
                    to="/question-details" 
                    onClick= { ()=> {this.setQuestionData(this.props.question.question,this.props.question.choices);}}>{ this.props.question.question }</Link>
                <p>{this.props.question.published_at.slice(0,10) +', '+this.props.question.published_at.slice(11,16)}</p>
                <p>Choices: {this.props.question.choices.length}</p>
            </div>
        )
    }
}

export default Question;
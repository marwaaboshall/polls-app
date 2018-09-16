import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className="row align-items-start">
                {this.props.questionsList.map((question, index) =>
                    <div className="col-6 col-md-4" key={index}>
                        <a href="/question-details">{ question.question }</a>
                        <p>Published at: { question.published_at }</p>
                        <p>Choices: {question.choices.length} </p>
                    </div>
                )}
            </div>
        )
    }
}

export default Question;
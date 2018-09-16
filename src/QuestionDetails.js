import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionDetails extends Component {
    render() {
        return (
            <div>
                <header className="row">
                    <h1>Question Details</h1>
                </header>
                <div className="row">
                    <div className="col">
                        <p>Question: {this.props.question}</p>
                        <p>Choice: </p>
                        <button>Save Vote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDetails;
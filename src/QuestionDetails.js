import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionDetails extends Component {
    state = {
        currentChoice: {}
    };
    setCurrentChoice = (currentChoice) => {
        this.setState({ currentChoice }, () => console.log(this.state.currentChoice));
    }
    setCurrentChoice = this.setCurrentChoice.bind(this);
    render() {
        return (
            <div>
                <header className="row">
                    <h1>Question Details</h1>
                </header>
                <div className="row">
                    <div className="col">
                        <p>Question: {this.props.question}</p>
                        <ul>
                            {this.props.choices.map((choice, index) => 
                                <li key={index} onClick={() => {this.setCurrentChoice(choice.choice);}}>{choice.choice}
                                <span>  votes: {choice.votes}</span></li>
                            )}
                        </ul>
                        <button>Save Vote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDetails;
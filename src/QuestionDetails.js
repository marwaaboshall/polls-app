import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionDetails extends Component {
    state = {
        currentChoice: {},
        currentChoiceURL: ''
    };
    setCurrentChoice = (currentChoice, currentChoiceURL) => {
        this.setState({ currentChoice, currentChoiceURL }, () => console.log(this.state.currentChoice, this.state.currentChoiceURL));
        console.log(`https://polls.apiblueprint.org/${currentChoiceURL}`);
    }
    
    saveVote = (currentChoiceURL) => {
        fetch(`https://polls.apiblueprint.org/${currentChoiceURL}`, {
            method: 'POST'
        }).then(res => res.json())
        .then(response => console.log('Voting Success'))
        .catch(error => console.log(`Error while posting vote to API: ${error}`));
    }

    setCurrentChoice = this.setCurrentChoice.bind(this);
    saveVote = this.saveVote.bind(this);

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
                                <li key={index} onClick={() => {this.setCurrentChoice(choice.choice, choice.url);}}>{choice.choice}
                                <span>  votes: {choice.votes}</span></li>
                            )}
                        </ul>
                        <button onClick={() => {this.saveVote(this.state.currentChoiceURL);}}>Save Vote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDetails;
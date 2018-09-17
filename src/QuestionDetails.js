import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class QuestionDetails extends Component {
    state = {
        currentChoice: {},
        currentChoiceURL: '',
        totalVotes: 0
    };
    static propTypes = {
        question: PropTypes.string.isRequired,
        choices: PropTypes.array.isRequired
    };

    componentDidMount() {
        let totalVotes = 0;
        this.props.choices.forEach(function(choice){
            totalVotes += choice.votes;
        });
        this.setState({totalVotes});
    }

    setCurrentChoice = (currentChoice, currentChoiceURL) => {
        this.setState({ currentChoice, currentChoiceURL });
    }
    
    saveVote = (currentChoiceURL) => {
        fetch(`https://polls.apiblueprint.org/${currentChoiceURL}`, {
            method: 'POST'
        })
        .then(res => res.json())
        .then(response => console.log('Voting Success'))
        .catch(error => console.log(`Error while posting vote to API: ${error}`));
    }

    setCurrentChoice = this.setCurrentChoice.bind(this);
    saveVote = this.saveVote.bind(this);

    render() {
        return (
            <div className="container">
                <header className="row">
                    <div className="col-12">
                        <h1>Question Details</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col question-details">
                        <p>Question: {this.props.question}</p>
                        <div className="list-group">
                            {this.props.choices.map((choice, index) => 
                                <a
                                  href="#"
                                  className="list-group-item list-group-item-action   align-items-center"
                                  key={index}
                                  onClick={() => {this.setCurrentChoice(choice.choice, choice.url);}}>{choice.choice}
                                  <span className=" d-flex justify-content-end">
                                    <span className="badge badge-primary badge-pill">votes: {choice.votes}</span>
                                    <span className="badge badge-primary badge-pill">{((parseFloat(choice.votes)/this.state.totalVotes).toFixed(1) * 100) + "%"}</span>
                                </span>
                                </a>
                            )}
                        </div>
                        <Link
                            className="btn btn-success"
                            to="/" 
                            onClick={() => {this.saveVote(this.state.currentChoiceURL);}}>Save Vote
                        </Link>
                        <Link
                            className="btn btn-danger"
                            to="/">Cancel
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDetails;
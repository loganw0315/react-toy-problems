import React, { Component } from 'react';

class EvenAndOdd extends Component {
    state = {    
        evenArray: [],    
        oddArray: [],    
        userInput: ''
    }

    handleChange = event => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleClick = (event, props) => {
        let userInput = this.state.userInput.split(',')
        let evens = userInput.filter(e => e%2===0)
        let odds = userInput.filter(e => e%2)
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render() {
        return (
        <div className='puzzleBox evenAndOddPB'>
            <h4 >Even and Odd</h4>
            <input name="userInput" type="text" className='inputLine' onChange={this.handleChange} placeholder='Enter numbers here'></input>
            <button className='confirmationButton' onClick={this.handleClick}>Confirm</button>
            <span className='resultsBox'>Evens: {this.state.evenArray.join(",")}</span>
            <span className='resultsBox'>Odds: {this.state.oddArray.join(",")}</span>
        </div>
        )

    }
}

export default EvenAndOdd;


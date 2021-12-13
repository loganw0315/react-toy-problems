import React, { Component } from 'react';

class Palindrome extends Component {
    state = {
        userInput: "",
        palindrome: ""
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleClick = (prop) => {
        let reverse = prop.split('').reverse().join('')
        console.log(reverse)
        if(prop === reverse){
            this.setState({
                palindrome: "true"
            })
        }else{
            this.setState({
                palindrome: "false"
            })
        }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Submit</button>
                <span className='resultsBox'>{this.state.palindrome}</span>
            </div>
            )
    }
}

export default Palindrome;

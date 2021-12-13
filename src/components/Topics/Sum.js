import React, { Component } from 'react';

class Sum extends Component {
    state = {
        number1: 0,
        number2: 0,
        sum: null
    }

    handleChange1 = (event) => {
       this.setState({
            number1: Number(event.target.value)
        })   
    }

    handleChange2 = (event) => {
        this.setState({
            number2: Number(event.target.value)
        })
    }

    handleClick = (prop1, prop2) => {
        this.setState({
            sum: prop1 + prop2  
        })
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={this.handleChange1}></input>
                <input className='inputLine' onChange={this.handleChange2}></input>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.number1,this.state.number2)}>Submit</button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
            )
    }
}

export default Sum;
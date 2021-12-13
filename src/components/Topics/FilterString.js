import React, { Component } from 'react';

class FilterString extends Component {
    state = {
        unFilteredArray:[`"Logan was at the park"`,`"Jim was on a lake"`,`"Harry was on a bus"`,`"Blake was on the toilet"`],
        userInput: "",
        filteredArray:[]
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    handleClick = (prop) => {
        let filteredArray = this.state.unFilteredArray.filter(e=>e.includes(prop))
        this.setState({
            filteredArray: filteredArray
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className='puzzleText'>{this.state.unFilteredArray.join(", ")}</span>
                <input className='inputLine' onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Submit</button>
                <span className='resultsBox filterStringRB'>{this.state.filteredArray.join(", ")}</span>
            </div>
            )
    }
}

export default FilterString;
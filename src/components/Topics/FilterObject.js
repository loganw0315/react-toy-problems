import React, { Component } from 'react';

class FilterObject extends Component {
    state = {
        unFilteredArray: [
            {
                "name": "Jane",
                "age": "20",
                "hair": "brown"
            },
            {
                "name": "Jim",
                "height": "5,4",
                "hair": "brown"
            },
            {
                "name": "Johnny",
                "age": "25",
                "fav color": "green"
            },
            {
                "name": "Joan",
                "age": "30",
                "hair": "blonde"
            },
        ],
        userInput: "",
        filteredArray: []
    }

    handleChange = event =>{
        this.setState({
            userInput: event.target.value
        })
    }

    handleClick = prop => {
        let filteredArray = this.state.unFilteredArray.filter(e=>e.hasOwnProperty(prop))
        this.setState({
            filteredArray: filteredArray
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{ JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={this.handleChange}></input>
                <button className='confirmationButton'onClick={() => this.handleClick(this.state.userInput)}>Submit</button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
            )
    }
}

export default FilterObject;
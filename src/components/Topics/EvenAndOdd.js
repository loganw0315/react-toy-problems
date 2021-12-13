import React, { Component } from 'react';

class EvenAndOdd extends Component {
    render() {
      return (
        <div>
            <h4 className='puzzleBox evenAndOddPB'></h4>
            <input className='inputLine'></input>
            <button className='confirmationButton'></button>
            <span className='resultsBox'></span>
            <span className='resultsBox'></span>
        </div>
        )

    }
}

export default EvenAndOdd;
import React, { Component } from 'react'
import reportWebVitals from '../reportWebVitals';

class Overview extends Component {
    constructor(props) {
        super(props);
    }



    render () {
        let rows = [];

        this.props.inputArr.map((inputElement) => {
            rows.push(
                <ListElement 
                  element={inputElement} key={inputElement} />
            );
        });

        return (
            <div className="Overview">
                <h3>I am a component from Overview.js!</h3>
                <form>
                    <input className='inputField'></input>
                    <p></p>
                    <button onClick={this.props.onButtonClick}>Submit</button>
                </form>
                <h4>{this.props.title}</h4>
                <div className="contentContainer">
                    {rows}
                </div>
            </div>
        )
    }
}

class ListElement extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <li className="inputListElement">{this.props.element}</li>
    }
}


export default Overview;
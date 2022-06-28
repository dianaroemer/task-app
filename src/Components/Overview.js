import React, { Component } from 'react'
import reportWebVitals from '../reportWebVitals';
// const keyIndex = require('react-key-index')
// import keyIndex from 'react-key-index'
// import Hashids from 'hashids';


class Overview extends Component {
    constructor(props) {
        super(props);
        // this.hashids = new Hashids();
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    handleUpdateInput(e) {
        this.props.updateInput(e.target.value);
    }

    render () {
        let rows = [];

        this.props.inputArr.map((inputElement) => {
            rows.push(
                <ListElement 
                  element={inputElement} key={inputElement} />
            );
        });

        // let keyedRows = [...this.props.inputArr];
        // keyedRows = keyIndex(keyedRows, 1);

        // const list = keyedRows.map((keyedRows) => {
            // <ListElement key={keyedRows.id}
            //    element={keyedRows.value} />
        // })

        return (
            <div className="Overview">
                <h3>I am a component from Overview.js!</h3>
                <form>
                    <input className='inputField'
                        onChange={this.handleUpdateInput}
                        value={this.props.inputText}></input>
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
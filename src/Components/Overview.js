import React, { Component } from 'react'
import reportWebVitals from '../reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


library.add(faCoffee, faTrash, faPenToSquare);



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
                  element={inputElement.text} key={inputElement.id} number={inputElement.number} />
            );
        });

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
    render () {
        const trash = <FontAwesomeIcon icon="fa-solid fa-trash" />;
        const edit = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        return <div className="inputListElement">
            {this.props.number}: {this.props.element} {trash} {edit}
        </div>
    }
}


export default Overview;
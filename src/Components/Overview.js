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
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleUpdateInput(e) {
        this.props.updateInput(e.target.value);
    }

    handleClickDelete(e) {
        console.log('I am handleClickDelete');
        console.log(e);
        // this.props.clickDelete();
    }

    render () {
        let rows = [];
        let number = 0;

        this.props.inputArr.map((inputElement) => {
            rows.push(
                <ListElement 
                  element={inputElement.text} 
                  key={inputElement.id} 
                  number={number}
                  clickDelete={this.props.clickDelete}
                  clickEdit={this.props.clickEdit}
                  inputreference={inputElement}/>
            );
            number++;
        });

        return (
            <div className="Overview">
                <h3>I am a component from Overview.js!</h3>
                <form>
                    <input className='inputField'
                        onChange={this.handleUpdateInput}
                        value={this.props.inputText}></input>
                    <p></p>
                    <button onClick={this.props.onButtonClick}>{this.props.isEdit? "Resubmit" : "Submit" }</button>
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
    constructor(props){
        super(props);
        // this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    // handleClickDelete(e) {
    //     // console.log('I am handleClickDelete');
    //     console.log(e);
    //     // console.log(target);
    //     console.log(e.target.value)
    //     // this.props.clickDelete();
    // }

    render () {
        // const trash = <FontAwesomeIcon icon="fa-solid fa-trash" />;
        const edit = <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        return <div className="inputListElement">
            {this.props.number} : {this.props.element} - 

            <FontAwesomeIcon icon={faTrash} onClick={(e) => this.props.clickDelete(e, this.props.inputreference)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faPenToSquare} onClick={(e) => this.props.clickEdit(e, this.props.inputreference)}></FontAwesomeIcon> 
        </div>
    }
}


export default Overview;
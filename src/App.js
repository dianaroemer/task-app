import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Overview from './Components/Overview'
import uniqid from 'uniqid'

class App extends Component {
  constructor(props) {
      super(props);

      this.onClickBtn = this.onClickBtn.bind(this);
      this.updateInput = this.updateInput.bind(this);

      this.state = {
        inputArr: [
          {text: 'test 1', id: uniqid()},
          {text: 'test 2', id: uniqid()},
        ],
        task: {
          id: uniqid(),
          text: '',
        }
        
      };
  }

  updateInput(newInputText) {
    this.setState({
      task: {
        text: newInputText,
        id: this.state.task.id,
      }
    })
  }

  onClickBtn(e) {
    e.preventDefault();
        
    if(this.state.task.text !== '') {
      console.log(this.state.task);
      this.setState({
        inputArr: this.state.inputArr.concat(this.state.task),
        task: {
          text: '',
          id: uniqid()
        },
      })
    }
  }

  render () {
    return (
        <div className="App">

          <h2>I am App.js, whats happening!</h2>
          <Overview title="Content Container" 
            onButtonClick={this.onClickBtn} 
            updateInput={this.updateInput}
            inputArr={this.state.inputArr}
            input={this.state.task.text}/>
            
        </div>
    );
  }
}

export default App;
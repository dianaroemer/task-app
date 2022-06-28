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
      this.deleteTask = this.deleteTask.bind(this);

      this.state = {
        inputArr: [
          {text: 'test 1', id: uniqid(), number: 0},
          {text: 'test 2', id: uniqid(), number: 1},
        ],
        task: {
          id: uniqid(),
          text: '',
          number: 3,
        }
        
      };
  }

  updateInput(newInputText) {
    this.setState({
      task: {
        text: newInputText,
        id: this.state.task.id,
        number: this.state.task.number,
      }
    })
  }

  onClickBtn(e) {
    e.preventDefault();
        
    if(this.state.task.text !== '') {
      this.setState({
        inputArr: this.state.inputArr.concat(this.state.task),
        task: {
          text: '',
          id: uniqid(),
          number: this.state.task.number + 1,
        },
      })
    }
  }

  deleteTask() {
    // this.setState({
      // inputArr:
    // })
  }

  render () {
    return (
        <div className="App">

          <h2>I am App.js, whats happening!</h2>
          <Overview title="Content Container" 
            onButtonClick={this.onClickBtn} 
            updateInput={this.updateInput}
            inputArr={this.state.inputArr}/>
            
        </div>
    );
  }
}

export default App;
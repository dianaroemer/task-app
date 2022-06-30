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
      this.clickDeleteTask = this.clickDeleteTask.bind(this);
      this.clickEditTask = this.clickEditTask.bind(this);

      this.state = {
        inputArr: [
          {text: 'test 1', id: uniqid(),},
          {text: 'test 2', id: uniqid(),},
        ],
        task: {
          id: uniqid(),
          text: '',
          // number: (2),
        }, 
        isEdit: false
        
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
      this.setState({
        inputArr: this.state.inputArr.concat(this.state.task),
        task: {
          text: '',
          id: uniqid(),
        },
        isEdit: false,
      })
    }
  }

  clickDeleteTask(e, target) {
    e.preventDefault();
    // console.log('You clicked a delete button');
    // console.log(e);
    // console.log(e.target.parentNode)
    // console.log(target);
    // console.log(this.state.inputArr)
    // console.log(this.state.inputArr.filter(toDelete => toDelete === target));

    this.setState({
      inputArr: this.state.inputArr.filter(toDelete => toDelete !== target),
    })
  }

  clickEditTask(e, target) {
    e.preventDefault();
    console.log('You clicked an edit button');
    console.log(target.text);

    console.log(this.state.task);

    this.setState({
      inputArr: this.state.inputArr.filter(toDelete => toDelete !== target),
      task: {
        text: target.text,
        id: target.id
      },
      isEdit: true
    })

    console.log(this.state.task)


  }

  render () {
    return (
        <div className="App">

          <h2>I am App.js, whats happening!</h2>
          <Overview title="Content Container" 
            onButtonClick={this.onClickBtn} 
            updateInput={this.updateInput}
            inputArr={this.state.inputArr}
            inputText={this.state.task.text}
            isEdit={this.state.isEdit}
            clickDelete={this.clickDeleteTask}
            clickEdit={this.clickEditTask}/>
            
        </div>
    );
  }
}

export default App;
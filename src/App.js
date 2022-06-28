import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Overview from './Components/Overview'

class App extends Component {
  constructor(props) {
      super(props);

      this.onClickBtn = this.onClickBtn.bind(this);
      this.pushToInputArr = this.pushToInputArr.bind(this);
      this.updateInput = this.updateInput.bind(this);

      this.state = {
        inputText: '',
        inputArr: ['test 1', 'test 2', 'test3'],
      };
  }

  pushToInputArr(content) {
    // let newArr = this.state.inputArr;
    // newArr.push(content);
    this.setState({
      inputArr: this.state.inputArr.concat(content),
    });
    console.log(this.state.inputArr)
  }

  updateInput(newInputText) {
    this.setState({
      inputText: newInputText,
    })
  }

  onClickBtn(e) {
    e.preventDefault();
    // console.log('Button has been clicked!');
    // console.log(e);
    // console.log(this.state.input);
    // console.log(e.target.form[0].value);
        
    if(this.state.inputText !=='') {
      this.pushToInputArr(this.state.inputText);
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
            input={this.state.inputText}/>
            
        </div>
    );
  }
}

export default App;
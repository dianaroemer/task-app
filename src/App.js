import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Overview from './Components/Overview'
// import keyIndex from 'react-key-index';

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
    let newArr = this.state.inputArr;
    newArr.push(content);
    this.setState({
      inputArr: newArr,
    });
    console.log(this.state.inputArr)
  }

  updateInput(newInputText) {
    this.setState({
      inputText: newInputText,
    })
    // console.log('Updating Input: ' + this.state.inputText);
    // console.log(this.state.inputText.target.value);
  }



  onClickBtn(e) {
    e.preventDefault();
    // console.log('Button has been clicked!');
    // console.log(e);
    // console.log(this.state.input);
    // console.log(e.target.form[0].value);
    /*
    if(e.target.form[0].value !== '') {
      this.pushToInputArr(e.target.form[0].value);
    } 
    */

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
            inputArr={this.state.inputArr}
            updateInput={this.updateInput}
            input={this.state.inputText}/>

        </div>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
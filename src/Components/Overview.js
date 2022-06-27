import React, { Component } from 'react'

class Overview extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="Overview">
                <h3>I am a component from Overview.js</h3>
                <input className='inputField'></input>
                <div></div>
                <button className="inputButton">Submit</button>
                <div className="inputContent">Content</div>

            </div>
        )
    }
}

export default Overview;
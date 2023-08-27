// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseMe = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.increaseMe}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter

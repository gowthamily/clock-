import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('componentDidMount call')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('calling render')
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock

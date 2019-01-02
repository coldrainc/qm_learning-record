import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Clock from './clock'

export default class ClockContainer extends Component {
  static propTypes = {
    time:PropTypes.object.isRequired
  }
  constructor(props){
      super(props)
    //   time setInterval
      this.state = {
          time:props.time
      }
  }

  componentDidMount = () => {
    this._interval = setInterval(this._update,1000)
  }
  
  _update = () =>{
    this.setState({
        time:new Date(this.state.time.getTime()+1000)
    })
  }

  _exact = (time) => {
      return{
          hours:time.getHours(),
          minutes:time.getMinutes(),
          seconds:time.getSeconds()
      }
  }
  render() {
    // const{hours,minutes,seconds} = this._exact(this.state.time)
    return (
      <div>
          <Clock {...this._exact(this.state.time )}></Clock>
      </div>
    )
  }
}
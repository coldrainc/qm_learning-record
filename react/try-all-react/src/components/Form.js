import React, { Component } from 'react';

class Form extends Component {
  constructor () {
    super();
    // 子组件, state
    this.initialState = {
      name: '',
      job: ''
    };
    this.state = this.initialState;
  }
  render () {
    const { name, job }= this.state;
    return (
      <form className="form-group">
        <div className="form-field">
          <label>Name</label>
          <input 
            className="form-control"  
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-field">
          <label>job</label>
          <input
          name="job"
          className="form-control"
          value={job}
          onChange={this.handleChange}
          type="text"/>
        </div>

        <div className="form-field">
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm}
            className="btn btn-primary"
          />
        </div>
      </form>
    );
  }
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState)
  }
  handleChange = event => {
    // 可以将一个标签解构 
    // event.target = <input class="form-control" type="text" name="name" value="">
    const {name , value } = event.target;
    console.log(event.target);
    // 当name是一个变量用 [] 来
    this.setState({
      [name]: value
    })
  }
}

export default Form;
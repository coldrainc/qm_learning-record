import React, { Component } from 'react';
import Input from '../presentational/Input'
class FormContainer extends Component {
  constructor () {
    super();
    this.state = {
      seo_title: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  render () { // 负责向外输出模板
    // wxml
    return (
      <form id="article-form">
        <Input 
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={ this.state.seo_title }
          handleChange={this.handleChange}
        />
        <div>{this.state.seo_title}</div>
      </form>
    );
  }
  // 等待子组件来交流
  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
}

export default FormContainer;
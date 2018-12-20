import React, { Component } from 'react';
import { Tag, Tooltip, Input, Icon, message  } from 'antd';

export default class DocumentType extends Component {
  state = {
    inputValue: '',
    inputVisible: false
  }
  componentWillMount () {
    this.setState({
      tags: this.props.tags
    })
  }
  input = React.createRef();
  render () {
    const { tags, selectedTags, plusBtnText, activeColor } = this.props;
    const { inputVisible, inputValue } = this.state;
    return (
      <div>
        {
          tags.map((tag,index) => {
            const isLongTag = tag.length > 10;
            const isSelected = selectedTags.indexOf(tag) !== -1;
            const tagElem = (
              <Tag
                key={index}
                color={isSelected?(activeColor?activeColor:'40a9ff'):''}
                closable={index !== 0}
                onClick={() => this.highlightTag(index)}
                onClose={() => this.handleClose(index)} // 移除或者修改某一个需要获取index
                >
                {isLongTag?`${tag.slice(0, 10)}...`:tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
              {tagElem}
              </Tooltip>
            ): (
              tagElem
            )
          })
        }
        {
          inputVisible && (
            <Input 
              ref={this.input}
              type="text"
              size="small"
              style={{width:78}}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
              />
          )
        }
        {
          !inputVisible && (
            <Tag onClick={this.showInput} style={{background:'#fff', borderStyle:'dashed'}}>
              <Icon type="plus" />
              { plusBtnText?plusBtnText:'New Tag' }
            </Tag>
          )
        }
      </div>
    )
  }
  handleClose = (index) => {
    this.props.onClose && this.props.onClose(index);
  }
  showInput = () => {
    this.setState({
      inputVisible: true
    }, () => {
      this.input.current.focus();
    });
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  highlightTag = (index) => {
    // console.log(index)
    if (this.props.onChange) {
      this.props.onChange(this.getTagValueFromIndex(index));
    }
  }
  getTagValueFromIndex = index => {
    const { tags } = this.state;
    return tags[index]
  }
  handleInputConfirm = () => {
    const { inputValue, tags: prevTags } = this.state;
    if (!inputValue) {
      message.error('不能为空');
      this.setState({
        inputVisible: false,
        inputValue: ''
      });
      return false;
    }
    this.setState({
      inputVisible: false,
      inputValue: ''
    })
    if(inputValue && prevTags.indexOf(inputValue) === -1) {
      message.error('已存在相同的tag');
      this.setState({
        inputValue: '',
      }, function() {
        this.input.current.focus();
      })
      // 由于setState是异步的， 需要马上获取input就需要这样写
      // this.input.focus()
      return false;
    }
    if (this.props.addTag) {
      this.props.addTag(inputValue);
    } 
  }
}

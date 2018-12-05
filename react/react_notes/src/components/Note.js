import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-CN');
// moment 格式化时间
// Note? 展示单条 笔记，  状态 
class Note extends Component {
  constructor (props) {
    super(props)
  }
  state = {
    entity: this.props.entity, 
    body: this.props.entity.body,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created, // 创建时的时间戳
    open: false
  }
  render () {

    const ts = moment(this.state.updated).fromNow() // 时间格式化
    return (
      <div className="item">
        {this.state.body} {ts}
      </div>
    );
  }
}
export default Note;

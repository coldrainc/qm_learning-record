import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.css'
import {add, del} from '../../actions/index'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    }
  } 
  saveNewTodo(e) {
    let { newTodo } = this.state;
    if(!e.detail.value || e.detail.value === newTodo) {
      return;
    }
    this.setState({
      newTodo: e.detail.value
    })
  }
  addTodo() {
    let { newTodo } = this.state;
    let { add } = this.props;
    if(!newTodo) return;
    add(newTodo);
    this.setState({
      newTodo: ''
    });
  }
  delTodo(id) {
    let { del } = this.props;
    del(id);
  }
  render () {
    let { newTodo } = this.state;
    const { todos } = this.props;
    console.log(todos);
    const todosJsx = todos.map((todo, index) => {
      return (
        <View className='todos_item' key={index}>
          <Text>{todo.text}</Text>
          <View className='del' onClick={this.delTodo.bind(this, todo.id)}>-</View>
        </View>
      )
    })
    return (
      <View className='index todos'>
        <View className='add_wrap'>
          <Input className='todos_item' value={newTodo} onBlur={this.saveNewTodo.bind(this)} />
          <View className='add' onClick={this.addTodo.bind(this)}>+</View>
        </View>
        <View>
          {todosJsx}
        </View>
      </View>
    )
  }
}
// context 两个参数state action
// connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Index)
// todos是reducer todos给的state
// connect可以联系上provider所以可以拿到store
// connect 的第二个参数才能拿到dispatch 进而修改数据
export default connect(({ todos }) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data));
  },
  del(id) {
    dispatch(del(id));
  }
}))(Index);
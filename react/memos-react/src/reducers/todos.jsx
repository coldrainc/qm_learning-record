import {
  AAD_TODO,
  DELETE_TODO,
  CHANGE_TODO_TO_DOING,
  CHANGE_DOING_TO_TODO,
  CHANGE_DOING_TO_DONE,
  CHANGE_DONE_TO_DOING,
  SEARCH,
} from '../actions';

let todos;

(() => {
  if(localStorage.todos) {
    todos = JSON.parse(localStorage.todos);
  } else {
    todos = [];
  }
})();


const todolist = (state = todos, action) => {
  switch(action.type) {
    case AAD_TODO: {
      return [
        ...state,{
          todo: action.text,
          istodo: false,
          done: false
        }
      ];
    }
    case CHANGE_TODO_TO_DOING: {
      localStorage.setItem('todos', JSON.stringify([
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          doing: true,
          done: false
        },
        ...state.slice(parseInt(action.index) + 1)
      ]));
      return [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          doing: true,
          done: false
        },
        ...state.slice(parseInt(action.index) + 1)
      ];
    }
    case CHANGE_DOING_TO_DONE: {
      localStorage.setItem('todos', JSON.stringify([
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          doing: false,
          done: true
        },
        ...state.slice(parseInt(action.index) + 1)
      ]));
      return [
        ...state.slice(0, action.index),
        {
          todo:state[action.index].todo,
          istod: false,
          doing: false,
          done: true
        },
        ...state.slice(parseInt(action.index) + 1)
      ];
    }

    case CHANGE_DONE_TO_DOING: {
      localStorage.setItem('todos', JSON.stringify([
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          doing: true,
          done: false
        },
        ...state.slice(parseInt(action.index) + 1)
      ]));
      return [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: false,
          doing: true,
          done: false
        },
        ...state.slice(parseInt(action.index) + 1)
      ];
    }
    case CHANGE_DOING_TO_TODO: {
      localStorage.setItem('todos', JSON.stringify([
        ...JSON.state.slice(0, action.index), {
          todo: state[action.index].todo,
          istodo: true,
          doing: false,
          done: false
        },
        ...state.slice(0, action.index),
      ]));
      return [
        ...state.slice(0, action.index),
        {
          todo: state[action.index].todo,
          istodo: true,
          doing: false,
          done: false
        },
        ...state.slice(parseInt(action.index) + 1)
      ];
    }

    case DELETE_TODO: {
      localStorage.setItem('todos', JSON.stringify([
        ...state.slice(0, action.index),
        ...state.slice(parseInt(action.index) + 1)
      ]));
      return [
        ...state.slice(0, action.index),
        ...state.slice(parseInt(action.index) + 1)
      ];
    }
    case SEARCH: {
      let text = action.text;
      let reg = eval("/" + text + "/gi");
      return state.filter(item => item.todo.match(reg));
    }
    default: 
    return state;
  }
}


export default todolist;
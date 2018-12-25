export const ADD_TODO = 'Add_Todo';
export const CHANGE_TODO_TO_DOING ='Change_Doing_To_Done';
export const CHANGE_DOING_TO_DONE = 'Change_Done_To_Doing';
export const CHANGE_DONE_TO_DOING = 'Change_Done_To_Doing';
export const CHANGE_DOING_TO_TODO = 'Change_Doing_To_Todo';
export const SEARCH = 'Search';
export const DELETE_TODO = 'Delete_Todo';


export const addTodo = (text) => {
  return (dispatch, getState) => {
    const state = getState();
    localStorage.setItem('todos',
      JSON.stringify([
        ...state.todolist, {
          todo: text,
          istodo: true,
          doing: false,
          done: false
        }
      ])
    );
    setTimeout(() => {
      dispatch({
        type: ADD_TODO,
        text,
      })
    }, 2);
  };
};


export function search(text) {
  return {
    type: SEARCH,
    text,
  };
}

export function changeTodoToDoing(index) {
  return {
    type: CHANGE_TODO_TO_DOING,
    index,
  }
}

export function changeDoneToDoing(index) {
  return {
    type: CHANGE_DONE_TO_DOING,
    index
  }
}

export function changeDoingToTodo(index) {
  return {
    type: CHANGE_DOING_TO_TODO,
    index
  }
}

export function changeDoingToDone(index) {
  return {
    type: CHANGE_DOING_TO_DONE,
    index
  }
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index
  }
}
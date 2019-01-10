import Immutable from 'immutable';// 不可变
import { REGISTER_USER } from '../actions/users'

const initialState = Immutable.fromJS({
  newUser: null,
  error: null,
  saveSuccess: false
})

function users(state=initialState, action) {
  switch(action.type) {
    case REGISTER_USER: {
      // immutable 重要
      return state.merge({
        'newUser': action.data,
        'saveSuccess': false,
        'error': null
      })
    }
    default: {
      return state
    }
  }
}

export default users;
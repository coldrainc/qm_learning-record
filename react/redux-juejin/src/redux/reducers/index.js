import { combineReducers } from 'redux'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  reducer: usersReducer
})

export default rootReducer;
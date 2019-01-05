import { combineReducers } from 'redux'
import counter from './reducers'

const rootReducer = combineReducers({
  counter
})

export default rootReducer;
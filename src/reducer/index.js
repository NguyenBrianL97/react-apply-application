import { combineReducers } from 'redux'
import empReducer from './employee'
import studReducer from './student'
import petReducer from './pet'

export default combineReducers({
  empReducer,
  studReducer,
  petReducer
})
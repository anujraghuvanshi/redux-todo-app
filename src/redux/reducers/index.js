import { combineReducers } from 'redux'
import todos from './todo'
import visibilityFilters from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilters
})

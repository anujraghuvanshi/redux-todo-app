import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import TodoList from './TodoList'
import { VisibilityFilters } from '../redux/actions'

const getVisibleTodos = (todos, filter) => {
    console.log(filter)

    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        default:
            throw new Error(`Unknow Filter: ${filter}`)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

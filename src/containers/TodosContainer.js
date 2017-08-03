import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodoList from '../components/TodoList'
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    TodoModel.all().then((res) => {
      this.setState({
        todos: res.todos
      })
    })
  }

  createTodo(newBody){
    console.log("PRINT MEEE");
    let newTodo = {
      body: newBody,
      completed: false
    }
    TodoModel.create(newTodo).then((res) => {
      console.log('created todo', res)
      let todos = this.state.todos
      todos.push(res)
      this.setState({todos})
    })
  }

  render(){

    return (
      <div className = 'TodosContainer'>
        <CreateTodoForm
          createTodo = {this.createTodo.bind(this)}/>
        <TodoList
          todos = {this.state.todos} />
      </div>
    )
  }
}

export default TodosContainer

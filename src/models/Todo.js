import $ from 'jquery-ajax'

class TodoModel {
  static all(){
    let request = $.ajax({
      url: "https://super-crud.herokuapp.com/todos",
      method: 'GET'
    })
    return request
  }

  static create(todo){
    let request = $.ajax({
      url: "https://super-crud.herokuapp.com/todos",
      method: 'POST',
      data: todo
    })
    return request;
  }

  static delete(todo){
    let request = $.ajax({
      url: `https://super-crud.herokuapp.com/todos/${todo._id}`,
      method: 'DELETE'
    })
    return request
  }

  static update(newTodoBody, id){
    let request = $.ajax({
      url: `https://super-crud.herokuapp.com/todos/${id}`,
      method: 'PUT',
      data: {body: newTodoBody}
    })
    return request
  }
}

export default TodoModel

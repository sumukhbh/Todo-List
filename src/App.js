import React from "react"
import TodoItem from "./TodoItem.js"

const todosData = [
  {
      id: 1,
      text: "Take out the trash",
      completed: true
  },
  {
      id: 2,
      text: "Grocery shopping",
      completed: false
  },
  {
      id: 3,
      text: "Clean gecko tank",
      completed: false
  },
  {
      id: 4,
      text: "Mow lawn",
      completed: true
  }
  
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
               return {
                 ...todo,
                 completed : !todo.completed
               }
            }
            return todo
            
        })
        return {
            todos: updatedTodos
        }
    })
}

  render(){
  const todoarr = this.state.todos.map(item => <TodoItem key= {item.id} item={item} handleChange={this.handleChange}/>)
  return (
    <div className="todo-list">
      {todoarr}
    </div>
  )
}
}

export default App
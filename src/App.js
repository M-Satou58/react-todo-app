import { useState } from 'react' 
import './App.css';
import { Header } from './Components/Header'
import { Todo } from './Components/Todo'
import { AddTodo } from './Components/AddTodo'
function App() {
  const [todoList, addTodoList] = useState([])
  const [addTodoToggle, setAddTodoToggle] = useState(true)

  const toggleAddTodo = () => {
    setAddTodoToggle(prev => !prev)
  }
  return (
    <div className="container">
      <Header toggleAddTodo={toggleAddTodo}/>

      <div className="todo-list-container">
        {todoList.map((todo, i) => {
          return <Todo 
                    key={i}
                    id={i}
                    todo={todo}
                    todoList={todoList}
                    addTodoList={addTodoList}
                  />
        })}
      </div>

      {addTodoToggle && <AddTodo toggleAddTodo={toggleAddTodo} addTodoList={addTodoList}/>}

    </div>
  );
}

export default App;

import { useRef } from 'react'
export const Todo = ({id, todo, todoList, addTodoList}) => {

  const checkboxRef = useRef()
  
  const toggle = () => {
    const arr = [...todoList]
    arr.splice(id, 1)

    if (checkboxRef.current.checked) {
            addTodoList([
        ...arr,
        {
          text: todo.text,
          dateCreated: todo.dateCreated,
          isDisabled: !todo.isDisabled,
        }
      ])
    }
    else{
      addTodoList([
        {
          text: todo.text,
          dateCreated: todo.dateCreated,
          isDisabled: !todo.isDisabled,
        },
        ...arr
      ])
    }
  }

  const deleteTodo = () => {
    const arr = [...todoList]
    arr.splice(id, 1)

    addTodoList([...arr])
  }

  return (
    <div className={`todo-container ${todo.isDisabled ? "disabled" : ""}`}>
      <div className="left">
         <input  
          className={`${todo.isDisabled ? "disabled" : ""}`}
          ref={checkboxRef} checked={todo.isDisabled} 
          onChange={toggle}
          type="checkbox"
          name="check" />
      </div>
      <div className="center">
        <p className={`${todo.isDisabled ? "disabled": ""}`}  >{todo.text}</p>
      </div>
      <div className="right">
        <span className={`${todo.isDisabled ? "disabled": ""}`}>{todo.dateCreated}</span>
        <img onClick={deleteTodo} src="https://img.icons8.com/ios-glyphs/30/D9D9D9/delete.png" alt="delete"/>
      </div>
    </div>
  )
}

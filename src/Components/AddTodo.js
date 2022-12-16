import { useState, useRef } from 'react'
export const AddTodo = ({toggleAddTodo, addTodoList}) => {
  const [text, setText] = useState('')
  const textRef = useRef()

  const getTime = () => {
    const checkTime = (i) => {
      return (i < 10) ? "0" + i: i
    }

    const date = new Date()
    const h = checkTime(date.getHours())
    const m = checkTime(date.getMinutes())

    return `${h}:${m}`
  }
  
  const addTodo = () => {

    if (text !== "") {
      addTodoList(prev => [
        {
          text: text,
          dateCreated: getTime(),
          isDisabled: false,
        },
        ...prev
      ])

      setText("")
      textRef.current.focus()

    }
    else {
      alert('Todo cannot be empty!')
    }
  }


  return (
    <div className="add-todo-container">
      <div className="modal">
        <div className="modal-header">
        <img onClick={toggleAddTodo}
          alt="delete"
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/delete-sign.png"/>
      </div>
        <div className="modal-body">
          <input ref={textRef}
                  onChange={(e) => setText(e.target.value)} 
                  value={text} type="text" />
          <div 
            onClick={addTodo}
            className="add-todo">
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/plus-math.png" 
              alt="add todo"/>
            <h2>ADD TODO</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

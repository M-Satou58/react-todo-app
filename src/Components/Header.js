import '../App.css'
export const Header = ({toggleAddTodo}) => {

  const options = {
   weekday: "long",
   month: "long",
   day: "numeric",
  }

  const date = new Date().toLocaleString('default', options)

  return (
    <div className="header">
      <div className="colorscheme">
        <img src="https://img.icons8.com/ios-glyphs/60/23538F/paint-palette--v1.png" alt="paint"/>
      </div>
      <div className="date">
        <h1><span>{date.split(',')[0]},</span> {date.split(',')[1]}</h1>
      </div> 
      <div className="add-todo">
        <img onClick={toggleAddTodo}
          src="https://img.icons8.com/ios-glyphs/60/null/23538F/plus-2-math.png" alt="add"/>
      </div>

    </div>
  )
}

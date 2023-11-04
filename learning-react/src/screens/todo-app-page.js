import React, {useState} from "react";

const ToDoScreen = () => {

  const [todoText, updateTodoText] = useState("");

  const handleInput = (event) => {
    updateTodoText(event.target.value);
  }

  const addTodoMessage = () => {
    alert(todoText);
  }

  return(
    <div>
      <h2>Todo App</h2>
      <div>
        <label>Enter your Todo Message : </label>
        <input type="text" placeholder="Todo Message..." onChange={handleInput} />
        <button onClick={() => addTodoMessage()} >Add</button>
      </div>
    </div>
  )
}

export default ToDoScreen;
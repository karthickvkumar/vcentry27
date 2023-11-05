import React, {useState} from "react";

const ToDoScreen = () => {

  const [todoText, updateTodoText] = useState("");
  const [messageList, updateMessageList] = useState([]);

  const handleInput = (event) => {
    updateTodoText(event.target.value);
  }

  const addTodoMessage = () => {
    //alert(todoText);
    // ES5
    // messageList.push(todoText);
    // updateMessageList(messageList);

    // ES6 -- ... -> Spread operator [...array_variable_name, value]
    updateMessageList([...messageList, todoText]);
    updateTodoText("");
  }

  const todoList = messageList.map((value, index) => {
    return(
        <li key={index}>{value}</li>
    )
  })

  return(
    <div>
      <h2>Todo App</h2>
      <div>
        <label>Enter your Todo Message : </label>
        <input type="text" value={todoText} placeholder="Todo Message..." onChange={handleInput} />
        <button onClick={() => addTodoMessage()} >Add</button>
        <ol>
          {todoList}
        </ol>
      </div>
    </div>
  )
}

export default ToDoScreen;
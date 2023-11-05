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

    // E6 -- ... -> Spread operator [...array_variable_name, value]
    updateMessageList([...messageList, todoText]);
  }

  const todoList = messageList.map((value, index) => {
    return(
      <h3 key={index}>{value}</h3>
    )
  })

  return(
    <div>
      <h2>Todo App</h2>
      <div>
        <label>Enter your Todo Message : </label>
        <input type="text" placeholder="Todo Message..." onChange={handleInput} />
        <button onClick={() => addTodoMessage()} >Add</button>
        {todoList}
      </div>
    </div>
  )
}

export default ToDoScreen;
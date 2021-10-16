import { useState } from "react"
import './App.css';
import Buttons from './Components/Button';
import Input from './Components/Input';
import TodosList from "./Components/TodosList";

function App() {
  const [value, setValue] = useState("")
  const [todos, setTotos] = useState<{ key: string, value: string }[]>([])

  const submitData = () => {
    setTotos((prev) => [...prev, { key: Math.floor(Math.random() * 100).toString(), value: value }])
    setValue("")
  }
  const deleteTodo = (id: string) => {
    let filteredTodo = todos.filter((item) => item.key !== id && item)
    setTotos(filteredTodo)
  }
  // const editTodo = (id: string) => {
  //   let filteredArray = todos.filter((items) => items.key === id ? items.value = value : items.value)
   
  // }
  return (
    <div className="App">
      <h2>Todo List</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Input value={value} handleChange={(event) => setValue(event.target.value)} placeholder="Title" />
        <Buttons text="Submit" handleSubmit={submitData} /></div>
      <TodosList todosList={todos} handleDelete={deleteTodo} 
      // handleUpdate={editTodo}
       />
    </div>
  );
}

export default App;

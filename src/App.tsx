import { useState, useEffect } from "react"
import './App.css';
import Buttons from './Components/Button';
import Input from './Components/Input';
import TodosList from "./Components/TodosList";

function App() {
  const [value, setValue] = useState("")
  const [todos, setTotos] = useState<{ key: string, value: string }[]>([])
  const [isEdit, setEdit] = useState(false)
  const submitData = () => {
    setTotos((prev) => [...prev, { key: Math.floor(Math.random() * 100).toString(), value: value }])
    setValue("")
    // let obj = [...todos, { key: Math.floor(Math.random() * 100).toString(), value: value }]
    // localStorage.setItem("todos", JSON.stringify(obj))
  }
  const deleteTodo = (id: string) => {
    let filteredTodo = todos.filter((item) => item.key !== id && item)
    setTotos(filteredTodo)
  }
  const editTodo = (item: {}) => {
    // console.log(item)
    setEdit(true)
    // setID(item?.key)
  }
  const updateTodo = (value: { key: string, value: string }) => {
    let filteredArray = todos.filter((items) => items?.key !== value?.key && items)
    // let obj = filteredArray = value;
    // setTotos((prev)=>[...prev,{key:filteredArray.keys,value:filteredArray.values}])
  }
  // useEffect(() => {
  //   const data = localStorage.getItem("todos")
  //   setTotos(data?.map((item)=>))
  // }, [])
  return (
    <div className="App">
      <h2>Todo List</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Input value={value} handleChange={(event) => setValue(event.target.value)} placeholder="Title" />
        <Buttons text="Submit" handleSubmit={submitData} /></div>
      <TodosList todosList={todos} handleDelete={deleteTodo} editTodo={editTodo} isEdit={isEdit}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from "./module"
const App:React.FC = ()=> {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
    }
  }

  console.log(todo)
  return (
    <div className="App">
      <span className="heading">TaskDialy</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;

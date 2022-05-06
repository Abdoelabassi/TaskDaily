import React from 'react'
import "./styles.css"

interface props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField = ({ todo, setTodo, handleAdd }:props)=> {
  return (
    <form className='input' onSubmit={handleAdd}>
        <input
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
         type="text" 
         placeholder='enter a task' 
         className='input__box' ></input>
        <button className="input__submit" type='submit'>Add</button>

    </form>
  )
}

export default InputField
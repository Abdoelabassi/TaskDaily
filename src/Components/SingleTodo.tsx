import React from 'react'
import { Todo } from "../module"
import "./styles.css"
import { AiFillEdit, AiFillDelete} from "react-icons/ai"
import { MdDone } from "react-icons/md"

type Props ={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const handleDone = (id:number)=>{
        setTodos(todos.map((todo)=>(
            todo.id === id ? {...todo, isDone:true} : todo
        )))

    }

    const handleDelete = (id:number)=>{
        setTodos(todos.filter((todo)=>(
            todo.id !== id
        )))
    }


  return (
    <div className='todos__single'>
        {
            todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>

            ):(
                <span className="todos__single--text">{todo.todo}</span>
            )

            }

        <div>
            <span className="icon">
                <AiFillEdit/>
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
      
    </div>
  )
}

export default SingleTodo

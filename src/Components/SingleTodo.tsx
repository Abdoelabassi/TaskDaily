import React, { useState, useRef, useEffect } from 'react'
import { Todo } from "../module"
import "./styles.css"
import { AiFillEdit, AiFillDelete} from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { Draggable } from 'react-beautiful-dnd'

type Props ={
    index:number,
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{

        inputRef.current?.focus();

    },[edit])



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

    const handleEdit = (e:React.FormEvent, id:number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>(
            todo.id === id ? {...todo, todo:editTodo}: todo
        )));

        setEdit(false);
    }


  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided)=>(
            <form className='todos__single'
             onSubmit={(e)=>handleEdit(e, todo.id)}
             ref={provided.innerRef}
             {...provided.dragHandleProps}
             {...provided.draggableProps} >
            { edit ? (
                <input ref={inputRef} value={editTodo} className="todos__single--text" onChange={(e)=>setEditTodo(e.target.value)} ></input>
    
            ):todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
    
                ):(
                    <span className="todos__single--text">{todo.todo}</span>
                )
    
                }
    
            <div>
                <span className="icon" onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }}}>
                    <AiFillEdit/>
                </span>
                <span className="icon" onClick={()=>handleDelete(todo.id)}>
                    <AiFillDelete/>
                </span>
                <span className="icon" onClick={()=>handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
          
        </form>

        )}



    </Draggable>
    
  )
}

export default SingleTodo

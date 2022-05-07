import React from 'react'
import { Todo } from "../module"
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd'
import "./styles.css"



interface Props{
    todos:Todo[],
    completeTodo:Todo[],
    setCompleteTodo:React.Dispatch<React.SetStateAction<Todo[]>>,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos, completeTodo, setCompleteTodo }:Props)=> {
  return (
    <div className='container'>
        <Droppable droppableId="TodosList">
            {(provided, snapshot)=>(

            <div className={`todos ${snapshot.isDraggingOver ? "dragactive": ""}`}  
            ref={provided.innerRef} 
            {...provided.droppableProps} >
                <span className="todos__heading">
                Active Tasks
                </span>
        {
            todos?.map((todo, index)=>(
                <SingleTodo index={index}
                 todo={todo}
                  key={todo.id} 
                  todos={todos} 
                  setTodos={setTodos} />
            ))}
            {provided.placeholder}
            </div>
   
            )}
       
        </Droppable>
        <Droppable droppableId="TodosRemove">
            {(provided, snapshot)=>(
                <div className={`todos  ${snapshot.isDraggingOver ? "dragcomplete": "remove"}`}
                 ref={provided.innerRef} 
                 {...provided.droppableProps}>
                <span className="todos__heading">
                    Completed Tasks
                </span>
                {
            completeTodo?.map((todo, index)=>(
                <SingleTodo 
                 index={index}
                 todo={todo} 
                 key={todo.id}
                 todos={completeTodo}
                 setTodos={setCompleteTodo} />
            ))}
            {provided.placeholder}
        </div>
                
            )}
        </Droppable>
        
        

        </div>
       

      
    
  )
}

export default TodoList

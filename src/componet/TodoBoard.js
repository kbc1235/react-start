import React from 'react';
import TodoItem from './TodoItem';


const TodoBoard = (props) =>{
    return(
      <div>
        <h1>Todo List</h1>
        {props.todoList.map((itme)=><TodoItem item={itme}/>)}
      </div>  
    )
}

export default TodoBoard;
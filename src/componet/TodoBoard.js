import React from 'react';
import TodoItem from './TodoItem';


const TodoBoard = (props) =>{
    return(
      <div>
        <h1>Todo List</h1>
        {props.todoList.map((itme,index)=><TodoItem item={itme} key={index}/>)}
      </div>  
    )
}

export default TodoBoard;
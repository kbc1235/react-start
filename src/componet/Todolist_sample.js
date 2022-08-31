import React, {useState} from 'react';
import Styles from '../style/Style.module.css';
import TodoBoard from './TodoBoard';

const Todolist_sample = ()=>{
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addItem = () =>{
        console.log(inputValue)
        setTodoList([...todoList, inputValue]);
    }
    return(
        <div>
            <div className={Styles.inputBox}>
                <input type="text" value={inputValue} onChange={ (e)=>{setInputValue(e.target.value)} }/>
                <button type="button" onClick={addItem}>추가</button>
            </div>
            <TodoBoard todoList={todoList}/>
        </div>
        
    )
}

export default Todolist_sample;
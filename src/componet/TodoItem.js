import React from 'react';
import Styles from '../style/Style.module.css';

const TodoItem = (props) =>{
    return(
        <div className={Styles.item}>
            {props.item}
        </div>
    )
}

export default TodoItem
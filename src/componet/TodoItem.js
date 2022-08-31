import React from 'react';
import Styles from '../style/Style.module.css';

const TodoItem = (props) =>{
    return(
        <div className={Styles.item}>
            <div>{props.item}</div>
            <div class={Styles.btnBox}>
                <button type="button">삭제</button>
            </div>
        </div>
    )
}

export default TodoItem
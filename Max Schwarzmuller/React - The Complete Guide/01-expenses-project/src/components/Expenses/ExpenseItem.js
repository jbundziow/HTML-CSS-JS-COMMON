import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem (props) {
    const [title, newTitle] = useState(props.title);

    const clickHandler = (e) => {
        newTitle('This is a new updated title.')
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    )
    ;
}

export default ExpenseItem;
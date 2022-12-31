import React from "react";
import './ExpensesList.css';
import RenderExpenses from "./RenderExpenses";
import ExpenseItem from "./ExpenseItem";



const ExpensesList = (props) => {
    

    if (props.items.length === 0) {
    return (<p className='expenses-list__fallback'>No expenses found in this year.</p>);
    }

   return (
    <ul className="expenses-list">
    {props.items.map(ex => (<ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date}/>))}
    </ul>
    );
    



}


export default ExpensesList;
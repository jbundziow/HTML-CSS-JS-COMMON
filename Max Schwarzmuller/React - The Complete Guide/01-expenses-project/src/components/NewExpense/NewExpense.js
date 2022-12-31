import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const isEditingHandler = (state) => {
        setIsEditing(state)
    }
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };

        props.onAddExpense(expenseData);
    }
    
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={() => {isEditingHandler(true)}}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClose={() => {isEditingHandler(false)}}/>}
        </div>
    );
}

export default NewExpense;
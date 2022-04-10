import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    const formButton =
        <div className="new-expense__actions center">
            <button type="button" onClick={startEditingHandler}>Add new expense</button>
        </div>
    ;

    return (
        <div className="new-expense">
            {!isEditing && formButton}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;
import React from 'react';
import NewExpenseForm from './NewExpenseForm';

import './NewExpense.css';

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData =  {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("Hello from NewExpense Component: ", expenseData);
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;
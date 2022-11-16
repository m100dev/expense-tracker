import React from 'react';
import NewExpenseForm from './NewExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData =  {
            id: 'e' + Math.round(Math.random() * 1000).toString(),
            ...enteredExpenseData,
            date: new Date(enteredExpenseData.date) 
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;
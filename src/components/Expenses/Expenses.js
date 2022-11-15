import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <Card className='expenses'>{
            expenses.map( expense => {
                return (
                    <ExpenseItem
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}
                    />
                )
            })  
        }</Card>
    )
}
          
export default Expenses;


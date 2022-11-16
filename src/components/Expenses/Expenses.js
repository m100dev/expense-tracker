import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function Expenses(props) {
    const expenses = props.expenses;

    //We'll use the filteredYear state to conditionally render Expense item components that match the selected year.
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(expenseItem => {
        return expenseItem.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
            {filteredExpenses.length === 0 && <p>There were no expenses found for this year. Please add an expense.</p>}
            
            { // using a shorthand way of writing a condtional statement
            filteredExpenses.length > 0 && 
                filteredExpenses.map( expenseItem => {
                    return (
                        <ExpenseItem
                            key = {expenseItem.id}
                            title = {expenseItem.title}
                            amount = {expenseItem.amount}
                            date = {expenseItem.date}
                        />
                    );
                })
            }
        </Card>
    );
};
          
export default Expenses;


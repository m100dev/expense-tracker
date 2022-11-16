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
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
            expenses.map( expenseItem => {
                if(expenseItem.date.getFullYear().toString() === filteredYear) {
                    return (
                        <ExpenseItem
                            key = {expenseItem.id}
                            title = {expenseItem.title}
                            amount = {expenseItem.amount}
                            date = {expenseItem.date}
                        />
                    );
                } 
            })  
        }</Card>
    );
};
          
export default Expenses;


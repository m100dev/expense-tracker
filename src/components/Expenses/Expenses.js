import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

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
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList items = {filteredExpenses} />
        </Card>
    );
};
          
export default Expenses;


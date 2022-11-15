import React from 'react';

import './ExpenseDate.css';

// Created an expense date component that contains the date logic for the expense item
function ExpenseDate(props) {

    //Created constants that contain each portion of the dates formatted so it can be human readable
    const month = props.date.toLocaleString('en-US', { month: 'long'});
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
};

export default ExpenseDate;
import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = () => {

    //const [enteredTitle, setEnteredTitle] = useState('');
    //const [enteredAmount, setEnteredAmount] = useState('');
    //const [enteredDate, setEnteredDate] = useState('');

    /* Instead of having all 3 pieces of state added separately,
       you can also manage state together as shown below. */

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        //console.log("My title is being listened to");
        //console.log(e.target.value);
        //setEnteredTitle(event.target.value) not needed since we are managing state together

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);

        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    };
    
    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);

        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput);
        
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };

    //We use two way binding to clear the inputs after a submit by updating the input value

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2020-01-01' step='2022-12-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;
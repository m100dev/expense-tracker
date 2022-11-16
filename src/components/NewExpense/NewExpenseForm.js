import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    // This will be used to dynamically render the form when the user first clicks on add expense
    const[showExpenseForm, setShowExpenseForm] = useState(false);

    const addNewExpenseHandler = () => {
        setShowExpenseForm((prevShowExpenseState) => !prevShowExpenseState);
    }

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
        
        //store user input data as an expenseData constant
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: userInput.enteredDate
        };

        //we're calling this function that we passed down from the parent to lift up the state.
        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };

    let ExpenseFormContent = (
        <div className='new-expense__actions' style={{textAlign: 'center'}}>
            <button onClick={addNewExpenseHandler}>Add a New Expense</button>
        </div>
    );

    if(showExpenseForm === true) {
        ExpenseFormContent = (
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
                    <button type='button' onClick={addNewExpenseHandler}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        );
    };

    return ExpenseFormContent;
};

export default NewExpenseForm;
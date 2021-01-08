import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)
    
    //using map to get all the amounts
    const amounts = transactions.map(transaction=>transaction.amount);
    
    // using filter to get only income (array) and using reduce to get a single value by adding all the values in the array received after using filter
    const income = amounts.filter(item=> item>0).reduce((accumulator, item)=>(accumulator += item),0).toFixed(2)
    
    const expense = amounts.filter(item=> item<0).reduce((accumulator, item)=>(accumulator += item),0).toFixed(2)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">PKR {income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">PKR {expense}</p>
            </div>
        </div>
    )
}

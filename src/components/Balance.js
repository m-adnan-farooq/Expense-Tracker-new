import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    
    const amounts = transactions.map(transaction=>transaction.amount)
    const total = amounts.reduce((accumulator, amount)=> (accumulator += amount),0).toFixed(2)
    return (
        <>
            <h4>Balance</h4>
            <h1>PKR {total}</h1>
        </>
    )
}

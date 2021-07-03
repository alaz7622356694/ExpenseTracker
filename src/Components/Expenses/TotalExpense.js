import React from 'react'
import './TotalExpense.css'
import Expenses from './Expenses'
const TotalExpense = (props) => {
    return (
        <div className='expense-total'>
            <label><h2>Total Amount</h2></label>
            <div className='expense-total-amount'> ${props.total}</div>
        </div>
    )
}

export default TotalExpense

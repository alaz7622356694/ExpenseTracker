import React from 'react'
import './TotalExpense.css'
const TotalExpense = (props) => {
    
    return (
        <div className='expense-total'>
            <label><h4>Total Amount Spent in <em>{props.month}</em></h4></label>
          
            <div className='expense-total-amount'> ${props.total}</div>

            <label><h4>Total Amount Spent in <em>{props.year}</em></h4></label>
            <div className='expense-total-amount'> ${props.yTotal}</div>

            
        </div>
    )
}

export default TotalExpense

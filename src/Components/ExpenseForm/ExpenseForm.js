import React,{useState} from 'react'
import "./ExpenseForm.css"
const ExpenseForm = () => {

  const [enteredTitle ,setEnteredTitle]=useState('')
  const [enteredNumber ,setEnteredNumber]=useState('')
  const [enteredDate ,setEnteredDate]=useState('')

const titleChangeHandler=(event)=>{setEnteredTitle(event.target.value)}
const numberChangeHandler=(event)=>{setEnteredNumber(event.target.value)}
const dateChangeHandler=(event)=>{setEnteredDate(event.target.value)}
    return (
        <form>
           <div className='new-expense__controls'>
               
                  <div className='new-expense__control'>
                  <label> Title</label>
                  <input type="text" onChange={titleChangeHandler}/> 
                  </div>

                  <div className='new-expense__control'>    
                  <label> Amount </label>
                  <input type="number" min="0.01" max="9999" step="0.1" onChange={numberChangeHandler} />
                  </div>

                  <div className="new-expense__control">   
                  <label> Date </label>
                  <input type="date" min="2019-01-01" max="2022-01-01"  onChange={dateChangeHandler} />
                  </div>
               
         </div> 

         <div className="new-expense__actions ">
                 <button type="submit"> Add Expense </button> 
         </div>
        </form>
    )
}

export default ExpenseForm

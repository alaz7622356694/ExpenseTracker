import React,{useState} from 'react'
import "./ExpenseForm.css"
const ExpenseForm = (props) => {

  const [enteredTitle ,setEnteredTitle]=useState('')
  const [enteredNumber ,setEnteredNumber]=useState('')
  const [enteredDate ,setEnteredDate]=useState('')
  const [error,setError]=useState(true)

  

const titleChangeHandler=(event)=> setEnteredTitle(event.target.value)
const numberChangeHandler=(event)=>setEnteredNumber(event.target.value)
const dateChangeHandler=(event)=>setEnteredDate(event.target.value)



const submitHandler=(event)=>{
event.preventDefault()

if (enteredTitle.trim().length === 0){
    setError(false)
    return 
}
const expenseData={
    title:enteredTitle,
    amount:+enteredNumber,
    date:new Date(enteredDate)
}

props.onSaveExpenseData(expenseData)




setEnteredTitle('')
setEnteredNumber('')
setEnteredDate('')



}
    return (
      
        <form onSubmit={submitHandler}>
             
    <div className='new-expense__controls'>

                  <div className={`new-expense__control ${!error ? 'inValid' : '' }`}>
                  <label> Title</label>
                  <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/> 
                  </div>

                  <div className='new-expense__control'>    
                  <label> Amount </label>
                  <input type="number" min="0.1" max="9999" step="0.1"  value={enteredNumber} onChange={numberChangeHandler} />
                  </div>

                  <div className="new-expense__control">   
                  <label> Date </label>
                  <input type="date" min="2020-01-01" max="2021-12-30"  value={enteredDate} onChange={dateChangeHandler} />
                  </div>
               
         </div> 

         <div className="new-expense__actions ">
                 <button type="submit"> Add Expense </button> 
                 <button type="button" onClick={props.onCancel}> Cancel </button> 
         </div>

        </form>
        
    )
}

export default ExpenseForm

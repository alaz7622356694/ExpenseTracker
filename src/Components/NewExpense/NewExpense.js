import React,{useState} from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import "./NewExpense.css"
const NewExpense = (props) => {

const saveExpenseDataHandler=(enteredData)=>{
    const expenseData={
        ...enteredData,
        id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
}


const [show, setShow]=useState(false)


const addExpenseHandler=()=> setShow(true)
const cancelButton=()=> setShow(false)
    return (
      
        <div className="new-expense">
        {!show ? <button onClick={addExpenseHandler}> Add Expense Item</button>:<div className="new-expense"> <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButton}></ExpenseForm> </div>}
        </div> 
    
    )
}

export default NewExpense

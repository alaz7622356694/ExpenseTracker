import React , {useState} from 'react'
import './ExpenseItems.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../UI/Card/Card'
const ExpenseItems=(props)=> {

//we declare a new state variable by calling the useState Hook.
const[title,setTitle]=useState(props.title)

const clickHandler=()=>{
    
setTitle('updated title')
}

    return (
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">

          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>

            </div>

            <button onClick={clickHandler} >Change Title</button>
            
        </Card>
    )
}

export default ExpenseItems

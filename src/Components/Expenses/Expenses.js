import { expenses } from "./ExpensesSource";
import ExpenseItems from "../ExpenseItems/ExpenseItems"
import './Expenses.css'
import Card from "../UI/Card/Card"
import React,{useState} from 'react'
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
const [filteredYear,setFilteredYear]=useState('2020')
    const filterChangeHandler=(selectedYear)=>{
     
setFilteredYear(selectedYear)

}    


// const[selectedYear,setSelectedYear]=useState(props.value)
 
  
    return (
       
        <Card className="expenses" >
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
     <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
     <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItems>
     <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
        </Card>

     
    )
}

export default Expenses

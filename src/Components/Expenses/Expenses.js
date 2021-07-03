
import ExpenseItems from "../ExpenseItems/ExpenseItems"
import './Expenses.css'
import Card from "../UI/Card/Card"
import React,{useState} from 'react'
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import TotalExpense from "./TotalExpense";

const Expenses = (props) => {
const [filteredYear,setFilteredYear]=useState('2020')

    const filterChangeHandler=(selectedYear)=>{

setFilteredYear(selectedYear)

        }
//filtering year 
const filter=props.items.filter(item=>{return item.date.getFullYear().toString()===filteredYear })

const TotalAmount=filter.reduce((a,i)=> a=a+i.amount , 0)


console.log(TotalAmount)
    return (
       
        <Card className="expenses" >
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     
            <ExpensesChart expenses={filter}/>
        {filter.length===0 ? <p>No expenses found</p> : 
        
        
        filter.map(item=>
           <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItems> ) }
                
        
       
    <TotalExpense total={TotalAmount}/>
                
            

        </Card>
    )

}

export default Expenses

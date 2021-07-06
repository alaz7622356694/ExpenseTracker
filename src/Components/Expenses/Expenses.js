
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

        const [filteredMonth,setFilteredMonth]=useState('January')

    const filterChangeHandler2=(selectedMonth)=>{

setFilteredMonth(selectedMonth)

        }

//filtering year 
const filter=props.items.filter(item=> {return(item.date.getFullYear().toString()===filteredYear && item.date.toLocaleString('en-US',{month:'long'})===filteredMonth)})
const filterYearOnly=props.items.filter(item=> {return(item.date.getFullYear().toString()===filteredYear)})
        
//calculating total amount per month based on filter
//Rounding number 
const TotalAmount=Math.round(filter.reduce((a,i)=> a=a+i.amount , 0)*100)/100

    return (
       
        <Card className="expenses" >
            <ExpensesFilter selected={filteredYear} selected2={filteredMonth} onChangeFilter={filterChangeHandler} onChangeFilter2={filterChangeHandler2}/>
     
            <ExpensesChart expenses={filterYearOnly}/>
        {filter.length===0 ? <p>No expenses found</p> : 
        
        
        filter.map(item=>
           <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItems> ) }
                
        
       
    <TotalExpense total={TotalAmount}/>
                
            

        </Card>
    )

}

export default Expenses

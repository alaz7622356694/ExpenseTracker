
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
//filtering year 
const filter=props.items.filter(item=>{return item.date.getFullYear().toString()===filteredYear })
  
    return (
       
        <Card className="expenses" >
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
       
        {filter.length===0 ? <p>No expenses found</p> : 
        
        
        filter.map(item=>
           <ExpenseItems key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItems> ) }
                
        
       
    
                
            
        

        </Card>
    )

}

export default Expenses

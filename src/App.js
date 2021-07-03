import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import { expenses } from "./Components/Expenses/ExpensesSource";
import NewExpense from "./Components/NewExpense/NewExpense";



const dummy=[...expenses]
function App() {
  
  const [expenses,setExpenses]=useState(dummy)
  const addExpenseHandler=newExpense=>{
 setExpenses([newExpense,...expenses])
  
  }

  return (
    <div>
    
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     
    <Expenses items={expenses}></Expenses>
    
    </div>
  );
}

export default App;

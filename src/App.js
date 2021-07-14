import React,{useState,useEffect} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


function App() {
  const [expenses,setExpenses]=useState([])
  
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetch ('https://expenseapp-e675d-default-rtdb.firebaseio.com/products.json')
      const responseData=await response.json()
      const data=[]
      for(const key in responseData){
        data.push({
          id:key,
          title:responseData[key].title,
          amount:responseData[key].amount,
          date:new Date(responseData[key].date)
      
        })
      }
     
    
    setExpenses(data) 
    }
    fetchData()
    
  }) 

  
const addExpenseHandler=(data)=>{
  setExpenses([data,...expenses])
}
 
  



  return (
    <div>
   
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     
    <Expenses items={expenses}></Expenses>
    
    </div>
  );
}

export default App;

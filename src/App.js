import Expenses from "./Components/Expenses/Expenses";

import NewExpense from "./Components/NewExpense/NewExpense";
function App() {

  const addExpenseHandler=expense=>{
 
    console.log("data is here")
    console.log(expense)
  }
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    <Expenses></Expenses>
    
    </div>
  );
}

export default App;

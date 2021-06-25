import ExpenseItems from "./Components/ExpenseItems/ExpenseItems";
import { expenses } from "./Expenses";
function App() {
  return (
    <div>
     <h2> Let's get started</h2>
     <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
     <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItems>
     <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
    
    </div>
  );
}

export default App;

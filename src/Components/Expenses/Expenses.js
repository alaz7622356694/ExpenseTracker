import { expenses } from "./ExpensesSource";
import ExpenseItems from "../ExpenseItems/ExpenseItems"
import './Expenses.css'
import Card from "../UI/Card/Card"
import React from 'react'

const Expenses = () => {
    return (
        <Card className="expenses" >
     <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
     <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItems>
     <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
        </Card>
    )
}

export default Expenses

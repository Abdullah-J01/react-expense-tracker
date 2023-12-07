import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 11000,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 50000,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Installment",
    amount: 22000,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Mobile",
    amount: 30000,
    date: new Date(2020, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    // setExpenses([expenseData, ...expenses]); // THIS IS NOT THE IDEAL WAY

    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

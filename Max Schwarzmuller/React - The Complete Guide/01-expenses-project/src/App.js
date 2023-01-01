import { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import RenderExpenses from "./components/Expenses/RenderExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: '0',
    title: 'Car Insurance',
    amount: 74.21,
    date: new Date(2022, 7, 12)
  },
  {
    id: '1',
    title: 'Clothes',
    amount: 100.00,
    date: new Date(2021, 2, 22)
  },
  {
    id: '2',
    title: 'Christmas gifts',
    amount: 12.99,
    date: new Date(2022, 11, 24)
  },
  {
    id: '3',
    title: 'New PC',
    amount: 2999.99,
    date: new Date(2019, 0, 1)
  },
  {
    id: '4',
    title: 'Macbook Air M1',
    amount: 999.99,
    date: new Date(2023, 2, 14)
  }
]

function App() {

const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <h1>Expenses app - React course</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <RenderExpenses data={expenses}/>

    </div>
  );
}

export default App;

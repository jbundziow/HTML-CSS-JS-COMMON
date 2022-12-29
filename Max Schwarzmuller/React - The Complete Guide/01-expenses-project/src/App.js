import RenderExpenses from "./components/Expenses/RenderExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expensesArr = [
    {
      id: '0',
      title: 'Car Insurance',
      amount: '74.21',
      date: new Date(2020, 7, 12)
    },
    {
      id: '1',
      title: 'Clothes',
      amount: '100.00',
      date: new Date(2021, 2, 22)
    },
    {
      id: '2',
      title: 'Christmas gifts',
      amount: '12.99',
      date: new Date(2024, 11, 24)
    },
    {
      id: '3',
      title: 'New PC',
      amount: '2999.99',
      date: new Date(2025, 0, 1)
    },
  ]

  const addExpenseHandler = (expense) => {
    console.log('in app.js:');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <RenderExpenses data={expensesArr}/>

    </div>
  );
}

export default App;

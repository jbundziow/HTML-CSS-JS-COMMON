import ExpenseItem from "./components/ExpenseItem";

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



  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem title={expensesArr[0].title} amount={expensesArr[0].amount} date={expensesArr[0].date}></ExpenseItem>
      <ExpenseItem title={expensesArr[1].title} amount={expensesArr[1].amount} date={expensesArr[1].date}></ExpenseItem>
      <ExpenseItem title={expensesArr[2].title} amount={expensesArr[2].amount} date={expensesArr[2].date}></ExpenseItem>
      <ExpenseItem title={expensesArr[3].title} amount={expensesArr[3].amount} date={expensesArr[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

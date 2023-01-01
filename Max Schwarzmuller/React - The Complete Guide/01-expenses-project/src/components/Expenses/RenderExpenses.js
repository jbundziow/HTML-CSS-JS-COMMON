import Card from '../UI/Card';
// import ExpenseItem from "./ExpenseItem";
import './RenderExpenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function RenderExpenses (props) {

    const [selectedDate, setSelectedDate] = useState('2023');
    const filterYear = (year) => {
        setSelectedDate(year);
    }

    const filteredExpenses = props.data.filter(ex => ex.date.getFullYear().toString() === selectedDate);

    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter onFilter={filterYear} selected={selectedDate}/>
        <ExpensesChart expenses={filteredExpenses}/>
        {/* {props.data.map(ex => (<ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date}/>))} */}
        {/* {filteredExpenses.map(ex => (<ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date}/>))} */}
        {/* {expensesContent} */}
        {<ExpensesList items={filteredExpenses}/>}
        {/* <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}/>
        <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}/>
        <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}/>
        <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}/> */}
        </Card>
        </div>
    );
}

export default RenderExpenses;
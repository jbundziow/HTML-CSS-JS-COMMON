import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './RenderExpenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';


function RenderExpenses (props) {

    const [selectedDate, setSelectedDate] = useState('2022');
    const filterYear = (year) => {
        setSelectedDate(year);
    }

    return (
        <div>
        <Card className='expenses'>
        <ExpensesFilter onFilter={filterYear} selected={selectedDate}/>
        <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date}/>
        <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date}/>
        <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date}/>
        <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date}/>
        </Card>
        </div>
    );
}

export default RenderExpenses;
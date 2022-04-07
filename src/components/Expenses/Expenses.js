import React, { useState } from 'react';np

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

import './Expenses.css'

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseHandler = (filterValue) => {
        console.log(filterValue);
        setFilteredYear(filterValue);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterExpenseHandler={filterExpenseHandler}
                />
                <ExpenseItem
                    title={props.expensesData[0].title}
                    amount={props.expensesData[0].amount}
                    date={props.expensesData[0].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.expensesData[1].title}
                    amount={props.expensesData[1].amount}
                    date={props.expensesData[1].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.expensesData[2].title}
                    amount={props.expensesData[2].amount}
                    date={props.expensesData[2].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.expensesData[3].title}
                    amount={props.expensesData[3].amount}
                    date={props.expensesData[3].date}>
                </ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;
import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

import './Expenses.css'

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseHandler = (filterValue) => {
        const newExpensesArr = props.expensesData.filter((newExpense) => {
            return (newExpense.date.getFullYear().toString() === filterValue);
        });
        setFilteredYear(filterValue);
        props.expensesFilterHandler(newExpensesArr);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterExpenseHandler={filterExpenseHandler}
                />
                {props.expensesData.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
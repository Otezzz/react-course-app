import React, { useState } from 'react';

import ExpenseList from './ExpensesList'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

import './Expenses.css'

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenseHandler = (filterValue) => {
        setFilteredYear(filterValue);
    };

    const newExpensesArr = props.expensesData.filter((newExpense) => {
        return (newExpense.date.getFullYear().toString() === filteredYear);
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onFilterExpenseHandler={filterExpenseHandler}
                />
                <ExpenseList items={newExpensesArr} />
            </Card>
        </div>
    );
}

export default Expenses;
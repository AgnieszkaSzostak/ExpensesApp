import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'; 
import React, {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [choosedOption, setChoosedOption] = useState('2020');
    
    const saveDateHandler = (enteredDate) => {
       setChoosedOption(enteredDate);
    };
    
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === choosedOption);
    
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                onSaveDate={saveDateHandler} 
                initialDate={choosedOption} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>  
    );
}

export default Expenses;
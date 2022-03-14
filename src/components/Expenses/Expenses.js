import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'; 
import React, {useState} from 'react';

const Expenses = (props) => {
    const [choosedOption, setChoosedOption] = useState('2020');


    const saveDateHandler = (enteredDate) => {
       setChoosedOption(enteredDate);
    };

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter onSaveDate={saveDateHandler} initialDate={choosedOption} />
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
                
            </Card>
        </div>  
    );
}

export default Expenses;
import React from 'react';
import TotalExpenses from '../selectors/expenses-total';
import GetVisibleExpenses from '../selectors/expenses'
import { connect } from 'react-redux';
import numeral from 'numeral'
const ExpensesSummary =({expenseCount,expensesTotal})=>{
    const expenseWord = expenseCount === 1 ?'expense':' expenses'
    const formattedExpensesTotal = numeral(expensesTotal/100).format('0.00');
    return(
        <div>
<h1> viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>

        </div>
    )
};

const mapStateToProps=(state)=>{
    const visibleExpenses = GetVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)
    return {
        expenseCount:visibleExpenses.length,
        expensesTotal:TotalExpenses(visibleExpenses)
    }
}
    
export default connect(mapStateToProps)(ExpensesSummary);
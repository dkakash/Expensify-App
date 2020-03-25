import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'
const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;

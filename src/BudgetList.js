import React from "react";
import AddBudgetForm from "./AddBudgetForm";
import ExpenseItem from "./ExpenseItem";
const section = {
  width: "75%"
};
const expenseList = {
  display: "flex",
  flexWrap: "wrap",
  padding: "16px 24px"
};

const BudgetList = (props) => {
  return (
    <section style={section}>
      <AddBudgetForm addExpense={props.addExpense} />
      <div style={expenseList}>
        {props.expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
            deleteExpense={props.deleteExpense}
          />
        ))}
      </div>
    </section>
  );
};

export default BudgetList;

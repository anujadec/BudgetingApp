import React, { useState } from "react";
import BudgetSidebar from "./BudgetSidebar";
import BudgetList from "./BudgetList";

const main = {
  display: "flex",
  minHeight: "100vh",
  background: "#ccc"
};

const Budget = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Shopping", cost: 500 },
    { id: 2, name: "Lunch", cost: 200 },
    { id: 3, name: "Misc", cost: 400 }
  ]);
  const [income, setIncome] = useState(1000);

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const addExpense = (expense) =>
    setExpenses((expenses) => [expense, ...expenses]);

  const reducer = (accumulator, currentValue) =>
    accumulator + parseInt(currentValue.cost);

  return (
    <div>
      <header>
        <h2 className="p-3 text-center text-white bg-dark">Time to Budget</h2>
      </header>
      <main style={main}>
        <BudgetSidebar
          income={income}
          budgeted={expenses.reduce(reducer, 0)}
          setIncome={setIncome}
        />
        <BudgetList
          expenses={expenses}
          deleteExpense={deleteExpense}
          addExpense={addExpense}
        />
      </main>
    </div>
  );
};

export default Budget;

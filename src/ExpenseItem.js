import React from "react";
const ExpenseItemStyle = {
  minWidth: "300px",
  background: "white",
  boxShadow: "rgb(0 0 0 / 25%) 0px 4px 16px",
  display: "flex",
  flex: "1 1 0%",
  justifyContent: "space-between",
  margin: "8px",
  padding: "16px"
};

const ExpenseName = {
  width: "55%",
  color: "rgb(34, 34, 34)",
  fontSize: "1.5rem",
  textTransform: "capitalize"
};

const ExpenseCost = {
  width: "30%",
  color: "rgb(88, 214, 141)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "left"
};

const deleteButton = {
  background: "transparent",
  border: "none",
  color: "rgb(102, 102, 102)",
  fontSize: "1rem",
  padding: "0px"
};

const ExpenseItem = (props) => {
  return (
    <div style={ExpenseItemStyle}>
      <span style={ExpenseName}>{props.name}</span>
      <span style={ExpenseCost}>{props.cost}</span>
      <button
        style={deleteButton}
        onClick={() => props.deleteExpense(props.id)}
      >
        X
      </button>
    </div>
  );
};

export default ExpenseItem;

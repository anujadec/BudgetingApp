import React from "react";
const aside = {
  width: "25%",
  minWidth: "200px",
  background: "white",
  borderRight: "1px solid rgb(204, 204, 204)",
  padding: "16px 24px"
};

const h2 = {
  fontSize: "1.25rem",
  fontWeight: "normal",
  marginBottom: "8px"
};

const h3 = {
  fontSize: "1.125rem",
  fontWeight: "normal",
  marginBottom: "8px",
  marginTop: "40px"
};

const input = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #ccc",
  padding: "4px 0",
  transition: "border-bottom-color 0.25s ease-out"
};
const BudgetSidebar = (props) => {
  return (
    <aside style={aside}>
      <h2 style={h2}>Monthly Income</h2>
      <div>
        $
        <input
          style={input}
          type="number"
          step="50"
          min="0"
          max="1000000"
          name="income"
          value={props.income}
          onChange={(event) => props.setIncome(event.target.value)}
        />
      </div>
      <h3 style={h3}>Unbudgeted</h3>
      <p>{props.income - props.budgeted}</p>
    </aside>
  );
};

export default BudgetSidebar;

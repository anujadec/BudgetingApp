import React from "react";

const form = {
  background: "white",
  display: "flex",
  alignItems: "flex-end",
  padding: "16px"
};

const line = {
  flex: "1 1 0%",
  paddingLeft: "8px",
  paddingRight: "8px"
};

const input = {
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #ccc",
  padding: "4px 0",
  transition: "border-bottom-color 0.25s ease-out",
  marginRight: "10px",
  width: "100%",
  fontSize: "1rem"
};

const generateID = () => {
  return Math.floor(Math.random() * 1000000000);
};

const AddBudgetForm = (props) => {
  const [name, setName] = React.useState("");
  const [cost, setCost] = React.useState(0);

  const add = (e) => {
    alert(e);
    e.preventDefault();
    const expense = {
      id: generateID(),
      name,
      cost
    };
    props.addExpense(expense);
  };
  return (
    <form style={form}>
      <div style={line}>
        <input
          style={input}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={line}>
        <input
          style={input}
          type="number"
          min="0"
          max="100000"
          name="cost"
          value={cost}
          placeholder="$ Amount"
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit" onClick={(e) => add(e)}>
        + Add
      </button>
    </form>
  );
};

export default AddBudgetForm;

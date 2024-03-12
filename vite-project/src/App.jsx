// todo variables
const appName = "Todo App";
const todoTile = "Todo list";
const todoDesc = "This is a todo list";

// date variables
const date = new Date();
const curDate = date.getDate();
const curMonth = date.getMonth() + 1; // month is 0 indexed
const curYear = date.getFullYear();

function App() {
  return (
    <div>
      <h1 className="headingStyle">{appName}</h1>
      <div className="card">
        <h3 className="cardTitle">{todoTile}</h3>
        <p className="cardDesc">{todoDesc}</p>
        <p className="cardFooter">{curDate + "/" + curMonth + "/" + curYear}</p>
      </div>
    </div>
  );
}

export default App;

// external imports

// date variables
const date = new Date();
const curDate = date.getDate();
const curMonth = date.getMonth() + 1; // month is 0 indexed
const curYear = date.getFullYear();

// component
function Card(props) {
  const { todoTitle, todoDesc } = props; // destructuring props

  return (
    <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>
      <p className="cardDesc">{todoDesc}</p>
      <p className="cardFooter">{curDate + "/" + curMonth + "/" + curYear}</p>
    </div>
  );
}

// export component
export default Card;
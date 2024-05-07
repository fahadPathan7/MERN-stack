import React from "react";
import {v4 as uuidv4} from "uuid";

// data for the list (assuming this data will come from an API)
const todos = [
  {
    id: uuidv4(),
    title: "bazar",
    desc: "alu peyaj",
  },
  {
    id: uuidv4(),
    title: "study",
    desc: "physics",
  },
  {
    id: uuidv4(),
    title: "fast-food",
    desc: "burger",
  },
  {
    id: uuidv4(),
    title: "morning walk",
    desc: "8 am",
  },
];

const List = () => {
  return (
    <div>
      {todos.map(todo => {
        const {id, title, desc} = todo; // destructuring the todo object
        return (
          <div className="card" key={id}>
            <h3 className="cardTitle">{title}</h3>
            <p className="cardDesc">{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
import { useState } from "react";
import Table from "./components/Table";

const MY_ID = 620610820;

function App() {
  const [ counter, setCounter ] = useState(MY_ID);

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Apisit Ritreungroj 620610820",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      {persons.map((person) => <Table key={Math.random()} {...person} />)}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)} >-</button>
      <button onClick={() => setCounter(MY_ID)} >reset</button>
      <button onClick={() => setCounter(counter + 1)} >+</button>
    </div>
  );
}

export default App;

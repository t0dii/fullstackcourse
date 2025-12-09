import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState("");

  const handleInput = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    console.log(event.target.value);
    console.log("number inputted");
    setNewNumber(event.target.value);
  };

  const handleFilterInput = (event) => {
    console.log(event.target.value);
    setShowAll(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = { name: newName, number: newNumber };
    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber("");
  };
  const isDuplicate = persons.some((person) => person.name === newName);

  const filterPersons = showAll
    ? persons
    : persons.filter((person) => person.name === showAll);

  return (
    <div>
      <h2>Filter</h2>
      filter shown in: <input onChange={handleFilterInput} />
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleInput} />
          <br></br>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {filterPersons.map((person) => (
        <div key={person.name}>
          {person.name}
          {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;

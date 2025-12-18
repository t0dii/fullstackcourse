import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState("");

  //Update the name state when user types in input
  const handleInput = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  //Update the number state when user types in input
  const handleNumberInput = (event) => {
    console.log(event.target.value);
    console.log("number inputted");
    setNewNumber(event.target.value);
  };
  //Updates filter state when user types in input
  const handleFilterInput = (event) => {
    console.log(event.target.value);
    setShowAll(event.target.value);
  };

  //Handles adding a new person to the phonebook
  //Sends alert when there is a duplicate name
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
  //Checks for duplicate names
  const isDuplicate = persons.some((person) => person.name === newName);

  /**
   * Returns a filtered list of persons based on the 'showAll' search query.
   * If the search is empty, returns the full list.
   */
  const filterPersons = showAll
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(showAll.toLowerCase()),
      )
    : persons;

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promised fufilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "notes");

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={showAll} onChange={handleFilterInput} />

      <h2>Add a new</h2>
      <PersonForm
        addNote={addNote}
        newName={newName}
        handleInput={handleInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
      />

      <h2>Numbers</h2>
      <Persons filterPersons={filterPersons} />
    </div>
  );
};
export default App;

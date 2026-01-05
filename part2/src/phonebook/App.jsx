import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Note from "../services/Note";

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
    axios.post("http://localhost:3001/persons", noteObject).then((response) => {
      setPersons(persons.filter((p) => p.id !== id));
      setNewName("");
      setNewNumber("");
    });
  };

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fufilled");
      setPersons(response.data);
    });
  }, []);

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

  const deletePerson = (id) => {
    console.log("deletePerson was called with id:", id);
    const winConfirm = window.confirm(
      "Are you sure you want to delete this user?",
    );
    if (winConfirm) {
      axios
        .delete("http://localhost:3001/persons/" + id)
        .then((response) => {
          console.log("User has been deleted");
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log("Error deleting user", error);
        });
    } else {
      console.log("User deletion cancelled");
    }
  };

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
      {persons.map((person) => (
        <ul key={person.id}>
          {person.name} {person.number}
          <button
            onClick={() => {
              console.log("This person's ID is:", person.id);
              deletePerson(person.id);
            }}
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
};
export default App;

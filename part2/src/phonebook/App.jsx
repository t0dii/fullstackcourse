import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState("");
  const [newName, setNewName] = useState("");

  const handleInput = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newName,
    };
    setPersons(persons.concat(noteObject));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      name:
      <form onSubmit={addNote}>
        <input value={newName} onChange={handleInput} />
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      {persons.name}
    </div>
  );
};

export default App;

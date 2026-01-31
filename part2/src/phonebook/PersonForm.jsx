const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addNote}>
        <div>
          name: <input value={props.newName} onChange={props.handleInput} />
          <br></br>
          number:{" "}
          <input value={props.newNumber} onChange={props.handleNumberInput} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default PersonForm;

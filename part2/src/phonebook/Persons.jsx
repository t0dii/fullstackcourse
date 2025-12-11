const Persons = (props) => {
  return (
    <div>
      {props.filterPersons.map((person) => (
        <li key={person.id}>
          {person.name}
          {person.number}
        </li>
      ))}
    </div>
  );
};
export default Persons;

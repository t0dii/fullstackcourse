const Filter = (props) => {
  return (
    <div>
      filter shown in: <input onChange={props.onChange} />
    </div>
  );
};

export default Filter;

const Course = ({course}) => {
  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.name}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part parts={props.parts}/>
    </div>
  )
}

const Part = (props) => {
  console.log("hi")
  const {parts} = props
  return (
    <div>
      {parts.map(parts=><li key={parts.name}>{parts.name} {parts.exercises}</li>)}
    </div>
  )
}

const Total = (props) => {
  const calcTotal = props.parts.reduce((prevValue, currentValue)=>prevValue+currentValue.exercises,0);
  return (
    <div><p><b>total of {calcTotal} exercises</b></p></div>
  )
}

export default Course
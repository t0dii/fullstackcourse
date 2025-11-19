const Course = (props) => {
  return(
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
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
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      <Course course={courses}/>
    </div>
  )
}

export default App
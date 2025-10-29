const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Course {course}
      </p>
    </div>
  )
}



const Total = () => {

}

const Part = () => {

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content  />
      <Total />
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  )
}

export default App
import { useState } from 'react'

const StatisticsLine = (props) => {
  console.log(props)
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  if(props.allClicks.length === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
        <StatisticsLine text="good" value ={props.good}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="all" value={props.all}/>
        <StatisticsLine text="average" value={props.average}/>
        <StatisticsLine text="positive" value={props.positive}/>

    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const all = good + bad + neutral;
  const average = (good*1 + bad*-1 + neutral*0)/all;
  const positive = (good/all)*100 + '%';
  const [selected, setSelected] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const neutralClick = () => {
    setAll(allClicks.concat(''))
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setAll(allClicks.concat(''))
    setBad(bad + 1)
  }
  const goodClick = () => {
    setAll(allClicks.concat(''))
    setGood(good + 1)
  }
  const arrayClick = () => {
    setSelected(selected + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>

      <Button
        onClick={goodClick}
        text='good'
      />

      <Button
        onClick={badClick}
        text='bad'
      />
      <Button
        onClick={neutralClick}
        text='neutral'
      />

      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
            </td>
          </tr>
        </tbody>
      </table>

      <h1>Anecdotes</h1>
      {anecdotes[selected]}
      <br/>
      <button onClick={arrayClick}>next anecdotes</button>

    </div>
  )
}

export default App
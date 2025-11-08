import { useState } from 'react'

const StatisticsLine = (props) => {
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
      <p>
        Good={props.good}
        {' '}
        Bad={props.bad}
        {' '}
        Neutral={props.neutral}
        {' '}
        Average={props.average}
        {' '}
        Positive={props.positive}
        {' '}
      </p>
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        <StatisticsLine text="good" value ={props.good}/>
        <StatisticsLine text="bad" value={props.bad}/>
        <StatisticsLine text="neutral" value={props.neutral}/>
      </p>
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
      <StatisticsLine allClicks={allClicks} good={good} bad={bad} neutral={neutral} average={average} positive={positive}/>

    </div>
  )
}

export default App
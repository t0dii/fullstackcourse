import { useState } from 'react'

const Statistics = (props) => {
  console.log(props)
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
      </p>


    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral;
  const average = (good*1 + bad*-1 + neutral*0)/all;
  const positive = (good/all)*100 + '%';



  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>
        good
      </button>

      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive}/>

    </div>
  )
}

export default App
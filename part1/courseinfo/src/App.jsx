import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral;



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

      <div>good={good}</div>
      <div>bad={bad}</div>
      <div>neutral={neutral}</div>
      <div>average={((good*1 + bad*-1 + neutral*0)/all)}</div>
      <div>positive={(good/all)*100 + '%'}</div>

    </div>
  )
}

export default App
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {

  const all = () => (good + neutral + bad)
  const average = () => (good * 1 + bad * (-1)) / (good + neutral + bad)
  const positive = () => (good / ( good + neutral + bad)) * 100

  if (all() === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good: " value ={good} />
          <Statistic text="neutral: " value ={neutral} />
          <Statistic text="bad: " value ={bad} />
          <Statistic text="all: " value ={all()} />
          <Statistic text="average: " value ={average()} />
          <Statistic text="positive: " value ={positive()} />
        </tbody>
      </table>
    </div>
  )  
  
}

const Statistic = ({text, value}) => {
  if (text === "positive: ") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}{" %"}</td>
      </tr>
    )
  }
  
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

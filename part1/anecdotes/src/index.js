import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0))

  const randomIndex = () => {
    const min = Math.ceil(0);
    const max = Math.floor(props.anecdotes.length);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const updatePoints = () => {
    const copy = [...points]
    copy[selected] += 1 
    setPoints(copy)
  }

  const highest = () => {
    return points.indexOf(Math.max(...points))
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => updatePoints()} text={"vote"}></Button>
      <Button handleClick={() => setSelected(randomIndex())} text={"next anecdote"}></Button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[highest()]}</p>
      <p>has {points[highest()]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Premature optimization is the root of all evil.',
  'Brooks Law: "Adding manpower to a late software project makes it later!"',
  'How does a project get to be a year late?... One day at a time.',
  'Program testing can be used to show the presence of bugs, but never to show their absence!',
  'Programming can be fun, so can cryptography; however they should not be combined.',
  'Before software can be reusable it first has to be usable.',
  'Don’t document bad code -- rewrite it.',
  'The best way to get a project done faster is to start sooner',
  "Every good work of software starts by scratching a developer's personal itch"
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

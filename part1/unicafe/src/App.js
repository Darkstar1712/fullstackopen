import { useState } from 'react'

const Button = ( {onClick, text} ) => 
    <button onClick={onClick}>{text}</button>

const StatisticsLine = ( { text, value }) => 
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>

const Statistics = ({ good, neutral, bad, all }) => {
  const calculateAverage = () => {
        return (good - bad) / all
  }

  const calculatePositive = () => {
    return good / all * 100 + " %"
  }

  if (all === 0) {
    return <p>no feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all} />
        <StatisticsLine text="average" value={calculateAverage()} />
        <StatisticsLine text="positive" value={calculatePositive()} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all}/>
    </div>
  )
}

export default App
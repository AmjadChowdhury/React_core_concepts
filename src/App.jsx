import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actors from './Actors'
import Students from './Students'
import Rendering from './Rendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concepts...</h1>
      <Device name="Laptop"></Device>
      <Device name="Mobile"></Device>
      <Person name="Amjad" age={21}></Person>
      <Person name="Rahat" age={22}></Person>
      <Person name="Sabuj" age={22}></Person>
      <Actors name="Salman Shah" movie="1 takar denmohor"></Actors>
      <Students></Students>
      <Rendering task="Explore react" isGood={true}></Rendering>
      <Rendering task="Explore Node.js" isGood={false}></Rendering>
      <Rendering task="Explore tailwind" isGood={true}></Rendering>

      
    </>
  )
}

function Device({name}){
  return (
    <div>
      <h3>Device Name is : {name}</h3>
    </div>
  )
}

function Person({name,age}){
  const divStyle = {
    border : '2px solid green',
    margin : '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={divStyle}>
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
    </div>
  )
}

export default App

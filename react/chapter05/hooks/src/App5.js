import React, { useState } from 'react'
import Checkbox2 from './components/Checkbox2'
import User from './components/User'
import User2 from './components/User2'
import Cat from './components/Cat'

export default function App5() {

  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {/* <Checkbox2 /> */}
      {/* <User /> */}
      {/* <User2 /> */}
      {
        cats.map((name, i) =>
          <Cat key={i} name={name} />)
      }
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>Add a Cat</button>
    </>
  )
}

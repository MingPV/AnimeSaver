import { useState } from 'react'

import './App.css'

import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div><Test /></div>
      </div>
    </>
  )
}

export default App

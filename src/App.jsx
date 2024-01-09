import { useState } from 'react'
import './App.css'
import DashBoard from './pages/DashBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:"100vh"}}>
      <DashBoard></DashBoard>
    </div>
  )
}

export default App

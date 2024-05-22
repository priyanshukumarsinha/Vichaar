import { useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import About from './pages/About.jsx'
import Membership from './pages/Membership.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <LandingPage/>
    // <About/>
    <Membership/>
  )
}

export default App

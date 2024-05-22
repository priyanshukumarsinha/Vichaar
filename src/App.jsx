import { useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import About from './pages/About.jsx'
import Membership from './pages/Membership.jsx'
import {SignInPopUp, SignUpPopUp} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage/>
    {/* <About/> */}
    {/* <Membership/> */}
    {/* <SignInPopUp/> */}
    {/* <SignUpPopUp/> */}
    </>
  )
}

export default App

import { useState } from 'react'
import { Header, Footer, Section } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='h-screen flex flex-col justify-between bg-[#FFC017]'>
        <Header/>
        <Section/>
        <Footer/>
        </div>
    </>
  )
}

export default App

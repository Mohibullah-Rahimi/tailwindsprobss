import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Card  photo="2.bmp"message="This is to invite you in a event that will happen next week in the city of union and wish you come here "position="Manager, Mohibullah Rahimi" name="Mohibullah ID Card"/>
<Card  photo="1.jpg"message="this is Amena Qazikhani Cards for comming the event "position="Lawer, Amena Qazikhani" name="Amena ID Card"/>
<Card photo="1.jpg" position="Student, Hajar Rahimi" name="Hajar Jan ID Card"/>
<Card />

<Card text="With Regards" /><Card /><Card />
</>


  )

}

export default App

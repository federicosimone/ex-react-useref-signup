import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>FORM</h1>
      <form action="">
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">First Name</label>
          <input type="text" />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="LastName">Last Name</label>
          <input type="text" name="lastName" id="" />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="specializzazione">Specializzazione</label>
          <select id="spec" name="specList" form="specform">
            <option value="fullStack">Full stack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="years">Anni di esperienza</label>
          <input type="number" id="years" name="years" min="0" max=""></input>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="textarea">Breve descrizione</label>
          <textarea type="textarea" name="textarea" id="description" rows="3" cols="25" />
        </div>
      </form >

    </>
  )
}

export default App

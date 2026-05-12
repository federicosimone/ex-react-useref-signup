import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [years, setYears] = useState(0)
  const [description, setDescription] = useState("")

  console.log(specializzazione)

  const form = document.getElementById('studentForm')

  const submit = (e) => {
    e.preventDefault();
    if (firstName.trim() === "") {
      alert("Inserisci il tuo nome")

    }
    if (lastName.trim() === "") {
      alert("Inserisci il tuo cognome")

    }
    if (password.length < 8) {
      alert("la password deve avere almeno 8 caratteri")
    }
    if (specializzazione === "") {
      alert("seleziona la specializzazione")
    }



  }


  return (
    <>
      <h1>FORM</h1>
      <form onSubmit={submit} id="studentForm">
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="LastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="specializzazione">Specializzazione</label>
          <select id="spec" name="specList" form="specform" onChange={(e) => setSpecializzazione(e.target.value)}>
            <option value=""></option>
            <option value="FullStack">Full stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="years">Anni di esperienza</label>
          <input type="number" id="years" name="years" min="0" onChange={(e) => setYears(e.target.value)}></input>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="textarea">Breve descrizione</label>
          <textarea type="textarea" name="textarea" id="description" rows="3" cols="25" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <input className="btn btn-primary" type="submit" ></input>
      </form >

    </>
  )
}

export default App

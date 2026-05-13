import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const letters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\\\",.<>?/`~";


function App() {
  const [firstName, setFirstName] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [years, setYears] = useState("")
  const [description, setDescription] = useState("")

  const isUsernameValid = useMemo(() => {

    const charsValid = username.split("").every(char => {
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    })

    return charsValid && userName.trim().length >= 6
  }, [userName]);

  const isPasswordValid = useMemo(() => {
    return (password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char)) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    )

  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  })


  const submit = (e) => {
    e.preventDefault();
    if (firstName.trim() === "") {
      alert("Inserisci il tuo nome")
      return  // il return serve per interrompere la funzione se l'input non è ok 
    }
    if (userName.trim() === "") {
      alert("Inserisci il tuo cognome")
      return
    }
    if (password.length < 8) {
      alert("la password deve avere almeno 8 caratteri")
      return
    }
    if (years <= 0) {
      alert("Gli anni devono essere positivi")
      return
    }

    if (!years.trim()) {
      alert("compila il campo per gli anni di esperienza")
    }
    if (specializzazione.trim() === "") {
      alert("seleziona la specializzazione")
      return
    }
    if (description.trim() === "") {
      alert("Inserisci una descrizione")
    }

    console.log({
      firstName,
      userName,
      password,
      specializzazione,
      years,
      description
    })

  }



  return (
    <>
      <h1>FORM</h1>
      <form onSubmit={submit} id="studentForm">
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <p style={{ color: firstName.length < 6 }}></p>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="UserName">Username</label>
          <input type="text" name="userName" id="userName" value={userName} onChange={(e) => {

            setUserName(e.target.value)
            const userNameValue = e.target.value;

            if (userNameValue.length < 6) {
              setUsernameError("Minimo 6 caratteri")
            } else {
              setUsernameError("")
            }
          }} />

          <div>{usernameError != "" ? <p className='text-danger'>{usernameError}</p> : <p className='text-success'>Username valido</p>}</div>



        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="specializzazione">Specializzazione</label>
          <select id="spec" name="specList" form="specform" value={specializzazione} onChange={(e) => setSpecializzazione(e.target.value)}>
            <option value=""></option>
            <option value="FullStack">Full stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="years">Anni di esperienza</label>
          <input type="number" id="years" name="years" min="0" value={years} onChange={(e) => setYears(Number((e.target.value)))}></input>
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="textarea">Breve descrizione</label>
          <textarea type="textarea" name="textarea" id="description" rows="3" cols="25" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <input className="btn btn-primary" type="submit" ></input>
      </form >

    </>
  )
}

export default App



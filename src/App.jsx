import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const letters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\\\",.<>?/`~";


function App() {
  const [firstName, setFirstName] = useState("Federico")
  const [userName, setUserName] = useState("Simone")
  const [password, setPassword] = useState("@GinKiwi26")
  const [specializzazione, setSpecializzazione] = useState("Frontend")
  const [years, setYears] = useState(1)
  const [description, setDescription] = useState("Ciao, sono Federico e voglio portare a termine questo corso cercando di imparare quante più nozioni possibili")

  const isUsernameValid = useMemo(() => {      // usiamo useMemo() perchè serve per restituire un valore (in questo caso booleano) che si salva nella variabile
    // incvece di usare useEffect 


    const charsValid = userName.split("").every(char => {
      return letters.includes(char.toLowerCase()) || numbers.includes(char)
    })

    return charsValid && userName.trim().length >= 6
  }, [userName]);  //inserisco come dipendenza userName perchè a causa dell'onChangee e dello useState viene settato ad ogni digitazione ed è il dato da monitorare.
  //QUINDI AD OGNI TASTO PREMUTO VENGONO ESEGUITI TUTTI I CONTROLLI E isUsernameValid ci dirà se true o false e quindi se le condizioni vengono rispettate. 

  const isPasswordValid = useMemo(() => {
    return (password.trim().length >= 8 &&
      password.split("").some(char => letters.includes(char.toLowerCase())) &&
      password.split("").some(char => numbers.includes(char)) &&
      password.split("").some(char => symbols.includes(char))
    )

  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length < 1000;
  }, [description])


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
    if (years <= 0) {
      alert("Gli anni devono essere positivi")
      return
    }

    if (!years) {
      alert("compila il campo per gli anni di esperienza")
    }
    if (specializzazione.trim() === "") {
      alert("seleziona la specializzazione")
      return
    }
    if (description.trim() === "") {
      alert("Inserisci una descrizione")
    }

    if (!isDescriptionValid || !isPasswordValid || !isUsernameValid) {
      alert("Form non compilato correttamente")
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

        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="UserName">Username</label>
          <input type="text" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
          {userName.trim() && (
            <p className={isUsernameValid ? 'text-success' : 'text-danger'}>{isUsernameValid ? "Username valido" : "Deve avere almeno 6 caratteri alfanumerici"}</p>
          )}
        </div>
        <div className='mb-3'>
          <label className='me-2' htmlFor="firstName">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {password.trim() && (
            <p className={isPasswordValid ? 'text-success' : 'text-danger'}>{isPasswordValid ? "Password valida" : "Deve avere almeno 8 caratteri alfanumerici + simboli"}</p>
          )}
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
          {description.trim() && (
            <p className={isDescriptionValid ? 'text-success' : 'text-danger'}>{isDescriptionValid ? "Descrizione valida" : "La descrizione deve essere compresa tra 100 e 1000 caratteri"}</p>
          )}
        </div>
        <input className="btn btn-primary" type="submit" ></input>
      </form >

    </>
  )
}

export default App



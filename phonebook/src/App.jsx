import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Contacts from './components/Contacts'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

useEffect(() => {
  console.log('async start');
  axios.get('http://localhost:3001/persons')
  .then(response => {
  const personsjs = response.data
  console.log('promise fullfilled yay');
  setPersons(personsjs)
})
}, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const toShow = (search === '')?
    persons : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
    if (!persons.some(person => person.name === newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }  
  }

  const handleNewNames =(event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  const handleNewNumbers = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch}/>
      <Form
        addName={addName} newName={newName} newNumber={newNumber} handleNewNames={handleNewNames} handleNewNumbers={handleNewNumbers}
      />
      <h2>Numbers</h2>
      <Contacts toShow={toShow} />
    </div>
  )
}

export default App
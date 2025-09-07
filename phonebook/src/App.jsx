import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Contacts from './components/Contacts'
import personsService from './services/persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

useEffect(() => {
  personsService
  .getAll()  
  .then(initialData => {
    setPersons(initialData)
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
      number: newNumber
    }

    const existingPerson = persons.find(p => p.name === newName)
    if (!existingPerson) {
      personsService
        .create(personObject)
        .then(returnedData => {
          setPersons(persons.concat(returnedData))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`${newName} added to phonebook`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
    } else if (window.confirm(`${newName} is already added to phonebook. Do you want to replace old number?`)) {
      const updatedPerson = { ...existingPerson, number: newNumber }
      personsService
        .update(existingPerson.id, updatedPerson)
        .then(returnedData => {
          setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedData))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`${existingPerson.name}'s number updated`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`${existingPerson.name} has already been removed from phonebook`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== existingPerson.id))
        })
        setNewName('')
        setNewNumber('')
    } 
  }

  const handleNewNames =(event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  const handleNewNumbers = (event) => {
    setNewNumber(event.target.value)
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id )
    if (window.confirm(`Do you want to delete ${person.name}`)) {
      personsService
      .remove(id)
      .then(deletedData => {
        setPersons(persons.filter(p => p.id !==id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type='error' />
      <Notification message={successMessage} type='success' />
      <Filter search={search} handleSearch={handleSearch}/>
      <Form
        addName={addName} newName={newName} newNumber={newNumber} handleNewNames={handleNewNames} handleNewNumbers={handleNewNumbers}
      />
      <h2>Numbers</h2>
      <Contacts toShow={toShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
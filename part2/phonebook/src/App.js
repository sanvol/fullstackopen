import React, { Component, useState } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilter] = useState('')

  const nameTaken = () => {
    return persons.filter(person => person.name === newName).length !== 0
  }

  const numberTaken = () => {
    return persons.filter(person => person.number === newNumber).length !== 0
  }

  // Form submit event handler
  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (newName !== '' || newNumber !== '') {
      if (!nameTaken() && !numberTaken()) {
        setPersons(persons.concat(newPerson))
        setNewNumber('')
        setNewName('')
      } else if (nameTaken()) {
        window.alert(`${newName} is already added to phonebook`)
      } else if (numberTaken()) {
        window.alert(`${newNumber} is already added to phonebook`)
      }
    }
  }

  const handleNewNameChanged = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChanged = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChanged = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filter={filterValue}
        handleFilterChanged={handleFilterChanged}
      />
      <h3>Add a new entry</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewNameChanged={handleNewNameChanged}
        newNumber={newNumber}
        handleNewNumberChanged={handleNewNumberChanged}
      />
      <h3>Numbers</h3>
      <PersonList
        persons={persons}
        filterValue={filterValue}
      />
    </div>
  )
}

export default App

import React from 'react'
import Person from './Person'

const PersonList = ({ persons, filterValue }) => {

    const filteredEntries = () => {
        const filtered = persons.filter(
            person => person.name.toLowerCase().includes(filterValue)
        )
        return filtered.map(person =>
            <Person key={person.name} person={person} />
        )
    }

    return (
        <div>
            {filteredEntries()}
        </div>
    )
}

export default PersonList

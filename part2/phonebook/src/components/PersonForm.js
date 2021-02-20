import React from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        <div>
          name: 
          <input
            value={props.newName}
            onChange={props.handleNewNameChanged}
          />
        </div>
        <div>
          number: 
          <input
            value={props.newNumber}
            onChange={props.handleNewNumberChanged}
          />
        </div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm

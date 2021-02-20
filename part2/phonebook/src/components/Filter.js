import React from 'react'

const Filter = ({ filter, handleFilterChanged }) => {
  return (
    <>
      filter shown entries:
      <input
        value={filter}
        onChange={handleFilterChanged}
      />
    </>
  )
}

export default Filter

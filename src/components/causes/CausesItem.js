import React from 'react'

const CausesItem = ({ item }) => {
  return (
    <div className='card'>
        <div className='card-front'>
        <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>City:</strong> {item.city}
            </li>
            <li>
              <strong>State:</strong> {item.state}
            </li>
          </ul>
        </div>

    </div>
  )
}

export default CausesItem

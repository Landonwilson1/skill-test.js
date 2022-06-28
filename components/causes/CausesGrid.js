import React from 'react'
import CausesItem from './CausesItem'
import Spinner from '../ui/Spinner'

const CausesGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.causes.map((item) => (
        <CausesItem key={item.char_id} item={item}></CausesItem>
      ))}
    </section>
  )
}

export default CausesGrid

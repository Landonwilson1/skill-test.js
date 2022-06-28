import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CausesGrid from './components/causes/CausesGrid'
import Search from './components/ui/Search'
import './App.css'

//State for data, query, and, loading
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

//fetch causes data from api with useEffect and axios
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      //Was not able to make query parameters work in time
      const result = await axios(
        `https://api.givebacks.com/services/core/causes/search?name=${query}`
      )

      console.log(result.data)
      
      //set data to items state
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])  //dependency so useEffect fires everytime value is changed
  
  const queryFunction = (q) =>{
    setQuery(q)
  }
  
  //components 
  return (
    <div className='container'>
      <Header />
      <Search getQuery={queryFunction} />
      <CausesGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App

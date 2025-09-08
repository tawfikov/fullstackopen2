import { useEffect, useState } from 'react'
import countriesService from './services/countries.js'
import Query from './components/Query.jsx'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [q, setQ] = useState('')

  const handleInput = (event) => {
    setQ(event.target.value)
  }

  const handleShow = (country) => {
    setQ(country.name.common) 
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setAllCountries(initialCountries)
      })
  }, [])

  useEffect(() => {
    const matches  = allCountries.filter(country => country.name.common.toLowerCase().includes(q.toLowerCase()))
        setCountries(matches)
        console.log(matches)
  }, [q, allCountries])

  return (
    <>
      <div>
        find countries 
        <input value={q} onChange={handleInput}/>
      </div>
      <div>
        <Query countries={countries} len={countries.length} q={q} onClick={handleShow}/>
      </div>
        
    </>
  )
}

export default App

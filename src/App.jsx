import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { fetchUser } from './services/user'
import { useUserContext } from './Context/UserContext'

function App() {
  // inital value should match the data type of end value
  const { setUser } = useUserContext()

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [setUser])

  return (
    <Layout >
      <Home />
    </Layout>
  )
}

export default App

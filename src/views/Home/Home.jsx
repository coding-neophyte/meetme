import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'
import { useUserContext } from '../../Context/UserContext'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useUserContext()

  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  if (loading) return <h1>Loading...</h1>
  return <Profile />
}

export default Home

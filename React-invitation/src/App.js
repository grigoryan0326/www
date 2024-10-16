import React from "react"
import "./index.scss"
import { Success } from "./components/Success"
import { Users } from "./components/Users"
import { useEffect } from "react"
import { useState } from "react"


function App() {
  const [users, setUsers] = useState([])
  const [invites, setInvites] = useState([])
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='App'>
      <Users
        invites={invites}
        setInvites={setInvites}
        users={users}
        isLoading={loading}
        setSuccess={setSuccess}
      />
      {success && <Success count={invites.length} setSuccess={setSuccess}/>}
    </div>
  )
}

export default App

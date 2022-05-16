import React, { useEffect, useState } from "react"
import Login from "./components/Login"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost.jsx"

const App = () => {
  const [user, setUser] = useState("")
  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login"
  }, [user])

  if (!user) {
    return <Login setUser={setUser} />
  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} />
    </>
  )
}

export default App

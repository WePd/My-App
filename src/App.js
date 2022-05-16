import React, { Fragment, useCallback, useEffect, useState } from "react"
import Login from "./components/Login"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost.jsx"
import PostList from "./components/PostList.jsx"

const App = () => {
  const [user, setUser] = useState("admin")
  const [post, setPost] = useState([])

  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login"
  }, [user])

  const handlePost = useCallback(
    (newPost) => {
      setPost([newPost, ...post])
    },
    [post]
  )

  if (!user) {
    return <Login setUser={setUser} />
  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handlePost={handlePost} />
      <PostList posts={post} />
    </>
  )
}

export default App

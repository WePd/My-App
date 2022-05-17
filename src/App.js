import React, {
  createContext,
  // useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react"
import Login from "./components/Login"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost.jsx"
import PostList from "./components/PostList.jsx"
import postReducer from "./reducer"

export const UserContext = createContext()
export const PostContext = createContext({ posts: [] })

const App = () => {
  const [user, setUser] = useState("admin")

  const initialPostState = useContext(PostContext)
  const [state, dispatch] = useReducer(postReducer, initialPostState)
  // const [post, setPost] = useState([])
  useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login"
  }, [user])

  // const handlePost = useCallback(
  //   (newPost) => {
  //     setPost([newPost, ...state.post])
  //   },
  //   [state.post]
  // )

  if (!user) {
    return <Login setUser={setUser} />
  }
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  )
}

export default App

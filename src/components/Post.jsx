import { useContext } from "react"
import { UserContext } from "../App"

const Post = ({ content, image, user }) => {
  const isCurrentUser = useContext(UserContext)
  let currentUser = isCurrentUser === user
  return (
    <>
      {image && (
        <img
          style={{ width: 100, height: 100 }}
          src={URL.createObjectURL(image)}
          alt="sdsa"
        />
      )}
      <h2>{content}</h2>
      <h2 style={{ color: currentUser && "green" }}>{user}</h2>
      {currentUser && <button>Delete</button>}
    </>
  )
}

export default Post

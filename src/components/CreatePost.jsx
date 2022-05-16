import { useState } from "react"

const CreatePost = ({ user }) => {
  const [content, setContent] = useState("")
  const [image, setImag] = useState(null) // file

  const handleSubmit = (event) => {
    event.preventDefault()
    const post = { content, image, user }
  }
  return (
    <div>
      <h2>Create new Post</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="please add post content"
          onChange={(event) => setContent(event.target.value)}
        />
        <input
          type="file"
          onChange={(event) => setImag(event.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default CreatePost

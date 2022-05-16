import { useRef, useState } from "react"

const CreatePost = ({ user, handlePost }) => {
  const [content, setContent] = useState("")
  const [image, setImag] = useState(null) // file
  const imageRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const post = { content, image, user }

    handlePost(post)

    setContent("") // input输入框在每次sbumit之后清空
    imageRef.current.value = "" // 受控组件
  }
  return (
    <div>
      <h2>Create new Post</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="please add post content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          ref={imageRef}
          type="file"
          onChange={(event) => setImag(event.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default CreatePost

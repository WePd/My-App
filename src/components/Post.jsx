const Post = ({ content, image, user }) => {
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
      <h2>{user}</h2>
    </>
  )
}

export default Post

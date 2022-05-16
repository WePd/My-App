import Post from "./Post"

const PostList = ({ posts }) => {
  return posts.map((item, index) => <Post key={index} {...item} />)
}

export default PostList

import Post from "./Post"

const PostList = ({ posts }) => {
  return posts.map((item) => <Post key={item.id} {...item} />)
}

export default PostList

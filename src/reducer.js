const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST": {
      const newPost = action.payload.post
      return { posts: [newPost, ...state.posts] }
    }
    case "DELETE_POST": {
      const deletePostId = action.payload.id // 要删除的id
      return { posts: state.posts.filter((item) => item.id !== deletePostId) }
    }
    default:
      return state
  }
}

export default postReducer

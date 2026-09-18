import type { Post as PostType } from '../types/Post'
import Post from './Post'

interface PostListProps {
  posts: PostType[]
}

function PostList({ posts }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
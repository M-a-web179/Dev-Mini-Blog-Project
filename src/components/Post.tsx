import type { Post as PostType } from '../types/Post'
import './Post.css'

interface PostProps {
  post: PostType
}

function Post({ post }: PostProps) {
  const formattedDate = new Date(post.datePosted).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="post">
      <h3 className="post__title">{post.title}</h3>
      <p className="post__author">by {post.author}</p>
      <p className="post__content">{post.content}</p>
      <p className="post__date">{formattedDate}</p>
    </article>
  )
}

export default Post
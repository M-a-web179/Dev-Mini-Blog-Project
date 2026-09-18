import type { CSSProperties } from 'react'
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

  const isNew =
    Date.now() - new Date(post.datePosted).getTime() < 24 * 60 * 60 * 1000

  const isFeaturedAuthor = post.author === 'Alice Chen'
  const authorStyle: CSSProperties = {
    backgroundColor: isFeaturedAuthor ? '#fef3c7' : 'transparent',
    padding: isFeaturedAuthor ? '0.15rem 0.5rem' : '0',
    borderRadius: '4px',
    display: 'inline-block',
  }

  return (
    <article className="post">
      <div className="post__header">
        <h3 className="post__title">{post.title}</h3>
        {isNew && (
          <span
            style={{
              backgroundColor: '#22c55e',
              color: 'white',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              padding: '0.2rem 0.5rem',
              borderRadius: '999px',
              marginLeft: '0.5rem',
            }}
          >
            New!
          </span>
        )}
      </div>
      <p className="post__author" style={authorStyle}>
        by {post.author}
      </p>
      <p className="post__content">{post.content}</p>
      <p className="post__date">{formattedDate}</p>
    </article>
  )
}

export default Post
import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Post } from '../types/Post'
import './NewPostForm.css'

interface NewPostFormProps {
  onAddPost: (post: Post) => void
  onClose: () => void
}

function NewPostForm({ onAddPost, onClose }: NewPostFormProps) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!title.trim() || !author.trim() || !content.trim()) return

    const newPost: Post = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      content: content.trim(),
      datePosted: new Date().toISOString(),
    }

    onAddPost(newPost)
    onClose()
  }

  return (
    <div className="new-post-overlay">
      <form className="new-post-form" onSubmit={handleSubmit}>
        <h2>New Post</h2>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author</label>
        <input
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          required
        />

        <div className="new-post-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Publish</button>
        </div>
      </form>
    </div>
  )
}

export default NewPostForm

import { useState } from 'react'
import Header from './components/Header'
import PostList from './components/PostList'
import NewPostForm from './components/NewPostForm'
import withLogger from './components/withLogger'
import type { Post } from './types/Post'
import './App.css'

const PostListWithLogger = withLogger(PostList)

const initialPosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    author: 'Alice Chen',
    content: 'A quick guide to useState and useEffect for beginners looking to modernize their class components...',
    datePosted: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Why TypeScript Improves Developer Experience',
    author: 'Marcus Lee',
    content: 'Static typing catches bugs before they reach production. Here is why I switched every project to TS...',
    datePosted: '2026-09-10T14:30:00Z',
  },
  {
    id: 3,
    title: 'Understanding the Virtual DOM',
    author: 'Alice Chen',
    content: 'React does not touch the real DOM directly on every update. Let us break down how reconciliation works...',
    datePosted: '2026-08-28T11:15:00Z',
  },
]

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [showForm, setShowForm] = useState(false)

  function handleAddPost(newPost: Post) {
    setPosts((prev) => [newPost, ...prev])
  }

  return (
    <div className="app">
      <Header onNewPostClick={() => setShowForm(true)} />
      <PostListWithLogger posts={posts} />
      {showForm && (
        <NewPostForm
          onAddPost={handleAddPost}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default App
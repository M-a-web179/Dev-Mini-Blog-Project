import type { Post } from '../types/Post'

const samplePosts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    author: 'Alice Chen',
    content: 'A quick guide to useState and useEffect for beginners looking to modernize their class components...',
    datePosted: '2026-09-17T09:00:00Z',
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

function PostList() {
  return (
    <div className="post-list">
      {samplePosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>by {post.author}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
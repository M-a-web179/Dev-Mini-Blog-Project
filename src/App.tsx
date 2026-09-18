import Header from './components/Header'
import PostList from './components/PostList'
import withLogger from './components/withLogger'
import './App.css'

const PostListWithLogger = withLogger(PostList)

function App() {
  return (
    <div className="app">
      <Header />
      <PostListWithLogger />
    </div>
  )
}

export default App
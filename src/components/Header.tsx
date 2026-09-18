import './Header.css'

interface HeaderProps {
  onNewPostClick: () => void
}

function Header({ onNewPostClick }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__logo">Dev Insights</h1>
      <nav className="header__nav">
        <button className="header__link" onClick={onNewPostClick}>
          New Post
        </button>
      </nav>
    </header>
  )
}

export default Header
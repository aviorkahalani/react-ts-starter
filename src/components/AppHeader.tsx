import { NavLink } from 'react-router-dom'

const AppHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">App</div>
        <nav className="header__nav">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/explore'}>Explore</NavLink>
          <NavLink to={'/about'}>About</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default AppHeader

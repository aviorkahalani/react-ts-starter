import { NavLink } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

type IProps = {
  isOpen: boolean
  toggleMenu: Function
}

const NavLinks: React.FC<IProps> = ({ isOpen, toggleMenu }) => {
  const styledClass = `nav__links ${isOpen ? 'open' : ''}`

  return (
    <div className={styledClass}>
      <AiOutlineClose size={20} className="btn__close" onClick={() => toggleMenu(false)} />
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/explore'}>Explore</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/auth'}>Login</NavLink>
    </div>
  )
}

export default NavLinks

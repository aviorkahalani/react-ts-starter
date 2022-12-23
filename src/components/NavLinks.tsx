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
      <NavLink onClick={() => toggleMenu(false)} to={'/'}>
        Home
      </NavLink>
      <NavLink onClick={() => toggleMenu(false)} to={'/explore'}>
        Explore
      </NavLink>
      <NavLink onClick={() => toggleMenu(false)} to={'/about'}>
        About
      </NavLink>
      <NavLink onClick={() => toggleMenu(false)} to={'/auth'}>
        Login
      </NavLink>
    </div>
  )
}

export default NavLinks

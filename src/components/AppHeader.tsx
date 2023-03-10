import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import NavLinks from './NavLinks'

const AppHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = (state: boolean) => {
    setIsOpen(state)
  }

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">App</div>
        <nav className="nav">
          <AiOutlineMenu
            size={15}
            className="nav__menu__btn"
            onClick={() => toggleMenu(true)}
          />
          <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
        </nav>
      </div>
    </header>
  )
}

export default AppHeader

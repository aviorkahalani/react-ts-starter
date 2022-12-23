import { AiFillGithub } from 'react-icons/ai'

const AppFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p>☕ 2022 Made by Avior Kahalani</p>
        <a href="https://github.com/aviorkahalani" target={'_blank'}>
          <AiFillGithub size={20} />
        </a>
      </div>
    </footer>
  )
}

export default AppFooter

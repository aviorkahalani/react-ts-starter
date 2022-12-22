import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authActionCreators } from '../store'
import { RootState } from '../store/reducers'
import { User } from '../store/types/authAction'
import AuthForm from '../components/AuthForm'

const Auth: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const { login, logout, register } = bindActionCreators(authActionCreators, dispatch)

  const onFormSubmit = (ev: React.FormEvent<HTMLFormElement>, user: User) => {
    ev.preventDefault()
    login(user)
  }

  return (
    <section className="auth">
      <div className="container auth__container">
        {user ? (
          <div>
            <h1>Hello {user.username}! 👋🏼</h1>
            <button onClick={() => logout()} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <AuthForm onFormSubmit={onFormSubmit} />
        )}
      </div>
    </section>
  )
}

export default Auth

import { useState, useRef, useEffect } from 'react'
import { User } from '../store/types/authAction'

type IProps = {
  onFormSubmit: Function
}

const AuthForm: React.FC<IProps> = ({ onFormSubmit }) => {
  const [userInput, setUserInput] = useState<User>({
    _id: 'u101',
    username: 'admim',
    password: 'admin',
  })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const field = target.name
    const value = target.value
    setUserInput((prevUser) => ({ ...prevUser, [field]: value }))
  }

  return (
    <form className="auth__form" onSubmit={(ev) => onFormSubmit(ev, userInput)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          ref={inputRef}
          onChange={handleChange}
          type="text"
          placeholder="Enter your usernname"
          name="username"
          id="username"
          value={userInput.username}
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          name="password"
          id="password"
          value={userInput.password}
        />
      </div>
      <button className="btn btn--submit" type="submit">
        Login
      </button>
    </form>
  )
}

export default AuthForm

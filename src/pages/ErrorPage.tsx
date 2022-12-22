import { Link, useRouteError } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import errorSVG from '@/assets/error.svg'

type RouteError = {
  data: string
  error: { message: string; stack: string }
  intrernal: boolean
  status: number
  statusText: string
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError
  console.log('error', error)

  return (
    <section className="error">
      <div className="container error__container">
        <div className="img">
          <img src={errorSVG} alt="" />
        </div>
        <div className="info">
          <h1>{error.status}</h1>
          <div>
            <p>Looks like you are lost.</p>
            <p>The page you are looking for is not available!</p>
          </div>
          <Link to={'/'}>
            <GoHome size={25} /> go back home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import Loader from './pages/Loader'

const App = () => {
  return (
    <>
      <AppHeader />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <AppFooter />
    </>
  )
}

export default App

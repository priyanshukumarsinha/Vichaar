import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Membership from './pages/Membership'
import SigninPage from './pages/SigninPage.jsx'
import SignupPage from './pages/SignupPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: LandingPage
    },
    {
        path: '/about',
        Component: About
    },
    {
        path: '/membership',
        Component: Membership
    },
])

export { router }
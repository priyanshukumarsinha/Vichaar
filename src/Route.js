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
    // {
    //     path: '/write',
    //     element : <h1>Write is under Construction</h1>
    // },
    {
        path: '/signin',
        Component : SigninPage
    },
    {
        path: '/signup',
        Component : SignupPage
    }
])

export { router }
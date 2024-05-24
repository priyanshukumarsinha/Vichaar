import { createBrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Membership from './pages/Membership'
import WritePage from './pages/WritePage'

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
    {
        path : '/write',
        Component : WritePage
    }
])

export { router }
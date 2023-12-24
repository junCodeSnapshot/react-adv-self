import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider, NavLink, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes'
import logo from '../logo.svg'



// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <h1>Home Page</h1>
//     },
//     {
//         path: '/users',
//         element: <h1>Users Pages</h1>
//     },
//     {
//         path: '/about',
//         element: <h1>About</h1>
//     }
// ])

export const Navigations = () => {
    return (
        // <RouterProvider router={router} />
        <Suspense fallback={<span> Loading... </span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React logo' />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={name}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>

                        {
                            routes.map(route => (
                                <Route
                                    key={route.name}
                                    path={route.path}
                                    element={<route.Components />}
                                />)
                            )}

                        {
                            /* <Route path='lazy1' element={ <LazyPage1 /> } />
                            <Route path='lazy2' element={ <LazyPage2 /> } />
                            <Route path='lazy3' element={ <LazyPage3 /> } /> */
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
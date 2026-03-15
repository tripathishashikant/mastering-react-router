import { NavLink } from "react-router-dom"
import { routes } from '@/router'

function SideNav() {
    const dashboardRoutes = routes[0]?.children.find((route) => route.path === 'dashboard') || {}

    console.log('dashboardRoutes ', dashboardRoutes.children)

    return (
        <aside className="page__sideNav sideNav">
            <h2>Side Navigation</h2>
        </aside>
    )
}

export default SideNav
import { createBrowserRouter as Router } from "react-router-dom"

import RootLayout from "@/layouts/RootLayout"
import DashboardLayout from "@/layouts/DashboardLayout"
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'

import { rootLoader, loginLoader, dashboardLoader } from "@/utils/loader.utils"
import { loginAction } from '@/utils/actions.utils'

const routes = [
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: rootLoader,
            },
            {
                id: 'projectsData',
                path: 'dashboard',
                loader: dashboardLoader,
                Component: DashboardLayout,
                children: [
                    {
                        index: true,
                        Component: Dashboard,
                    }
                ]
            },
            {
                path: 'login',
                loader: loginLoader,
                Component: Login,
                action: loginAction,
            }
        ]
    },
]

const router = Router(routes);

export default router;
import { createBrowserRouter as Router } from "react-router-dom"

import RootLayout from "@/layouts/RootLayout"
import Test from "@/pages/Test"
import Login from '@/pages/Login'

import { rootLoader, loginLoader } from "@/utils/loader.utils"
import { loginAction } from '@/utils/actions.utils'

const routes = [
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                loader: rootLoader,
                Component: Test
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
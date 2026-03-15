import { Outlet, useNavigate, useLoaderData } from 'react-router-dom'
import { removeUserToken } from '@/utils/auth.utils'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import SideNav from '@/components/common/SideNav'

function DashboardLayout() {
    const navigate = useNavigate()
    const postsData = useLoaderData()

    console.log('use post data ', postsData)

    const handleLogout = () => {
        removeUserToken()
        navigate('/login')
    }

    return (
        <div className='page'>
            <Header />
            <section className="page__mainContent mainContent">
                <button className="page__logout logout" onClick={handleLogout}>Logout</button>
                <SideNav />
                <Outlet />
            </section>
            <Footer />
        </div>
    )
}

export default DashboardLayout
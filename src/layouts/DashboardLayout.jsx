import { Outlet } from 'react-router-dom'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

function DashboardLayout() {
    return (
        <div className='page'>
            <Header />
            <section className="page__mainContent mainContent">
                <Outlet />
            </section>
            <Footer />
        </div>
    )
}

export default DashboardLayout
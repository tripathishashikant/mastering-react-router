import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <div className='saasPortal'>
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout
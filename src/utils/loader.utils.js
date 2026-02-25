import { redirect } from 'react-router-dom'
import { isAuthenticated } from "@/utils/auth.utils"


export const rootLoader = () => redirect('/dashboard')

export const dashboardLoader = () => {
    if (!isAuthenticated()) return redirect('/login')

    // TODO: fetch projects data here
    
    return null
}

export const loginLoader = () => {
    if (isAuthenticated()) return redirect('/')
    
    // TODO: fetch user data here

    return null
}
import { redirect } from 'react-router-dom'
import { isAuthenticated } from "@/utils/auth.utils"


export const rootLoader = () => redirect('/dashboard')

export const dashboardLoader = async () => {
    if (!isAuthenticated()) return redirect('/login')

    // const response = await fetch('posts.json')
    // const posts = await response.json()
    
    return null
}

export const loginLoader = async () => {
    if (isAuthenticated()) return redirect('/')

    const response = await fetch('users.json')
    const users = await response.json()

    return users
}
import { redirect } from 'react-router-dom'
import { isAuthenticated } from "@/utils/auth.utils"


export const rootLoader = () => {
    if (!isAuthenticated()) return redirect('/login')
    
    return null
}

export const loginLoader = () => {
    if (isAuthenticated()) return redirect('/')

    return null
}
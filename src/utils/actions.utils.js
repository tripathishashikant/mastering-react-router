import { redirect } from 'react-router-dom'
import { setUserToken } from "@/utils/auth.utils"

export const loginAction = async ( { request }) => {
    const formData = await request.formData()
    const username = formData.get('username')
    const pass = formData.get('pass')

    // TODO: compare username and password using user data and set user token

    if (username === 'admin' && pass === '123') {
        setUserToken()

        return redirect('/')
    }

    return { error: 'Username and Password combination is incorrect.' }
}
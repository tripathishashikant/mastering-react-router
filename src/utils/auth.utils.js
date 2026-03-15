export const isAuthenticated = () => !!localStorage.getItem('userToken')

export const setUserToken = () => localStorage.setItem('userToken', 'abc-123-xyz')

export const removeUserToken = () => localStorage.removeItem('userToken')

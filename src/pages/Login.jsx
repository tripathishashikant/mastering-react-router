import { Form } from 'react-router-dom'

function Login() {
    return (
        <>
            <section className="login">
                <Form action="/login" method="post">
                    <label htmlFor="username">Username</label>
                    <input id="username" name='username'  type='text' placeholder='Enter user name...'></input>
                    <label htmlFor="pass">Username</label>
                    <input id="pass" name='pass' type='password' placeholder='Enter user name...'></input>
                    <button type='submit'>Submit</button>
                </Form>
            </section>
        </>
    )
}

export default Login

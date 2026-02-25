import { Form } from 'react-router-dom'

import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

function Login() {
    return (
        <>
            <section className="page">
                <Header />
                <main className='page__mainContent mainContent'>
                    <Form action="/login" method="post" clasName='form'>
                        <section className="form__formField form__username">
                            <label htmlFor="username">Username</label>
                            <input id="username" name='username'  type='text' placeholder='Enter user name here'></input>
                        </section>
                        <section className="form__formField form__pass">
                            <label htmlFor="pass">Password</label>
                            <input id="pass" name='pass' type='password' placeholder='Enter password here'></input>
                        </section>
                        <section className="form__formField form__submit">
                            <button type='submit'>Submit</button>
                        </section>
                    </Form>
                </main>
                <Footer />
            </section>
        </>
    )
}

export default Login

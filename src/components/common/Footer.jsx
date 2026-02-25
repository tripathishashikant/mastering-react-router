function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="page__footer footer">
            <p>
                <span className="footer__copyright">&copy;</span>
                <span className='footer__year'>{year}</span>
            </p>
        </footer>
    )
}

export default Footer
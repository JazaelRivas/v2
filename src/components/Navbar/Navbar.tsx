
const Navbar = () => {
    return (
        <nav className="navbar-main">
            <div className="navbar-logo">
                <a href="">Logo</a>
            </div>
            <div className="navbar-content">
                <ul className="navbar-list">
                    <li><a className="navbar-link" href="/">Index</a></li>
                    <li><a className="navbar-link" href="/">Inspiration</a></li>
                    <li><a className="navbar-link" href="/">Projects</a></li>
                    <li><a className="navbar-link" href="/">Passions</a></li>
                    <li><a className="navbar-link" href="/">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
const Footer = () =>{
    return (
        <footer className="footer-content">
            <div className="footer-logo">
                <a href="">Logo</a>
            </div>
            <div className="footer-links">
                <ul className="footer-list">
                    <li className="footer-list-item" ><a className="footer-link" href="/">Index</a></li>
                    <li className="footer-list-item" ><a className="footer-link" href="/">Inspiration</a></li>
                    <li className="footer-list-item" ><a className="footer-link" href="/">Projects</a></li>
                    <li className="footer-list-item" ><a className="footer-link" href="/">Passions</a></li>
                    <li className="footer-list-item" ><a className="footer-link" href="/">Contact</a></li>
                </ul>
                <div className="footer-media">
                    <img className="footer-media-image" src={require('../../images/linkedin.png')} alt="arrowDown" />
                    <img className="footer-media-image-2"  src={require('../../images/github-sign.png')} alt="arrowDown" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
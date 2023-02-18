import Footer from "../Footer/Footer"
import { Section1, Section2 , Section3 , Section4, Section5 } from "../../sections"
const Layout = () => {
    return (
        <div className="layout-main">
            <div className="layout-upper-section">   
                <Section1 />
            </div>
            <div className="layout-section">
                <Section2 />
            </div>
            <div className="layout-section">
                <Section3 />
            </div>
            <div className="layout-section">
                <Section4 />
            </div>
            <div className="layout-section">
                <Section5 />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
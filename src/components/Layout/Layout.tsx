import Footer from "../Footer/Footer"
import { Section1, Section2 , Section3 , Section4, Section5 } from "../../sections"
import ScrollToSection from "../../ScrollToView"
const Layout = () => {
    const sections = [
        { id: 'section2', duration: 5000 },
        { id: 'section3', duration: 5000 },
        { id: 'section4', duration: 5000 },
        { id: 'section5', duration: 5000 },
        { id: 'footer', duration: 3000 },
      ];

      const scrollDuration = 4000; // 3 seconds
    return (
        <div className="layout-main">
            <ScrollToSection sections={sections} scrollDuration={scrollDuration}/>
            <div className="layout-upper-section">   
                <Section1 />
            </div>
            <div className="layout-section" id="section2">
                <Section2 />
            </div>
            <div className="layout-section" id="section3">
                <Section3 />
            </div>
            <div className="layout-section" id="section4">
                <Section4 />
            </div>
            <div className="layout-section" id="section5">
                <Section5 />
            </div>
            <div id="footer">
            <Footer />
            </div>
           
        </div>
    )
}

export default Layout
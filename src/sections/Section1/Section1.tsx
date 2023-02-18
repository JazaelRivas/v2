import Navbar from "../../components/Navbar/Navbar"

const Section1 = () => {
    return (
        <div className="section-1">
            <Navbar/>
            <section className="section-1-content">
                <article className="article-content">
                    <p className="article-phrase">
                        “It is far better to grasp the universe as it really is than to persist in delusion, however satisfying and reassuring.”
                    </p>
                    <h2 className="article-title">-carl sagan</h2>
                </article>
                <div className="section-1-navigation">
                    <button className="section-1-link button">keep exploring</button>
                    <img className="section-image" src={require('../../images/arrow-down.png')} alt="arrowDown" />
                </div>
            </section>
        </div>
    )
}

export default Section1
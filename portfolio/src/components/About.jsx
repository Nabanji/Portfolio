import passport from '../assets/passport.jpg'

function About() {

    return (
        <section className='about d-flex' id='aboutpage'>
            <div className="container d-flex gap-5 justify-content-center">
                <img src={passport} alt="passport-photo" className='about-image' />

                <div className="about-description d-flex flex-column justify-content-center">
                    <p className="h1">Bio</p>
                    <p className='fs-5'>I am a proficient software developer with a strong foundation in web development technologies. With expertise in HTML, CSS, Bootstrap, JavaScript, React, Node.js and Express.js and MYSQL. I excel at building responsive, dynamic, and user-friendly web applications.</p>
                    <p className='fs-5'>My ability to seamlessly integrate modern design principles with efficient code ensures that every project he works on is optimized for both performance and user experience. I am passionate about creating web solutions that are not only aesthetically pleasing but also functional, scalable, and accessible.</p>
                    <h1 className="h3">Skills: </h1>
                    <div className="skill-icons d-flex gap-3">
                        <i className="fa-brands fa-html5 html-icon"></i>
                        <i className="fa-brands fa-css3-alt css-icon"></i>
                        <i className="fa-brands fa-bootstrap bootstrap-icon"></i>
                        <i className="fa-brands fa-js javascript-icon"></i>
                        <i className="fa-brands fa-react react-icon"></i>
                        <i className="fa-brands fa-node-js nodejs-icon"></i>
                        <i className="fa-solid fa-database database-icon"></i>
                    </div>
                    <h1 className="h3 mt-3">Technologies: </h1>
                    <div className="technology-icons d-flex gap-2">
                        <i className="fa-brands fa-git-alt git-icon"></i>
                        <i className="fa-brands fa-github github-icon"></i>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
import passport from '../assets/passport.jpg'

function About() {
    return (
        <section className='about d-flex' id='aboutpage'>
            <div className="container d-flex gap-5 justify-content-center">
                <img src={passport} alt="passport-photo" className='about-image' />

                <div className="about-description d-flex flex-column justify-content-center">
                    <p className="h1">Bio</p>
                    <p className='fs-5'>Prince Nabanji is a proficient software engineer with a strong foundation in front-end development technologies. With expertise in HTML, CSS, Bootstrap, JavaScript, and React, Prince excels at building responsive, dynamic, and user-friendly web applications.</p>
                    <p className='fs-5'>His ability to seamlessly integrate modern design principles with efficient code ensures that every project he works on is optimized for both performance and user experience. Prince is passionate about creating web solutions that are not only aesthetically pleasing but also functional, scalable, and accessible.</p>
                    <h1 className="h1">Skills</h1>
                    <div className="skill-icons d-flex gap-3">
                        <i className="fa-brands fa-html5 html-icon"></i>
                        <i className="fa-brands fa-css3-alt css-icon"></i>
                        <i className="fa-brands fa-bootstrap bootstrap-icon"></i>
                        <i className="fa-brands fa-js javascript-icon"></i>
                        <i className="fa-brands fa-react react-icon"></i>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
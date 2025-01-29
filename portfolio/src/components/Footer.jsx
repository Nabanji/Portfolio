function Footer() {
    return (
        <section className="footer p-5" id="footer">
            <div className="container d-flex justify-content-between align-items-center newsletter m-5 socials">
                <h1 className="h3">Socials</h1>

                <div className="social-links d-flex gap-4">
                        <a href="https://github.com/Nabanji"><i className="fa-brands fa-github fs-2"></i></a>
                        <a href="https://www.linkedin.com/in/prince-nabanji-833538282/"><i className="fa-brands fa-linkedin fs-2"></i></a>
                        <a href="https://www.instagram.com/naban.ji/"><i className="fa-brands fa-instagram fs-2"></i></a>
                    </div>
            </div>

            <div className="container d-flex justify-content-between gap-4 links">
                <div className="links-div">
                    <p className="fs-3"><strong>About me</strong></p>
                    <p>I'm Prince Nabanji. A passionate Software Developer specializing in building dynamic and scalable web applications</p>
                    <a href="#aboutpage"><button className="read-more">Read More</button></a>
                </div>

                <div className="links-div">
                    <p className="fs-3"><strong>Links</strong></p>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutpage">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Work</a></li>
                        <li><a href="https://github.com/Nabanji">Github</a></li>
                        <li><a href="https://github.com/Nabanji">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="links-div newsletter">
                    <p className="fs-3"><strong>Let's work together</strong></p>
                    <p className="fs-6">You can contact me via email through</p>
                    <ul className="contact-me">
                        <li>Email: <strong>pnabanji@gmail.com</strong></li>
                        <li>Phone: <strong>0792067722</strong></li>
                    </ul>
                </div>

            </div>

            <div>
                <p className="copyright fs-6 text-center m-5" style={{fontWeight: 'bold'}}>
                    <span style={{fontStyle: 'italic'}}>Copyright</span> &copy;Prince Nabanji 2025, All right reserved
                </p>
            </div>

        </section>
    )
}

export default Footer
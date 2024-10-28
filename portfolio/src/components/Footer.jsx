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
                    <p className="fs-3">About me</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolore totam cumque in ullam incidunt recusandae veniam doloribus tempora neque!</p>
                    <a href="#aboutpage"><button className="read-more">Read More</button></a>
                </div>

                <div className="links-div">
                    <p className="fs-3">Links</p>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#aboutpage">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#home">Work</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </div>

                <div className="links-div newsletter">
                    <p className="fs-3">Newsletter</p>
                    <p className="fs-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, sapiente?</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-outline-secondary" type="submit">Submit</button>
                    </div>
                </div>

            </div>

            <div>
                <p className="fs-6 text-center m-5">
                    Copyright &copy;Prince Nabanji 2024, All right reserved
                </p>
            </div>

        </section>
    )
}

export default Footer
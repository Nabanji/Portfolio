function Footer() {
    return (
        <section className="footer p-5" id="footer">
            <div className="container d-flex justify-content-between">
                <div>
                    <h1 className="h2">Prince</h1>
                    <p className="fs-5">All rights reserved &copy;Prince Nabanji</p>
                </div>
                <div>
                    <h1 className="h2">Newsletter</h1>
                    <input 
                        type="text"
                        placeholder='Submit your email' 
                    />
                </div>
                <div>
                    <h1 className="h2">Follow Me</h1>
                    <div className="social-links d-flex gap-4">
                        <i className="fa-brands fa-github fs-2"></i>
                        <i className="fa-brands fa-linkedin fs-2"></i>
                        <i className="fa-brands fa-instagram fs-2"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
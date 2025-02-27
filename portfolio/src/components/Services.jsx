function Services() {
    return (
        <section className="services d-flex m-0 p-5" id='services'>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="services-intro d-flex align-items-center flex-column">
                    <h1 className="h1 fw-semibold">Services</h1>
                    <div className="underline mb-3"></div>
                </div>

                <div className="service d-flex gap-3">

                    <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
                        <i className="fa-solid fa-desktop mt-5"></i>
                        <p className="h2 mt-3">Web Design</p>
                        <p className='mt-3 mb-3'> I specialize in creating responsive, user-friendly interfaces tailored to meet your unique business needs and customer needs. </p>
                    </div>

                    <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
                        <i className="fa-solid fa-binoculars mt-5"></i>
                        <p className="h2 mt-3">Full-stack Development</p>
                        <p className='mt-3 mb-3'>I develop full-stack web applications provide scalable solutions that seamlessly connect frontend, backend, and databases.</p>
                    </div>

                    <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
                        <i className="fa-solid fa-chart-line mt-5"></i>
                        <p className="h2 mt-3">Web optimization & maintenance</p>
                        <p className='mt-3 mb-3'> I fine-tune your website to ensure fast load times, efficient resource usage, and optimal performance across all web-oriented devices.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services
function Services() {
    return (
        <section className="services d-flex m-5 p-5" id='services'>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="services-intro">
                    <h1 className="h1 fw-semibold mb-sm-4">Services</h1>
                </div>

                <div className="service container d-flex gap-3">
                    <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
                        <i className="fa-solid fa-desktop mt-5"></i>
                        <p className="h2 mt-3">Web development</p>
                        <p className='mt-3 mb-3'> I specialize in creating responsive, user-friendly websites tailored to meet your unique business needs and customer needs. </p>
                    </div>

                    <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
                        <i className="fa-solid fa-binoculars mt-5"></i>
                        <p className="h2 mt-3">Digital Marketing</p>
                        <p className='mt-3 mb-3'>I help businesses improve their online visibility and drive targeted traffic. I create strategies that convert visitors into customers.</p>
                    </div>

                    <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
                        <i className="fa-solid fa-chart-line mt-5"></i>
                        <p className="h2 mt-3">Optimization</p>
                        <p className='mt-3 mb-3'> I fine-tune your website to ensure fast load times, efficient resource usage, and optimal performance across all web-oriented devices.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
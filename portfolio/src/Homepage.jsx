import './Homepage.css';
import passport from './assets/passport.jpg';

function App() {

  return (
    <>
     <section className="home">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">Prince Nabanji</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a href="#aboutpage" className="nav-link">About</a>
              </li>
              <li className="nav-item me-4">
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">Work</a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container introduction d-flex gap-4">
        <div className='intro-desc d-flex flex-column justify-content-center'>
          <p className='fs-3 intro'>Hi, My name is</p>
          <h1 className="my-name">Prince Nabanji.</h1>
          {/* <p className='description1'>A Software Engineer.</p> */}
          <p className='fs-4 description2'>I'm a software engineer currently specializing in building and occassionaly designing exceptional digital experiences. Currently, I'm focused on building accessible, human centered products.</p>
          <a href="#" className="btn btn-outline-info profile-btn">Hire Me</a>
        </div>
        <img src={passport} alt="passport" className='passport-photo'/>
      </div>
     </section>

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

     <section className="services d-flex m-5 p-5" id='services'>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="services-intro">
          <h1 className="h1 fw-semibold mb-sm-4">Services</h1>
          <p className="h3"></p>
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

     <section className="location d-flex justify-content-center align-items-center">
      <div className="container">
        <marquee><h1 className='fw-medium location-desc'>SOFTWARE ENGINEER FROM NAIROBI, KENYA</h1></marquee>
      </div>
     </section>

     <section className="contact-me d-flex flex-column justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="h1">Contact Me</h1>
        <p className="fs-1">Let's start a new project together</p>
        <div className="contact-details d-flex justify-content-center gap-4">
          <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <i className="fa-solid fa-location-dot fs-4"></i>
            <p className="fs-3 pt-2">Location</p>
            <p className="fs-4">Nairobi, Kenya</p>
          </div>
  
          <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <i className="fa-solid fa-phone fs-4"></i>
            <p className="fs-3 pt-2">Phone</p>
            <p className="fs-4">(0792) 067 722</p>
          </div>
  
          <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <i className="fa-solid fa-envelope fs-4"></i>
            <p className="fs-3 pt-2">Email</p>
            <p className="fs-4">pnabanji@gmail.com</p>
          </div>
  
        </div>
      </div>
     </section>


    </>
  )

}

export default App

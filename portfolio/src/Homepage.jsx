import './Homepage.css';
import passport from './assets/passport.jpg';

function App() {

  return (
    <>
     <section className="home">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">Prince Nabanji</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a href="#aboutpage" className="nav-link">About</a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">Services</a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">Work</a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">Contact</a>
              </li>
              <li className="nav-item">
                <a href="#" className="btn btn-outline-info">Resume</a>
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
          <a href="#" className="btn btn-outline-info profile-btn">Check out my Profile</a>
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
          <div className="skill-icons d-flex gap-2">
            <i className="fa-brands fa-html5 fs-1 html-icon"></i>
            <i className="fa-brands fa-css3-alt fs-1 css-icon"></i>
            <i className="fa-brands fa-bootstrap fs-1 bootstrap-icon"></i>
            <i className="fa-brands fa-js fs-1 javascript-icon"></i>
            <i className="fa-brands fa-react fs-1 react-icon"></i>
          </div>
        </div>
      </div>
     </section>

     <section className="services d-flex flex-column justify-content-center align-items-center m-5 p-5">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="services-intro">
          <h1 className="h1 fw-light m-5">Services</h1>
        </div>
        <div className="service d-flex gap-5">
          <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
            <i className="fa-solid fa-desktop"></i>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
            <i className="fa-solid fa-desktop"></i>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="card d-flex justify-content-center align-items-center text-center pt-3 pb-3">
            <i className="fa-solid fa-desktop"></i>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </div>
     </section>

    </>
  )

}

export default App

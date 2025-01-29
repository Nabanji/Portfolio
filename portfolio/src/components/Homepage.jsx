import passport from '../assets/passport.jpg';

function Homepage() {
  return (
    <>
     <section className="home" id='home'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#home">Prince Nabanji</a>
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
                <a href="#projects" className="nav-link">Work</a>
              </li>
              <li className="nav-item me-4">
                <a href="#footer" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container introduction d-flex gap-4">
        <div className='intro-desc d-flex flex-column justify-content-center'>
          <p className='fs-3 intro'>Hi, My name is</p>
          <h1 className="my-name">Prince Nabanji.</h1>
          <p className='fs-4 description2'>I'm a software developer currently specializing in building web applications and occassionaly designing exceptional digital experiences.</p>
          <a href="#footer" className="btn btn-outline-info profile-btn">Hire Me</a>
        </div>
        <img src={passport} alt="passport" className='passport-photo'/>
      </div>
     </section>
    </>
  )

}

export default Homepage;

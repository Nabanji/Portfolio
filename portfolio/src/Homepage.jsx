import './Homepage.css';
import passport from './assets/passport.jpg';

function App() {

  return (
    <>
     <section className="home">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">Prince Nabanji</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a href="#" className="nav-link">About</a>
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
        <div>
          <p className='fs-3 intro'>Hi, My name is</p>
          <h1 className="my-name">Prince Nabanji.</h1>
          <p className='description1'>I build things for the web.</p>
          <p className='fs-4 description2'>I'm a software engineer currently specializing in building and occassionaly designing exceptional digital experiences. Currently, I'm focused on building accessible, human centered products.</p>
          <a href="#" className="btn btn-outline-info profile-btn">Check out my Profile</a>
        </div>
        <img src={passport} alt="passport" className='passport-photo'/>
      </div>
     </section>
    </>
  )

}

export default App

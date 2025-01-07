import eliteKicks from '../assets/Elite Kicks.png';

export default function Projects() {
    return (
        <div className="projects-section" id="projects">
            <h1>Projects</h1>
            <div className="underline"></div>

            <div className="projects-container">

                <div className="project">
                    <img src={eliteKicks} alt="project" width='100%' height='auto' />
                    <div className="project-desc">
                        <div className="description">
                            <h2 className="h4">Elite Kicks</h2>
                            <p className="fs-5">E-commerce design for selling shoes</p>
                        </div>
                        <div className="view">
                            <a href="https://nabanji.github.io/Elite-Kicks/" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <img src={eliteKicks} alt="project" width='100%' height='auto' />
                    <div className="project-desc">
                        <div className="description">
                            <h2 className="h4">Elite Kicks</h2>
                            <p className="fs-5">E-commerce design for selling shoes</p>
                            {/* <p className="fs-6">A modern, user-friendly e-commerce frontend featuring intuitive navigation, responsive design, and visually appealing product displays.</p> */}
                        </div>
                        <div className="view">
                            <a href="https://nabanji.github.io/Elite-Kicks/" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

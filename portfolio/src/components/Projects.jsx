import eliteKicks from '../assets/Elite Kicks.png';
import easyHire from '../assets/easyhire-sc.png';
import mayflower from '../assets/mayflower.png';

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
                        </div>
                        <div className="view">
                            <a href="https://nabanji.github.io/Elite-Kicks/" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <img src={easyHire} alt="project" width='100%' height='auto' />
                    <div className="project-desc">
                        <div className="description">
                            <h2 className="h4">EasyHire</h2>
                        </div>
                        <div className="view">
                            <a href="https://github.com/Nabanji/EasyHire" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img src={mayflower} alt="project" width='100%' height='auto' />
                    <div className="project-desc">
                        <div className="description">
                            <h2 className="h4">Mayflower</h2>
                        </div>
                        <div className="view">
                            <a href="https://mayflower-rose.vercel.app/" target="_blank"><i className="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

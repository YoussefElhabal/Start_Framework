import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <nav className="navbar navbar-expand-lg p-4 fixed-top">
            <div className="container">
                <Link className="navbar-brand text-uppercase text-white" to="home">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white me-3" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white me-3" to="portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white me-3" to="contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
        <footer>
            <div className="container py-5">
                <div className="row py-4 text-white text-center">
                    <div className="col-md-4">
                        <h3>Location</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Around The Web</h3>
                        <ul className="social list-unstyled d-flex justify-content-center gap-2">
                            <li>
                                <a className="text-white" href="https://facebook.com" target="_blank">
                                <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="https://twitter.com" target="_blank">
                                <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="https://linkedin.com" target="_blank">
                                <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="https://globe.gov" target="_blank">
                                <i className="fa-solid fa-globe"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>About Freelancer</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <p className="copyright p-4 text-white text-center mb-0">Copyright <span>&copy;</span> Your Website 2024</p>
        </footer>
        </>
    )
}

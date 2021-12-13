import './Navbar.css'
import { useState } from 'react' 

export default function Navbar() {

    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div>
            <nav>
                <div className="logo"><a href="">College.</a></div>
                <div className="toggle__menu" id="toggle-menu" onClick={handleClick}>
                    <i className="ion-android-menu"></i>
                </div>
                <ul className={`nav__list${show ? " show__menu" : ""}`} id="nav-menu">
                    <div className="close__menu" id="close-menu" onClick={handleClick}>
                        <i className="ion-android-close"></i>
                    </div>
                    <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Sobre</a></li>
                    <li className="nav__item _dropdown"><a href="#" className="nav__link">Paginas <i className="ion-android-arrow-dropdown dropdown__icon"></i></a>
                        <div className="megamenu">
                            <ul className="content">
                                <li className="megamenu__item header__megamenu">Cursos</li>
                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-android-desktop"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Informática</a>
                                        <p>Create your own user interface project</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-network"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Electronica</a>
                                        <p>Learn the basics of users experience design in 6 weeks</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-android-color-palette"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Desenhador Projectista</a>
                                        <p>Create your own user experience project</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-android-sync"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Gestão de Sistema Informática</a>
                                        <p>Get custom training for your employess</p>
                                    </div>
                                </li>
                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-card"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Contablidade e Gestão</a>
                                        <p>Get custom training for your employess</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="content">
                                <li className="megamenu__item header__megamenu">Design Courses & Workshop</li>
                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-android-color-palette"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">UI Bootcamp</a>
                                        <p>Create your own user interface project</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-social-designernews"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">UX Bootcamp</a>
                                        <p>Learn the basics of users experience design in 6 weeks</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-network"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">UX Project</a>
                                        <p>Create your own user experience project</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-ios-book"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Company Courses</a>
                                        <p>Get custom training for your employess</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="content">
                                <li className="megamenu__item header__megamenu">Design Courses & Workshop</li>
                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-android-color-palette"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">UI Bootcamp</a>
                                        <p>Create your own user interface project</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-social-designernews"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">UX Bootcamp</a>
                                        <p>Learn the basics of users experience design in 6 weeks</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-network"></i> 
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">UX Project</a>
                                        <p>Create your own user experience project</p>
                                    </div>
                                </li>

                                <li className="megamenu__item">
                                    <div className="menu__icon">
                                        <i className="ion-ios-book"></i>
                                    </div>
                                    <div className="megamenu__link">
                                        <a href="#">Company Courses</a>
                                        <p>Get custom training for your employess</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav__item"><a href="#" className="nav__link">Contacto</a></li>
                </ul>
            </nav>
        </div>
    ) 
}
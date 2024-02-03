import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleSideBarToggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className={open ? "sidebar open" : "sidebar"} id="sidebar">
                <ul>
                    <div className="logo">
                        <h2>Godope</h2>
                    </div>
                    <li><a href="/">Home</a></li>
                    <li><a href="#services">Tees</a></li>
                    <li><a href="#projects">Hoodies</a></li>
                    <li><a href="#about">Sweaters</a></li>
                    <li><a href="#about">Pants</a></li>
                    <p>&copy; 2023 Godope Pvt Ltd | Mens Apparel</p>
                </ul>
            </div>
            <nav id="navbar">
                <div className="container">
                    <div className="row">
                        <div className="logo col-lg-3 col-6 ps-3 ps-md-0">
                            <h2>Godope.</h2>
                        </div>
                        <div className="nav_menu col-lg-6 d-none d-lg-flex">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#services">Tees</a></li>
                                <li><a href="#projects">Hoodies</a></li>
                                <li><a href="#about">Sweaters</a></li>
                                <li><a href="#about">Pants</a></li>
                            </ul>
                        </div>
                        <div className="nav_actions col-lg-3 d-none d-lg-flex">
                            <a href="/login">
                                <div className="nav_btn">Login</div>
                            </a>
                        </div>
                        <div className="hamburger d-lg-none d-flex col-6" id="hamburger">
                            <div className={open ? "sidebar_toggle open" : "sidebar_toggle"} id="sidebar_toggle" onClick={() => { handleSideBarToggle() }}>
                                <div className="toggle_btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="cross">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
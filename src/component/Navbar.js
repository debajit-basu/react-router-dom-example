import React from 'react';

const Navbar = () => {
    return (
        <div style={{backgroundColor: '#e8bec6'}} className="p-2">
            <nav className="navbar navbar-expand-lg navbar-light">

                <span className="logo-font font-3x bold"style={{lineHeight:"3em",color: 'red'}}>React Router With Redux</span>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ml-5">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item ml-4">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item ml-4">
                            <a href="/about" className="nav-link">AboutUs</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

import React from 'react';
import 'assets/List_Website/KLD1312/scss/header.scss';
import Logo from 'assets/List_Website/KLD1312/images/logo_education.svg'
import { NavLink } from 'react-router-dom'
import ArrowDown from 'assets/List_Website/KLD1312/images/arrow_down.svg'
import Search from 'assets/List_Website/KLD1312/images/search.svg'
const Index = () => {

    return (
        <div className='header-kld1312'>
            <div className='list-nav'>
            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='nav'>
                <div className='nav-item'>Homepage</div>

                {/* Dropdown Pages */}
                <div className="dropdown">
                    <button className="dropdown-button">
                        Pages
                        <span className="dropdown-icon"><img src={ArrowDown} alt=''/></span>
                    </button>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <NavLink to="/page1">Item 1</NavLink>
                        </div>
                        <div className="dropdown-item">
                            <NavLink to="/page2">Item 2</NavLink>
                        </div>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Submenu <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/submenu1/item1">Subitem 1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/submenu1/item2">Subitem 2</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <NavLink to="/page3">Item 3</NavLink>
                        </div>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Submenu <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/submenu2/item1">Subitem 1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/submenu2/item2">Subitem 2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dropdown Courses */}
                <div className="dropdown">
                    <button className="dropdown-button">
                        Courses
                        <span className="dropdown-icon"><img src={ArrowDown} alt=''/></span>
                    </button>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <NavLink to="/course1">Item 1</NavLink>
                        </div>
                        <div className="dropdown-item">
                            <NavLink to="/course2">Item 2</NavLink>
                        </div>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Submenu <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/course1/sub1">Subitem 1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/course1/sub2">Subitem 2</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <NavLink to="/course3">Item 3</NavLink>
                        </div>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Submenu <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/course2/sub1">Subitem 1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/course2/sub2">Subitem 2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dropdown Blog */}
                <div className="dropdown">
                    <button className="dropdown-button">
                        Blog
                        <span className="dropdown-icon"><img src={ArrowDown} alt=''/></span>
                    </button>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            <NavLink to="/blog1">Item 1</NavLink>
                        </div>
                        <div className="dropdown-item">
                            <NavLink to="/blog2">Item 2</NavLink>
                        </div>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Submenu <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/blog1/sub1">Subitem 1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/blog1/sub2">Subitem 2</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown-item">
                            <NavLink to="/blog3">Item 3</NavLink>
                        </div>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Submenu <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/blog2/sub1">Subitem 1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/blog2/sub2">Subitem 2</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='nav-item'>About us</div>
                <div className='nav-item'>Contact</div>
            </div>
            <div className='logo'><img src={Search} alt='' width={24}/></div>

            </div>
        </div>
    );
}

export default Index;

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
                <NavLink to={'/website/template/KLD1312'} className='nav-item'>Homepage</NavLink>

                {/* Dropdown Courses */}
                <div className="dropdown">
                    <button className="dropdown-button">
                        Courses
                        <span className="dropdown-icon"><img src={ArrowDown} alt=''/></span>
                    </button>
                    <div className="dropdown-menu">
                        <NavLink to="/website/template/KLD1312/course" className="dropdown-item">
                            <NavLink >Course 1</NavLink>
                        </NavLink>
                        <div className="dropdown-submenu">
                            <div className="dropdown-item">
                                Course 2 <span className="dropdown-icon">▶</span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    <NavLink to="/website/template/KLD1312/course">Course 2.1</NavLink>
                                </div>
                                <div className="dropdown-item">
                                    <NavLink to="/website/template/KLD1312/course">Course 2.2</NavLink>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/website/template/KLD1312/course" className="dropdown-item">
                            <NavLink >Course 3</NavLink>
                        </NavLink>
                    </div>
                </div>
                <NavLink to={'/website/template/KLD1312/blog'} className='nav-item'>Blog</NavLink>
                <NavLink to={'/website/template/KLD1312/about'} className='nav-item'>About us</NavLink>
                <NavLink to={'/website/template/KLD1312/contact'} className='nav-item'>Contact</NavLink>
            </div>
            <div className='logo'><img src={Search} alt='' width={24}/></div>

            </div>
        </div>
    );
}

export default Index;

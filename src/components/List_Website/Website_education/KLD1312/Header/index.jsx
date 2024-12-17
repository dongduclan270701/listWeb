import React, { useState, useRef, useEffect } from 'react';
import 'assets/List_Website/KLD1312/scss/header.scss';
import Logo from 'assets/List_Website/KLD1312/images/logo_education.svg'
import { NavLink } from 'react-router-dom'
import ArrowDown from 'assets/List_Website/KLD1312/images/arrow_down.svg'
const Index = () => {
    const [isMenu, setIsMenu] = useState(false)
    const [isDropdownMenu, setIsDropdownMenu] = useState(false)
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const toggleSubMenu = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };
    const resetHeaderNav = () => {
        setIsDropdownMenu(false)
        setOpenSubMenu(null)
        setIsMenu(false)
    }
    return (
        <>
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
                                <span className="dropdown-icon"><img src={ArrowDown} alt='' /></span>
                            </button>
                            <div className="dropdown-menu">
                                <NavLink to={'/website/template/KLD1312/course'} className="dropdown-item">
                                    Course 1
                                </NavLink>
                                <div className="dropdown-submenu">
                                    <div className="dropdown-item">
                                        Course 2 <span className="dropdown-icon">▶</span>
                                    </div>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">
                                            <NavLink to={"/website/template/KLD1312/course"}>Course 2.1</NavLink>
                                        </div>
                                        <div className="dropdown-item">
                                            <NavLink to={"/website/template/KLD1312/course"}>Course 2.2</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to={"/website/template/KLD1312/course"} className="dropdown-item">
                                    Course 3
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to={'/website/template/KLD1312/blog'} className='nav-item'>Blog</NavLink>
                        <NavLink to={'/website/template/KLD1312/about'} className='nav-item'>About us</NavLink>
                        <NavLink to={'/website/template/KLD1312/contact'} className='nav-item'>Contact</NavLink>
                    </div>
                    <NavLink to={'/website/template/KLD1312/account'} className='logo'><i className='fa fa-user' style={{ color: 'white', fontSize: 24, cursor: 'pointer' }}></i></NavLink>

                </div>
                <div className='mobile-list-nav'>
                    <img src={Logo} alt='Logo' />
                    <div className='button-list-nav'>
                        <NavLink to={'/website/template/KLD1312/account'} className='logo'><i className='fa fa-user' style={{ color: 'white', fontSize: 24, cursor: 'pointer' }}></i></NavLink>
                        <div style={{ display: 'flex', gap: 15, alignItems: 'center', paddingRight: 15 }}>

                            <div id="checkbox2" className={isMenu ? 'checked' : ''}></div>
                            <label class="toggle toggle2" for="checkbox2" onClick={() => { setIsMenu(!isMenu) }}>
                                <div id="bar4" class="bars"></div>
                                <div id="bar5" class="bars"></div>
                                <div id="bar6" class="bars"></div>
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`nav-mobile-kld1312 ${isMenu ? 'menu-show' : 'menu-hide'}`}>
                <div className='list-nav'>
                    <NavLink to={'/website/template/KLD1312'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-home'></i> Homepage</NavLink>
                    <div>
                        <div
                            onClick={() => setIsDropdownMenu(!isDropdownMenu)}
                            className='nav-item'
                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                                <i className='fa fa-book-open'></i>Courses
                            </span>
                            <i className={isDropdownMenu ? 'fa fa-chevron-right active-fa-chevron-right' : 'fa fa-chevron-right deactivate-fa-chevron-right'}></i>
                        </div>
                        <ul className={`sub-menu-kld1312 ${isDropdownMenu ? 'open' : ''}`}>
                        <li><NavLink to={'/website/template/KLD1312/course'} onClick={resetHeaderNav}><div>Course 1</div> <span><i className='fa'></i></span></NavLink></li>
                            <li>
                                <button onClick={() => toggleSubMenu(1)}>
                                    <div>Course 2</div> <span><i className={openSubMenu === 1 ? 'fa fa-chevron-right active-fa-chevron-right' : 'fa fa-chevron-right deactivate-fa-chevron-right'}></i></span>
                                </button>
                                
                                    <ul className={`sub-sub-menu-kld1312 ${openSubMenu === 1 ? 'open-sub' : ''}`}>
                                        <li><NavLink to={'/website/template/KLD1312/course'} onClick={resetHeaderNav}>
                                            <div>Course 2.1</div> <span></span>
                                        </NavLink></li>
                                        <li><NavLink to={'/website/template/KLD1312/course'} onClick={resetHeaderNav}>
                                            <div>Course 2.2</div> <span></span>
                                        </NavLink></li>
                                        <li><NavLink to={'/website/template/KLD1312/course'} onClick={resetHeaderNav}>
                                            <div>Course 2.2</div> <span></span>
                                        </NavLink></li>
                                        <li><NavLink to={'/website/template/KLD1312/course'} onClick={resetHeaderNav}>
                                            <div>Course 2.3</div> <span></span>
                                        </NavLink></li>
                                    </ul>
                                
                            </li>
                            <li><NavLink to={'/website/template/KLD1312/course'} onClick={resetHeaderNav}><div>Course 3</div> <span><i className='fa'></i></span></NavLink></li>
                        </ul>
                    </div>

                    <NavLink to={'/website/template/KLD1312/blog'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-blog'></i>Blog</NavLink>
                    <NavLink to={'/website/template/KLD1312/about'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-address-book'></i>About us</NavLink>
                    <NavLink to={'/website/template/KLD1312/contact'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-message'></i>Contact</NavLink>
                </div>
            </div>

        </>
    );
}

export default Index;

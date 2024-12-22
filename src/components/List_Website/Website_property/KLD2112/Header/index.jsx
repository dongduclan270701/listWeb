import React, { useState, useRef, useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/header.scss';
import Logo from 'assets/List_Website/KLD2112/images/logo-property.svg'
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
            <div className='header-kld2112'>
                <div className='list-nav'>
                    <div className='logo'>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <div className='nav'>
                        <NavLink to={''} className='nav-item'>Về tôi</NavLink>
                        <div class="dropdown">
                            <button class="dropbtn">Tìm kiếm nhà <i className='fa fa-chevron-right'></i></button>
                            <div class="dropdown-content">
                                <a href="#">Phía Đông</a>
                                <a href="#">Phía Tây</a>
                                <a href="#">Quảng Trường</a>
                                <a href="#">Trung Tâm</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Người bán <i className='fa fa-chevron-right'></i></button>
                            <div class="dropdown-content">
                                <a href="#">Quá trình bán hàng</a>
                                <a href="#">Giao dịch đã bán</a>
                                <a href="#">Đánh giá nhà</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Người mua <i className='fa fa-chevron-right'></i></button>
                            <div class="dropdown-content">
                                <a href="#">Quy trình mua nhà</a>
                                <a href="#">Danh sách hiện tại</a>
                            </div>
                        </div>
                        <NavLink to={''} className='nav-item'>Báo cáo thị trường</NavLink>
                        <NavLink to={''} className='nav-item'>Kết nối</NavLink>
                    </div>
                    <NavLink to={''} className='logo'><i className='fa fa-user' style={{ color: 'white', fontSize: 24, cursor: 'pointer' }}></i></NavLink>

                </div>
                <div className='mobile-list-nav'>
                    <img src={Logo} alt='Logo' />
                    <div className='button-list-nav'>
                        <NavLink to={'/website/template/KLD2112/account'} className='logo'><i className='fa fa-user' style={{ color: 'white', fontSize: 24, cursor: 'pointer' }}></i></NavLink>
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
            <div className={`nav-mobile-kld2112 ${isMenu ? 'menu-show' : 'menu-hide'}`}>
                <div className='list-nav'>
                    <NavLink to={'/website/template/KLD2112'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-home'></i> Homepage</NavLink>
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
                        <ul className={`sub-menu-kld2112 ${isDropdownMenu ? 'open' : ''}`}>
                            <li><NavLink to={'/website/template/KLD2112/course'} onClick={resetHeaderNav}><div>Course 1</div> <span><i className='fa'></i></span></NavLink></li>
                            <li>
                                <button onClick={() => toggleSubMenu(1)}>
                                    <div>Course 2</div> <span><i className={openSubMenu === 1 ? 'fa fa-chevron-right active-fa-chevron-right' : 'fa fa-chevron-right deactivate-fa-chevron-right'}></i></span>
                                </button>

                                <ul className={`sub-sub-menu-kld2112 ${openSubMenu === 1 ? 'open-sub' : ''}`}>
                                    <li><NavLink to={'/website/template/KLD2112/course'} onClick={resetHeaderNav}>
                                        <div>Course 2.1</div> <span></span>
                                    </NavLink></li>
                                    <li><NavLink to={'/website/template/KLD2112/course'} onClick={resetHeaderNav}>
                                        <div>Course 2.2</div> <span></span>
                                    </NavLink></li>
                                    <li><NavLink to={'/website/template/KLD2112/course'} onClick={resetHeaderNav}>
                                        <div>Course 2.2</div> <span></span>
                                    </NavLink></li>
                                    <li><NavLink to={'/website/template/KLD2112/course'} onClick={resetHeaderNav}>
                                        <div>Course 2.3</div> <span></span>
                                    </NavLink></li>
                                </ul>

                            </li>
                            <li><NavLink to={'/website/template/KLD2112/course'} onClick={resetHeaderNav}><div>Course 3</div> <span><i className='fa'></i></span></NavLink></li>
                        </ul>
                    </div>

                    <NavLink to={'/website/template/KLD2112/blog'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-blog'></i>Blog</NavLink>
                    <NavLink to={'/website/template/KLD2112/about'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-address-book'></i>About us</NavLink>
                    <NavLink to={'/website/template/KLD2112/contact'} className='nav-item' onClick={resetHeaderNav}><i className='fa fa-message'></i>Contact</NavLink>
                </div>
            </div>

        </>
    );
}

export default Index;

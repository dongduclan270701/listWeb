import React, { useState } from 'react';
import 'assets/List_Website/KLD1812/scss/header.scss'
import Logo from 'assets/List_Website/KLD1812/images/logo-restaurant.svg'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <div className='header-kld1813'>
            <div className='desktop'>
                <div className='nav-bar-left'>
                    <NavLink to>cafe kass</NavLink>
                    <NavLink to>bloom</NavLink>
                    <NavLink to>baker's house</NavLink>
                </div>
                <img src={Logo} alt="" />
                <div className='nav-bar-right'>
                    <NavLink to>Holiday</NavLink>
                    <NavLink to>Private event</NavLink>
                    <NavLink to>about</NavLink>
                </div>
            </div>
            <div className='mobile'>
                <img src={Logo} alt="" />
                <div id="checkbox2" className={isMenu ? 'checked' : ''}></div>
                <label class="toggle toggle2" for="checkbox2" onClick={() => { setIsMenu(!isMenu) }}>
                    <div id="bar4" class="bars"></div>
                    <div id="bar5" class="bars"></div>
                    <div id="bar6" class="bars"></div>
                </label>
            </div>
            <div className={`nav-mobile-kld1812 ${isMenu ? 'menu-show-kld1812' : 'menu-hide-kld1812'}`}>
                <div className='list-nav'>
                    <NavLink to={'/website/template/KLD1812'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>Cafe kass</NavLink>
                    <NavLink to={'/website/template/KLD1812/blog'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>bloom</NavLink>
                    <NavLink to={'/website/template/KLD1812/about'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>baker's house</NavLink>
                    <NavLink to={'/website/template/KLD1812/contact'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>holiday</NavLink>
                    <NavLink to={'/website/template/KLD1812/contact'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>private event</NavLink>
                    <NavLink to={'/website/template/KLD1812/contact'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>about</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;

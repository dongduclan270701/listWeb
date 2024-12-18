import React, { useState } from 'react';
import 'assets/List_Website/KLD1812/scss/header.scss'
import Logo from 'assets/List_Website/KLD1812/images/logo-restaurant.svg'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <div className='header-kld1813'>
            <div className='desktop-kld1812'>
                <div className='nav-bar-left'>
                    <NavLink to>cafe kass</NavLink>
                    <NavLink to>Đồ chay</NavLink>
                    <NavLink to>Ngôi nhà bánh</NavLink>
                </div>
                <img src={Logo} alt="" />
                <div className='nav-bar-right'>
                    <NavLink to>kỳ nghỉ</NavLink>
                    <NavLink to>Tiệc riêng tư</NavLink>
                    <NavLink to>Về chúng tôi</NavLink>
                </div>
            </div>
            <div className='mobile-kld1812'>
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
                    <NavLink to={'/website/template/KLD1812/blog'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>Đồ chay</NavLink>
                    <NavLink to={'/website/template/KLD1812/about'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>Ngồi nhà bánh</NavLink>
                    <NavLink to={'/website/template/KLD1812/contact'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>kỳ nghỉ</NavLink>
                    <NavLink to={'/website/template/KLD1812/contact'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>tiệc riêng tư</NavLink>
                    <NavLink to={'/website/template/KLD1812/contact'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>về chúng tôi</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;

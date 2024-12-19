import React, { useState } from 'react';
import 'assets/List_Website/KLD1812/scss/header.scss'
import Logo from 'assets/List_Website/KLD1812/images/logo-restaurant.svg'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [isMenu, setIsMenu] = useState(false)
    return (
        <div className='header-kld1812'>
            <div className='desktop-kld1812'>
                <div className='nav-bar-left'>
                    <NavLink to={'/website/template/KLD1812/cafe-kass'}>cafe kass</NavLink>
                    <NavLink to={'/website/template/KLD1812/do-chay'}>Đồ chay</NavLink>
                    <NavLink to={'/website/template/KLD1812/ngoi-nha-banh'}>Ngôi nhà bánh</NavLink>
                </div>
                <NavLink to={'/website/template/KLD1812'}><img src={Logo} alt="" /></NavLink>
                <div className='nav-bar-right'>
                    <NavLink to={'/website/template/KLD1812/ky-nghi'}>kỳ nghỉ</NavLink>
                    <NavLink to={'/website/template/KLD1812/tiec-rieng-tu'}>Tiệc riêng tư</NavLink>
                    <NavLink to={'/website/template/KLD1812/ve-chung-toi'}>Về chúng tôi</NavLink>
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
                    <NavLink to={'/website/template/KLD1812/cafe-kass'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>Cafe kass</NavLink>
                    <NavLink to={'/website/template/KLD1812/do-chay'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>Đồ chay</NavLink>
                    <NavLink to={'/website/template/KLD1812/ngoi-nha-banh'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>Ngồi nhà bánh</NavLink>
                    <NavLink to={'/website/template/KLD1812/ky-nghi'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>kỳ nghỉ</NavLink>
                    <NavLink to={'/website/template/KLD1812/tiec-rieng-tu'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>tiệc riêng tư</NavLink>
                    <NavLink to={'/website/template/KLD1812/ve-chung-toi'} className='nav-item' onClick={() => setIsMenu(!isMenu)}>về chúng tôi</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;

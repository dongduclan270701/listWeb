import React, { useState, useEffect, memo, useRef } from 'react'
import 'assets/Homepage/scss/header.scss'
import signature from 'assets/Homepage/images/logo3.svg'
import { NavLink } from 'react-router-dom'
import Phone from 'assets/Homepage/images/phone-call-svgrepo-com.svg'
import Zalo from 'assets/Homepage/images/zalo-svgrepo-com.svg'
import Logo from 'assets/Homepage/images/logooo.svg'
import ArrowRight from 'assets/Homepage/images/right-arrow-svgrepo-com.svg'
import Homepage from 'assets/Homepage/images/homepage-icon.svg'
import Library from 'assets/Homepage/images/library-icon.svg'
import Blog from 'assets/Homepage/images/blog-icon.svg'
import Service from 'assets/Homepage/images/service-icon.svg'
import About from 'assets/Homepage/images/about-icon.svg'
import Li from 'assets/Homepage/images/li-icon.svg'
const Index = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const [isSelectService, setIsSelectService] = useState(false)
    const [isSelectLibrary, setIsSelectLibrary] = useState(false)
    const dpkCursorRef = useRef(null);
    const dpkCursorMouse = useRef({ x: -100, y: -100 });
    const dpkCursorPos = useRef({ x: 0, y: 0 });
    const speedOption = 0.25
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const updatePosition = () => {
            dpkCursorPos.current = {
                x: dpkCursorPos.current.x + (dpkCursorMouse.current.x - dpkCursorPos.current.x) * speedOption,
                y: dpkCursorPos.current.y + (dpkCursorMouse.current.y - dpkCursorPos.current.y) * speedOption
            }
            if (dpkCursorRef.current) { // Kiểm tra xem dpkCursorRef.current có tồn tại không
                dpkCursorRef.current.style.transform = `translate3d(calc(${dpkCursorPos.current.x}px - 50%), calc(${dpkCursorPos.current.y}px - 50%), 0)`;
            }
        };

        const handleMouseMove = (e) => {
            dpkCursorMouse.current = { x: e.clientX, y: e.clientY };
        };
        const handleCursorChange = (e) => {
            const tgt = e.target;
            const computed = window.getComputedStyle(tgt)["cursor"];

            // Kiểm tra nếu `dpkCursorRef.current` không phải null trước khi thao tác
            if (dpkCursorRef.current) {
                if (computed === "pointer") {
                    dpkCursorRef.current.classList.add("dpkCursor-hover");
                } else {
                    dpkCursorRef.current.classList.remove("dpkCursor-hover");
                }
            } else {
                console.warn("dpkCursorRef.current is null");
            }
        };

        const loop = () => {
            updatePosition();
            requestAnimationFrame(loop);
        };
        window.addEventListener('mouseover', handleCursorChange);
        window.addEventListener("mousemove", handleMouseMove);
        loop();

        return () => {
            window.removeEventListener('mouseover', handleCursorChange);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [speedOption]);
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const zaloLink = isIOS ? 'zalo://qr/p/b0vaft11czp1' : isAndroid ? 'https://zaloapp.com/qr/p/b0vaft11czp1' : 'zalo://conversation?phone=0379382992';

    return (
        <>
            <div className={isIOS ? 'hotline-icon-one-ios' : isAndroid ? 'hotline-icon-one-android' : 'hotline-icon-one-pc'}>
                <a href={zaloLink} target='blank'>
                    <img src={Zalo} className='hotline-icon-svg' alt="Logo" />
                </a>
            </div>
            <div className='hotline-icon-two'>
                <a href="tel:0379382992"><img src={Phone} className='hotline-icon-svg' alt="Logo" /></a>
            </div>
            <div ref={dpkCursorRef} className="dpkCursor " />
            <div className=''>
                <style>
                    {`
          @import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font-family: "Play", sans-serif;
          }
          body {
              height: 100vh;
              width: 100%;
              font-size: 16px;
              margin: auto;
              color: black;
          }
          .play-regular {
              font-family: "Play", sans-serif;
              font-weight: 400;
              font-style: normal;
          }
          .play-bold {
              font-family: "Play", sans-serif;
              font-weight: 700;
              font-style: normal;
              letter-spacing: 1px;
          }
        `}
                </style>
                <div className={scrolled ? 'header-sell-website header-sell-website-scroll' : 'header-sell-website '}>
                    <nav className="navbar-sell-website play-bold">
                        <i className="hamburger-icon hamburger-btn fa-solid fa-bars" style={{ fontSize: 20 }} onClick={toggleMenu}></i>
                        <NavLink to='/' className="logo">
                            <img src={signature} alt="logo" />
                        </NavLink>
                        <NavLink to='/' className="logo-res">
                            <img src={signature} alt="logo" />
                        </NavLink>
                        <ul className={isMenuOpen ? "links show-menu" : "links"}>
                            <span className="close-btn material-symbols-rounded" onClick={toggleMenu}>x</span>

                            <li ><NavLink to='/' onClick={toggleMenu}>Trang chủ</NavLink></li>
                            <li className="dropdown" style={{ cursor: 'pointer' }}>
                                <a href >Dịch vụ  <span style={{ transform: 'scaleX(1.5)', display: 'inline-block' }}>&#8744;</span></a>
                                <ul className='dropdown-menu deactivate-portfolio-false play-bold' >
                                    <NavLink to='/service/bao-tri-sua-chua-website' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Bảo trì/sửa chữa website
                                    </NavLink>
                                    <NavLink to='/service/thiet-ke-website-rieng' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Tư vấn, thiết kế website riêng
                                    </NavLink>
                                    <NavLink to='/service/ten-mien-website-domain' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Tên miền website (Domain)
                                    </NavLink>
                                </ul>
                            </li>
                            <li className="dropdown" style={{ cursor: 'pointer' }}>
                                <a href >Kho giao diện <span style={{ transform: 'scaleX(1.5)', display: 'inline-block' }}>&#8744;</span></a>
                                <ul className='dropdown-menu deactivate-portfolio-false play-bold' >
                                    <NavLink to='/category/portfolio-ca-nhan' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Portfolio cá nhân
                                    </NavLink>
                                    <NavLink to='/category/landing-page' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Landing Page
                                    </NavLink>
                                    <NavLink to='/category/blog-ca-nhan' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Blog cá nhân
                                    </NavLink>
                                    <NavLink to='/category/website-to-chuc-su-kien' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Website tổ chức sự kiện
                                    </NavLink>
                                    <NavLink to='/category/website-thuong-mai-dien-tu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Website thương mại điện tử nhỏ
                                    </NavLink>
                                    <NavLink to='/category/website-nha-hang-quan-ca-phe' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Website nhà hàng/quán cà phê
                                    </NavLink>
                                    <NavLink to='/category/website-giao-duc' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Website giáo dục
                                    </NavLink>
                                    <NavLink to='/category/website-dashboard' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        Website dashboard
                                    </NavLink>
                                </ul>
                            </li>
                            <li ><NavLink to={'/blog'} onClick={toggleMenu}>Blogs</NavLink></li>
                            <li ><NavLink to={'/aboutMe'} onClick={toggleMenu}>Về tôi</NavLink></li>
                        </ul>
                        <a href="tel:0379382992" className="login-btn" style={{ textDecoration: 'none', color: 'white' }}>Liên hệ</a>
                    </nav>
                </div>
                <div className='row mobile-header'>
                    <div className='col-4 icon-menu'>
                        <div id="checkbox2" className={isMenuOpen ? 'checked' : ''}></div>
                        <label class="toggle toggle2" for="checkbox2" onClick={toggleMenu} style={{ color: 'white' }} >
                            <div id="bar4" class="bars"></div>
                            <div id="bar5" class="bars"></div>
                            <div id="bar6" class="bars"></div>
                        </label>
                    </div>
                    <div className='col-4 logo-mobile'><img src={Logo} alt='logo' /></div>
                    <div className='col-4 hotline'><div className='ele'>Liên hệ</div></div>
                </div>
                <div className={isMenuOpen ? 'mobile-menu select-menu' : 'mobile-menu'}>
                    <div className='nav-mobile'>
                        <NavLink to={'/'}><img src={Homepage} alt='' />Trang chủ</NavLink>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setIsSelectService(!isSelectService)}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}><img style={{ width: 24 }} src={Service} alt='' />Dịch vụ</div>
                                <div><img src={ArrowRight} alt='' className={isSelectService ? 'rotate-icon-menu' : 'rotate-icon-menu-reverse'} /></div>
                            </div>
                            <ul className={isSelectService ? 'select-service' : 'back-select-service'}>
                                <NavLink to={'/service/bao-tri-sua-chua-website'} ><li>Bảo trì/sửa chữa website</li></NavLink>
                                <NavLink to={'/service/thiet-ke-website-rieng'} ><li>Tư vấn thiết kế website riêng</li></NavLink>
                                <NavLink to={'/service/ten-mien-website-domain'} ><li>Tên miền website(Domain)</li></NavLink>
                            </ul>
                        </div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={() => setIsSelectLibrary(!isSelectLibrary)}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}><img style={{ width: 24 }} src={Library} alt='' />Kho giao diện</div>
                                <div><img src={ArrowRight} alt='' className={isSelectLibrary ? 'rotate-icon-menu' : 'rotate-icon-menu-reverse'} /></div>
                            </div>
                            <ul className={isSelectLibrary ? 'select-library' : 'back-select-library'}>
                                <NavLink to={'/category/landing-page'} ><li>Landing page</li></NavLink>
                                <NavLink to={'/category/website-thuong-mai-dien-tu'} ><li>Website thương mại điện tử nhỏ</li></NavLink>
                                <NavLink to={'/category/website-dashboard'} ><li>Website dashboard</li></NavLink>
                                <NavLink to={'/category/portfolio-ca-nhan'} ><li>Portfolio Cá Nhân</li></NavLink>
                                <NavLink to={'/category/blog-ca-nhan'} ><li>Blog Cá Nhân</li></NavLink>
                                <NavLink to={'/category/website-to-chuc-su-kien'} ><li>Website Tổ Chức Sự Kiện</li></NavLink>
                                <NavLink to={'/category/website-nha-hang-quan-ca-phe'} ><li>Website Nhà Hàng - Quán Cà Phê</li></NavLink>
                                <NavLink to={'/category/website-giao-duc'} ><li>Website Giáo Dục</li></NavLink>
                            </ul>
                        </div>
                        <NavLink to={'/blog'}><img src={Blog} alt='' />Blogs</NavLink>
                        <NavLink to={'/aboutMe'}><img src={About} alt='' />Về tôi</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(Index);

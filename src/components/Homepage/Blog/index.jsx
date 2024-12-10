import React, { useState, useEffect } from 'react';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
import Loading from 'components/Homepage/About/Loading';
import 'assets/Homepage/scss/Blog.scss'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ?
                <div style={{ backgroundColor: '#343434', margin: 0, padding: 0 }}>
                    <Loading />
                </div>
                :
                <>
                    <HeaderHomepage />
                    <div className='blog-website'>
                    <div className='list-blog-website'>
                        <div className='title'>
                            Blog
                        </div>
                        <div className='row list-blog'>
                            <div className='col-md-4 content'>
                                <NavLink to={'/service/bao-tri-sua-chua-website'}>
                                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733664102/CA988A04-C8B4-435B-BC6F-27CF06E11F97_1_201_a_nqrlqx.jpg' alt='' />
                                    <div className='time' >March 31, 2022</div>
                                    <div className='name'>Bảo trì website là gì? Có cần thiết không? Thủ tục các bước bảo trì web</div>
                                </NavLink>
                            </div>
                            <div className='col-md-4 content'>
                                <NavLink to={'/service//thiet-ke-website-rieng'}>
                                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733655842/banner_hjzwnv.png' alt='' />
                                    <div className='time' >March 31, 2022</div>
                                    <div className='name'>Thiết kế website theo yêu cầu – độc quyền – chuyên nghiệp tại DUC LAN WEBSITE</div>
                                </NavLink>
                            </div>
                            <div className='col-md-4 content'>
                                <NavLink to={'/service/ten-mien-website-domain'}>
                                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733658826/domain-la-gi-3_aizbuu.png' alt='' />
                                    <div className='time' >March 31, 2022</div>
                                    <div className='name'>Domain là gì? Dịch vụ domain của DUC LAN Website</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className='row type-website'>
                            <div className='title'>Danh Mục</div>
                            <div className='col-md-4 content'>
                                <ul>
                                    <li>
                                        <NavLink to='/category/portfolio-ca-nhan' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Portfolio Cá Nhân
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/landing-page' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Landing Page
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/blog-ca-nhan' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Blog Cá Nhân
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-4 content'>
                                <ul>
                                    <li>
                                        <NavLink to='/category/website-to-chuc-su-kien' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Website Tổ Chức Sự Kiện
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/website-thuong-mai-dien-tu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Website Thương Mại Điện Tử Nhỏ
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/website-dashboard' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Website Dashboard
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-4 content'>
                                <ul>
                                    <li>
                                        <NavLink to='/category/website-giao-duc' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Website Giáo Dục
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/category/website-nha-hang-quan-ca-phe' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Website Nhà Hàng - Quán Cà Phê
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                    <FooterHomepage />
                </>
            }
        </>
    );
}

export default Index;

import React, { useState, useEffect } from 'react';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
import Loading from 'components/Homepage/About/Loading';
import 'assets/Homepage/scss/Blog.scss'
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazy-load';
const Index = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ?
                <div style={{ backgroundColor: '#343434', margin: 0, padding: 0 }}>
                    <Loading />
                </div>
                :
                <><Helmet>
                <title>Dịch vụ thiết kế website</title>
                <meta name="description" content="Tôi cung cấp dịch vụ thiết kế website với rất nhiều giá trị. Tôi tự tin rằng sẽ giúp các bạn mang lại nhiều đơn hàng bằng các giải pháp để có website dành cho cá nhân hoặc doanh nghiệp. Cam kết hỗ trợ trọn đời. Thiết kế website theo yêu cầu chỉ từ 1.000.000 VND / Page. Thuê website chỉ từ 10.000đ / 1 ngày & 250.000đ / 1 tháng" />
                <meta name="keywords" content="bảo trì website, bảo trì website là gì, bảo trì website cần thiết, các bước bảo trì website, thủ tục bảo trì website, dịch vụ bảo trì website, bảo trì website định kỳ, bảo trì website chuyên nghiệp, sửa chữa website, bảo trì website lâu dài"/>
                <meta name="keywords" content="thiết kế website theo yêu cầu, thiết kế website độc quyền, thiết kế website chuyên nghiệp, dịch vụ thiết kế website, thiết kế website DUC LAN, thiết kế website chất lượng, website độc quyền, thiết kế web tại DUC LAN WEBSITE"/>
                <meta name="keywords" content="domain là gì, dịch vụ domain, đăng ký domain, mua domain, dịch vụ domain DUC LAN, tên miền website, dịch vụ tên miền, domain giá rẻ, tên miền chất lượng, DUC LAN Website domain"/>
            </Helmet>
                    <HeaderHomepage />
                    <div className='blog-website'>
                        <div className='list-blog-website'>
                            <div className='title'>
                                Blog
                            </div>
                            <div className='row list-blog'>
                                <div className='col-md-4 content'>
                                    <NavLink to={'/service/bao-tri-sua-chua-website'}>
                                    <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733664102/CA988A04-C8B4-435B-BC6F-27CF06E11F97_1_201_a_nqrlqx.jpg' alt='' /></LazyLoad>
                                        <div className='time' >March 31, 2022</div>
                                        <h6 className='name'>Bảo trì website là gì? Có cần thiết không? Thủ tục các bước bảo trì web</h6>
                                    </NavLink>
                                </div>
                                <div className='col-md-4 content'>
                                    <NavLink to={'/service//thiet-ke-website-rieng'}>
                                    <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733655842/banner_hjzwnv.png' alt='' /></LazyLoad>
                                        <div className='time' >March 31, 2022</div>
                                        <h6 className='name'>Thiết kế website theo yêu cầu – độc quyền – chuyên nghiệp tại DUC LAN WEBSITE</h6>
                                    </NavLink>
                                </div>
                                <div className='col-md-4 content'>
                                    <NavLink to={'/service/ten-mien-website-domain'}>
                                    <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733658826/domain-la-gi-3_aizbuu.png' alt='' /></LazyLoad>
                                        <div className='time' >March 31, 2022</div>
                                        <h6 className='name'>Domain là gì? Dịch vụ domain của DUC LAN Website</h6>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='row type-website'>
                                <div className='title'>Danh Mục</div>
                                <div className='col-md-4 content'>
                                    <ul>
                                        <li>
                                            <NavLink to='/category/landing-page' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Landing Page</p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/category/blog-ca-nhan' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Blog & Portfolio Cá Nhân</p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/category/website-to-chuc-su-kien' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Website Tổ Chức Sự Kiện</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-4 content'>
                                    <ul>

                                        <li>
                                            <NavLink to='/category/website-thuong-mai-dien-tu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Website Thương Mại Điện Tử Nhỏ</p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/category/website-dashboard' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Website Dashboard</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-4 content'>
                                    <ul>
                                        <li>
                                            <NavLink to='/category/website-giao-duc' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Website Giáo Dục</p>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/category/website-nha-hang-quan-ca-phe' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>Website Nhà Hàng - Quán Cà Phê</p>
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

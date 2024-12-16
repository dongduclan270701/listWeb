import React, { useState, useEffect, useRef } from 'react';
import 'assets/Homepage/scss/Landing_page.scss';
import { NavLink } from 'react-router-dom';
import Loading from 'components/Homepage/About/Loading';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
import LazyLoad from 'react-lazy-load';
import { Helmet } from 'react-helmet';
const Index = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([
        {
            id: 0,
            img: 'https://res.cloudinary.com/dolydpat4/image/upload/v1733583022/screencapture-ktech-dashboard-onrender-v2-2024-12-07-21_47_52_lf19ym.png',
            src: 'https://ktech-dashboard.onrender.com/v2/',
            name: 'mẫu dashboard',
            view: 6,
            price: '5.000.000 VNĐ'
        },
    ]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const imgRefs = useRef([]); // Mảng ref cho tất cả ảnh
    const [imageStates, setImageStates] = useState(
        product.map(() => ({ hover: false, imgHeight: 0 }))
    );

    const handleMouseEnter = (index) => {
        if (imgRefs.current[index]) {
            const newImageStates = [...imageStates];
            newImageStates[index] = {
                hover: true,
                imgHeight: imgRefs.current[index].scrollHeight, // Lấy chiều cao thực tế của ảnh
            };
            setImageStates(newImageStates);
        }
    };

    const handleMouseLeave = (index) => {
        const newImageStates = [...imageStates];
        newImageStates[index] = { ...newImageStates[index], hover: false };
        setImageStates(newImageStates);
    };

    return (
        <>
            {isLoading ?
                <div style={{ backgroundColor: '#343434', margin: 0, padding: 0 }}>
                    <Loading />
                </div>
                :
                <><Helmet>
                <title>Mẫu website dashboard - Mẫu website admin - - Mẫu website quản lý</title>
                <meta name="description" content="Mẫu website dashboard là Khi điều hành hoặc quản lý một dự án lớn, Dashboard này là một công cụ hữu ích để theo dõi tiến trình dự án và có thể chia sẻ được với nhóm của bạn và các bên liên quan khác. Chúng cung cấp một cái nhìn đầy đủ về tình hình dự án, thông tin chi tiết và dữ liệu chính. Chúng hữu ích cho tiếp thị, tài chính, quảng cáo, nguồn nhân lực và cả các nhóm kinh doanh khác." />
                <meta name="keywords" content="mẫu website dashboard, thiết kế website dashboard, website quản lý dự án, dashboard theo dõi hiệu suất, website tổng quan dự án, dashboard theo dõi trang web, thiết kế dashboard doanh nghiệp, website dashboard bán hàng, dashboard doanh thu, dashboard theo dõi người dùng, dashboard lưu lượng truy cập, dashboard cho doanh nghiệp, thiết kế website dashboard cho doanh nghiệp, dashboard tiếp thị, dashboard tài chính, dashboard quảng cáo, dashboard nguồn nhân lực, dashboard tổ chức kinh doanh, website theo dõi hoạt động kinh doanh, dashboard thương mại điện tử, website dashboard báo cáo doanh thu, thiết kế website dashboard theo yêu cầu"/>
            </Helmet>
                    <HeaderHomepage />
                    <div className='category-landing-page'>
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                            <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733748355/qqq_ikjfpa.png' alt='' /></LazyLoad>
                            </div>
                            <div className='col-md-5 content'>
                                <h6 className='text'>
                                    <div>Website</div>
                                    <div>Dashboard</div>
                                </h6>
                                <a href='tel:0379382992' className='tel' >Tư vấn thiết kế</a>
                            </div>
                        </div>
                        
                        <div className='part-product'>
                            <div className='sub-title'>Danh sách sản phẩm</div>
                            <div className='title'>Những sản phẩm bạn có thể hứng thú</div>
                            <div className='row list-product'>
                                {
                                    product.map((item, index) => (
                                        <div className='col-md-3'>
                                            <a key={index} href={item.src} target="_blank" className='nav-link'>
                                                <div className='product'>
                                                    <div
                                                        className="image-container"
                                                        onMouseEnter={() => handleMouseEnter(index)}
                                                        onMouseLeave={() => handleMouseLeave(index)}
                                                    >
                                                        <LazyLoad><img
                                                            ref={(el) => (imgRefs.current[index] = el)}
                                                            src={item.img}
                                                            alt={`Image ${index}`}
                                                            style={{
                                                                top: imageStates[index].hover
                                                                    ? `-${imageStates[index].imgHeight - 400}px`
                                                                    : "0px",
                                                                position: "relative",
                                                                transition: "top 2s ease",
                                                            }}
                                                        /></LazyLoad>
                                                    </div>
                                                    {/* <hr style={{ width: '100%', borderTop: '2px solid #68a7ff91;' }} /> */}
                                                    <p className='product-name'>{item.name}</p>
                                                    <div className='product-view'>{item.view} lượt xem</div>
                                                    <div className='product-price'>{item.price}</div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='row introduce-landing-page'>
                            <div className='col-md-6 text'>
                                <h6 className='title'>Mẫu website dashboard</h6>
                                <br></br>
                                <p className='content'>Mẫu website dashboard là Khi điều hành hoặc quản lý một dự án lớn, Dashboard này là một công cụ hữu ích để theo dõi tiến trình dự án và có thể chia sẻ được với nhóm của bạn và các bên liên quan khác. Chúng cung cấp một cái nhìn đầy đủ về tình hình dự án, thông tin chi tiết và dữ liệu chính. Chúng hữu ích cho tiếp thị, tài chính, quảng cáo, nguồn nhân lực và cả các nhóm kinh doanh khác.</p>
                                <br></br>
                                <p className='content'>Khi theo dõi hiệu suất trang web, việc tạo trang tổng quan trang web rất hữu ích. Website Dashboard theo dõi các dữ liệu quan trọng như lưu lượng truy cập tổng thể, tổng số người dùng, người dùng đang hoạt động, hoạt động thương mại điện tử, bán hàng và doanh thu.Cho dù doanh nghiệp duy trì một trang web đơn giản hay phức tạp, bảng điều khiển này đều có thể cung cấp một cái nhìn tích hợp, rõ ràng về các chỉ số.</p>
                                <br></br>
                                <p className='content'>Đây là Dashboard tổ chức kinh doanh sử dụng rất phổ biến: điều hành và cung cấp tổng thể về hoạt động theo ngày của doanh nghiệp. Vì vậy nếu bạn cần xây dựng riêng thì đừng ngần ngại liên hệ hoặc để lại thông tin – chuyên viên của chúng tôi sẽ hỗ trợ tư vấn ngay với bạn</p>
                            </div>
                            <div className='col-md-6 image-intro'>
                            <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733756969/11111_rcy8u6.png' alt='' /></LazyLoad>
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
                    <FooterHomepage />
                </>
            }
        </>
    );
};

export default Index;

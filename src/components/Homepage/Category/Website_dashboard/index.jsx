import React, { useState, useEffect, useRef } from 'react';
import 'assets/Homepage/scss/Landing_page.scss';
import LandingPage from 'assets/Homepage/images/Landing-page.png';
import { NavLink } from 'react-router-dom';
import Loading from 'components/Homepage/About/Loading';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
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
        const timer = setTimeout(() => setIsLoading(false), 2000);
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
                <>
                    <HeaderHomepage />
                    <div className='category-landing-page'>
                        <div className='banner-image'>
                            <img src={'https://res.cloudinary.com/dolydpat4/image/upload/v1733647170/dashboard_gyb9qt.png'} className='image' alt="Landing-page-image" />
                        </div>
                        <div className='part-product'>
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
                                                        <img
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
                                                        />
                                                    </div>
                                                    <hr style={{ width: '100%', borderTop: '2px solid #68a7ff91;' }} />
                                                    <div className='product-name'>{item.name}</div>
                                                    <div className='product-view'>{item.view} lượt xem</div>
                                                    <div className='product-price'>{item.price}</div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='introduce-landing-page'>
                            <div className='text'>
                                <div className='title'>Mẫu website dashboard</div>
                                <br></br>
                                <div className='content'>Mẫu website dashboard là Khi điều hành hoặc quản lý một dự án lớn, Dashboard này là một công cụ hữu ích để theo dõi tiến trình dự án và có thể chia sẻ được với nhóm của bạn và các bên liên quan khác. Chúng cung cấp một cái nhìn đầy đủ về tình hình dự án, thông tin chi tiết và dữ liệu chính. Chúng hữu ích cho tiếp thị, tài chính, quảng cáo, nguồn nhân lực và cả các nhóm kinh doanh khác.</div>
                                <br></br>
                                <div className='content'>Khi theo dõi hiệu suất trang web, việc tạo trang tổng quan trang web rất hữu ích. Website Dashboard theo dõi các dữ liệu quan trọng như lưu lượng truy cập tổng thể, tổng số người dùng, người dùng đang hoạt động, hoạt động thương mại điện tử, bán hàng và doanh thu.Cho dù doanh nghiệp duy trì một trang web đơn giản hay phức tạp, bảng điều khiển này đều có thể cung cấp một cái nhìn tích hợp, rõ ràng về các chỉ số.</div>
                                <br></br>
                                <div className='content'>Đây là Dashboard tổ chức kinh doanh sử dụng rất phổ biến: điều hành và cung cấp tổng thể về hoạt động theo ngày của doanh nghiệp. Vì vậy nếu bạn cần xây dựng riêng thì đừng ngần ngại liên hệ hoặc để lại thông tin – chuyên viên của chúng tôi sẽ hỗ trợ tư vấn ngay với bạn</div>
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
                    <FooterHomepage />
                </>
            }
        </>
    );
};

export default Index;

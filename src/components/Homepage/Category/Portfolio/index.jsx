import React, { useState, useEffect, useRef } from 'react';
import 'assets/Homepage/scss/Landing_page.scss';
import { NavLink } from 'react-router-dom';
import Loading from 'components/Homepage/About/Loading';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
const Index = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    const [product, setProduct] = useState([
        // {
        //     id: 0,
        //     img: 'https://res.cloudinary.com/dolydpat4/image/upload/v1733569072/screencapture-xeghepbacgiangbacninhhanoi-net-2024-12-07-17_54_53_1.png',
        //     src: 'https://www.xeghepbacgiangbacninhhanoi.net',
        //     name: 'mẫu landing page xe ghép',
        //     view: 6,
        //     price: '3.000.000 VNĐ'
        // },

    ]);



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
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                                <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751651/portfolio-blog_pgjfct.png' alt='' />
                            </div>
                            <div className='col-md-5 content'>
                                <div className='text'>
                                    <div>Portfolio</div>
                                    <div>Giới Thiệu</div>
                                </div>
                                <a href='tel:0379382992' className='tel' >Tư vấn thiết kế</a>
                            </div>
                        </div>
                        <div className='part-product'>
                            <div className='title'>Những sản phẩm bạn có thể <span style={{color:'#50adff'}}>hứng thú</span></div>
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
                                                    {/* <hr style={{ width: '100%', borderTop: '2px solid #68a7ff91;' }} /> */}
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
                        <div className='row introduce-landing-page'>
                            <div className='col-md-6 text'>
                                <div className='title'>Mẫu website giới thiệu </div>
                                <br></br>
                                <div className='content'>Bạn là một doanh nghiệp lớn? Bạn có những sản phẩm nổi bậc muốn được nhanh chóng giới thiệu đến mọi người? Bạn kinh doanh những sản phẩm dịch vụ? <span style={{ color: '#50adff' }}>Mẫu website giới thiệu doanh nghiệp</span> tại <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> là giải pháp tốt nhất cho các doanh nghiệp muốn phát triển thương hiệu. Với gần 10 năm kinh nghiệm trong ngành <span style={{ color: '#50adff' }}>thiết kế website</span>, chúng tôi luôn cập nhật những công nghệ mới nhất cho các <span style={{ color: '#50adff' }}>thiết kế website doanh nghiệp</span> của khách hàng như <span style={{ color: '#50adff' }}>HTML5/ CSS3</span> giúp cho website của khách hàng luôn trong tình trạng tối ưu về tốc độ load và độ mượt mà khi hiển thị trên tất cả các phương tiện di động như Smartphone và máy tính bảng. <span style={{ color: '#50adff' }}>Một thiết kế website </span>giới thiệu mang đến cho doanh nghiệp bạn những gì?</div>
                                <br></br>
                                <div className='content'>
                                    <ul>
                                        <li>Một kênh liên lạc uy tín cho các nhà đầu tư và các đối tác kinh doanh</li>
                                        <li><span style={{ color: '#50adff' }}>Giảm thiểu chi phí</span> cho việc Marketing quảng bá thương hiệu.</li>
                                        <li>Kênh liên lạc trực tiếp của khách hàng với doanh nghiệp.</li>
                                        <li><span style={{ color: '#50adff' }}>Khai thác tối đa khách hàng</span> online trên Internet.</li>
                                        <li>Quảng bá thương hiệu một cách nhanh nhất thông qua internet.</li>
                                    </ul>
                                </div>
                                <br></br>
                                <div className='content'>Hãy mang đến bộ mặt thương hiệu chuyên nghiệp, uy tín trước mặt khách hàng của bạn. Tham khảo những mẫu <span style={{ color: '#50adff' }}>website giới thiệu</span> của <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> bên dưới để có ý tưởng độc báo bạn nhé! Chúc bạn thành công!</div>
                            </div>
                            <div className='col-md-6 image-intro'>
                                <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733756969/11111_rcy8u6.png' alt='' />
                            </div>
                        </div>
                        <div className='row type-website'>
                            <div className='title'>Danh Mục</div>
                            <div className='col-md-4 content'>
                                <ul>
                                    <li>
                                        <NavLink to='/category/portfolio-gioi-thieu' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            Portfolio Giới Thiệu
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

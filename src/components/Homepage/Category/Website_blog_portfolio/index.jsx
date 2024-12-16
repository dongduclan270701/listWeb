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
                            <div className='col-md-5 content' style={{ alignItems: 'center' }} >
                                <div className='text'>
                                    <div style={{ textAlign: 'center' }}>Blog & Portfolio cá nhân</div>
                                    <div style={{ textAlign: 'end' }}></div>
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
                                <div className='title'>Mẫu website blog</div>
                                <br></br>
                                <div className='content'><span style={{ color: '#50adff' }}>Mẫu website tin tức</span> là mẫu website được thiết kế nhằm đăng tải những tin tức về những mảng thông tin nhất định như: tin tức kinh tế, công nghệ, máy tính, tin tức về lập trình, phần mềm, tin tức về mẹ và bé,… Những ai có mong muốn sở hữu một website về tin tức để có thể phục vụ cho công việc một cách tốt nhất thì hãy nhanh tay liên lạc với DUC LAN WEBSITE để có thể nhận được sự tư vấn cụ thể và trực tiếp nhất vì chính những lời tư vấn từ nhân viên của chúng tôi sẽ giúp cho các bạn có thêm nhiều ý tưởng cho một website tin tức giá rẻ của mình nhé.</div>
                                <br></br>
                                <div className='content'>Tuy là một <span style={{ color: '#50adff' }}>website tin tức giá rẻ</span>, nhưng website tại <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> luôn được chăm chút về mặt chất lượng, <span style={{ color: '#50adff' }}>thiết kế website chuẩn SEO</span> và hướng tới người dùng, <span style={{ color: '#50adff' }}>thiết kế website responsive – chuẩn di dộng – đa nền tảng</span> giúp cho website có thể hoạt động tối ưu trên các phương tiện di động như điện thoại di động và máy tính bảng.</div>
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
                                            <NavLink to='/category/landing-page' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                Landing Page
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/category/blog-ca-nhan' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                Blog & Portfolio Cá Nhân
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/category/website-to-chuc-su-kien' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                Website Tổ Chức Sự Kiện
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-4 content'>
                                    <ul>

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

import React, { useState, useEffect, useRef } from 'react';
import 'assets/Homepage/scss/Landing_page.scss';
import { NavLink } from 'react-router-dom';
import Loading from 'components/Homepage/About/Loading';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
import { Helmet } from 'react-helmet';
import LazyLoad from 'react-lazy-load';
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
                <><Helmet>
                <title>Dịch vụ thiết kế website</title>
                <meta name="description" content="Mẫu website nhà hàng – khách sạn – quán cà phê tại DUC LAN WEBSITE là những mẫu website được thiết kế với mục đích: giới thiệu nhà hàng – khách sạn, đặt phòng – đặt tiệc online, giúp khách sạn – nhà hàng xây dựng được hình ảnh thương hiệu của mình và tối ưu trong việc tiếp cận khách hàng tiềm năng. Tất cả mẫu website khách sạn – nhà hàng – quán cà phê tại DUC LAN WEBSITE được thiết kế một cách chuyên nghiệp và chau truốt đến từng chi tiết nhỏ nhất. Thêm vào đó là sự kiểm tra 2 lớp trước khi tung ra bản demo cho khách hàng trải nghiệm." />
                <meta name="keywords" content="mẫu website event, thiết kế website sự kiện, website giới thiệu event, mẫu website quảng bá sự kiện, website tổ chức sự kiện, landing page sự kiện, website đăng ký sự kiện, website mua vé sự kiện, thiết kế website sự kiện online, website sự kiện offline, website tổ chức sự kiện chuyên nghiệp, website sự kiện đẹp, website sự kiện hiệu quả, mẫu website landing page sự kiện, website event chuẩn SEO, website sự kiện responsive, website event cho doanh nghiệp, website event cho công ty, thiết kế website event độc quyền"/>
            </Helmet>
                    <HeaderHomepage />
                    <div className='category-landing-page'>
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                            <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751652/landingpage_xu4ais.png' alt='' /></LazyLoad>
                            </div>
                            <div className='col-md-5 content' style={{ alignItems: 'center' }} >
                                <h6 className='text'>
                                    <div style={{ textAlign: 'center' }}>Website Nhà hàng - Quán Cà Phê</div>
                                    <div style={{ textAlign: 'end' }}></div>
                                </h6>
                                <a href='tel:0379382992' className='tel' >Tư vấn thiết kế</a>
                            </div>
                        </div>
                        <div className='part-product'>
                            <div className='title'>Những sản phẩm bạn có thể <span style={{ color: '#50adff' }}>hứng thú</span></div>
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
                                <h6 className='title'>Mẫu website nhà hàng - quán cà phê</h6>
                                <br></br>
                                <p className='content'><span style={{ color: '#50adff' }}>Mẫu website nhà hàng – khách sạn – quán cà phê</span> tại <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> là những mẫu website được thiết kế với mục đích: giới thiệu nhà hàng – khách sạn, đặt phòng – đặt tiệc online, giúp khách sạn – nhà hàng xây dựng được hình ảnh thương hiệu của mình và tối ưu trong việc tiếp cận khách hàng tiềm năng.</p>
                                <br></br>
                                <p className='content'>Tất cả <span style={{ color: '#50adff' }}>mẫu website khách sạn – nhà hàng – quán cà phê</span> tại <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> được thiết kế một cách chuyên nghiệp và chau truốt đến từng chi tiết nhỏ nhất. Thêm vào đó là sự kiểm tra 2 lớp trước khi tung ra bản demo cho khách hàng trải nghiệm.</p>
                                <br></br>
                                <p className='content'>Những tính năng vô cùng quan trọng và đặc biệt của <span style={{ color: '#50adff' }}>mẫu website nhà hàng – villa </span>mà ít nơi nào có được bao gồm:</p>
                                <br></br>
                                <div className='content'>
                                    <ul>
                                        <li>Giao diện của <span style={{ color: '#50adff' }}>thiết kế website khách sạn – quán cà phê</span> được thiết kế chuẩn SEO – gia tăng hiệu quả và khả năng tiếp cận khách hàng mục tiêu</li>
                                        <li>Đa nền tảng – <span style={{ color: '#50adff' }}>thiết kế chuẩn responsive</span>: gia tăng trải nghiệm người dùng với khả năng truy cập trên mọi thiết bị di động, Ipad…</li>
                                        <li><span style={{ color: '#50adff' }}>Chuẩn UI/UX</span> – là khả năng mang lại trải nghiệm tốt nhất cho người dùng từ giao diện hình ảnh đến tính năng, hiệu ứng của website. Đặc biệt là tốc độ tải trang chỉ vỏn vẹn trong 2 giây – không khách hàng nào phải chờ đợi</li>
                                        <li>Tính năng đặt phòng – đặt tiệc Online vô cùng dễ dàng cho người sử dụng cũng như người quản lý website. Việc đặt phòng – đặt tiệc sẽ nhanh chóng và thuận tiện cả khi sử dụng điện thoại hoặc máy tính</li>
                                    </ul>
                                </div>
                                <br></br>
                                <p className='content'>Mời bạn tham khảo những mẫu <span style={{ color: '#50adff' }}>website khách sạn – nhà hàng – quán cà phê</span> đẹp nhất và chuyên nghiệp nhất của <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> bên dưới để có được sự lựa chọn hoặc ý tưởng độc đáo cho <span style={{ color: '#50adff' }}>thiết kế website nhà hàng</span> của mình! Chúc bạn thành công!</p>
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

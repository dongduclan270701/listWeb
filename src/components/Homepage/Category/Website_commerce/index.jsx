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
    const [product, setProduct] = useState([
        {
            id: 0,
            img: 'https://res.cloudinary.com/dolydpat4/image/upload/v1733583375/screencapture-ktech-uw1a-onrender-2024-12-07-21_53_19_1_abimgk.png',
            src: 'https://ktech-uw1a.onrender.com/',
            name: 'mẫu website thương mai điện tử',
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
                <title>Mẫu website E-commerce ( website Thương mại điện tử)</title>
                <meta name="description" content="Website bán hàng online, website thương mại điện tử (TMĐT) chắc là không còn cần phải giới thiệu dài dòng nữa. Mẫu website bán hàng đẹp – TMĐT của DUC LAN WEBSITE Website cực kì phù hợp với nhu cầu của người Việt: Giao diện đẹp, phù hợp với gu thẫm mỹ của người Việt, sản phẩm hiển thị rõ ràng, hình ảnh kích thước hợp lý, sắc nét, không bị scale ( giãn ) hình." />
                <meta name="keywords" content="website bán hàng online, website thương mại điện tử, mẫu website bán hàng đẹp, website TMĐT, thiết kế website bán hàng, website thương mại điện tử giá rẻ, website bán hàng chuẩn SEO, website bán hàng responsive, thiết kế website TMĐT, mẫu website thương mại điện tử, website bán hàng Việt Nam, thiết kế website thương mại điện tử, website bán hàng online dễ SEO, website bán hàng trên di động, website bán hàng với tốc độ load nhanh, website thanh toán online, tích hợp thanh toán offline, báo cáo doanh thu website, website bán hàng với khuyến mãi coupon, website bán hàng sản phẩm rõ ràng, website bán hàng tiện lợi cho khách hàng, website bán hàng đa nền tảng"/>
            </Helmet>
                    <HeaderHomepage />
                    <div className='category-landing-page'>
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                                <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751653/ecommerce11_nonhjp.png' alt='' /></LazyLoad>
                            </div>
                            <div className='col-md-5 content'>
                                <div className='text'>
                                    <div>website</div>
                                    <div>e-commerce</div>
                                </div>
                                <a href='tel:0379382992' className='tel' >Tư vấn thiết kế</a>
                            </div>
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
                                <h6 className='title'>Mẫu website E-commerce (Thương mại điện tử)</h6>
                                <br></br>
                                <p className='content'>Website bán hàng online, website thương mại điện tử (TMĐT) chắc là không còn cần phải giới thiệu dài dòng nữa. Mẫu website bán hàng đẹp – TMĐT của DUC LAN WEBSITE Website cực kì phù hợp với nhu cầu của người Việt:</p>
                                <br></br>
                                <div className='content'>
                                    <ul>
                                        <li>Giao diện đẹp, phù hợp với gu thẫm mỹ của người Việt, sản phẩm hiển thị rõ ràng, hình ảnh kích thước hợp lý, sắc nét, không bị scale ( giãn ) hình.</li>
                                        <li>Giá cả, thuộc tính sản phẩm đầy đủ và rõ ràng và tiện cho khách thao tác lựa chọn, so sánh.</li>
                                        <li>Có thể mở rộng các tính năng khuyến mãi coupon tiện lợi</li>
                                        <li>Mẫu thiết kế website bán hàng –  thương mại điện tử có sẵn report báo cáo doanh thu thông minh.</li>
                                        <li>Tích hợp được tất cả các hình thức thanh toán offline, online đầy đủ không thiếu thứ gì.</li>
                                        <li>Tốc độ load như nhanh chóng, chưa tới 2s/trang.</li>
                                        <li>Website chuẩn SEO, dễ SEO lên top.</li>
                                        <li>Giao diện đa nên tảng trên di động thông minh, máy tính tiện lợi cho khách hàng.</li>
                                    </ul>
                                </div>
                                <br></br>
                                <p className='content'>Với mẫu website bán hàng trực tuyến đẹp bạn sẽ hoàn toàn làm chủ cuộc chơi thương trường của mình. Dễ dàng thực hiện các chiến lược kinh doanh, quảng bá và marketing cho sản phẩm. Với những mẫu bên dưới, DUC LAN WEBSITE hy vọng sẽ giúp bạn tìm được những mẫu ưng ý hoặc có thể nảy ra được ý tưởng cho trang web của bạn. Nếu bạn cần thiết kế website bán hàng theo yêu cầu, hãy liên hệ với DUC LAN WEBSITE theo hotline: 037 938 2992. Chúc bạn thành công!</p>
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

import React, { useState, useEffect, useRef } from 'react';
import 'assets/Homepage/scss/Landing_page.scss';
import { NavLink } from 'react-router-dom';
import Loading from 'components/Homepage/About/Loading';
import HeaderHomepage from 'components/Homepage/Header'
import FooterHomepage from 'components/Homepage/Footer'
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
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                                <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751653/ecommerce11_nonhjp.png' alt='' />
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
                                <div className='title'>Mẫu website E-commerce (Thương mại điện tử)</div>
                                <br></br>
                                <div className='content'>Website bán hàng online, website thương mại điện tử (TMĐT) chắc là không còn cần phải giới thiệu dài dòng nữa. Mẫu website bán hàng đẹp – TMĐT của DUC LAN WEBSITE Website cực kì phù hợp với nhu cầu của người Việt:</div>
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
                                <div className='content'>Với mẫu website bán hàng trực tuyến đẹp bạn sẽ hoàn toàn làm chủ cuộc chơi thương trường của mình. Dễ dàng thực hiện các chiến lược kinh doanh, quảng bá và marketing cho sản phẩm. Với những mẫu bên dưới, DUC LAN WEBSITE hy vọng sẽ giúp bạn tìm được những mẫu ưng ý hoặc có thể nảy ra được ý tưởng cho trang web của bạn. Nếu bạn cần thiết kế website bán hàng theo yêu cầu, hãy liên hệ với DUC LAN WEBSITE theo hotline: 037 938 2992. Chúc bạn thành công!</div>
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

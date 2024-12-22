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
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);
    const [product, setProduct] = useState([
        {
            id: 0,
            img: 'https://res.cloudinary.com/dolydpat4/image/upload/v1734872865/screencapture-localhost-3000-website-template-KLD2112-2024-12-22-20_04_12_1_dsr36g.png',
            src: '/website/template/KLD2112/',
            name: 'mẫu bất động sản KLD2112',
            view: 0,
            price: '10.000.000 VNĐ'
        },

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
                <title>Mẫu website event - Mẫu website sự kiện</title>
                <meta name="description" content="Mẫu website giới thiệu Event thường được sử dụng để quảng bá cho các chương trình, sự kiện quan trọng của các công ty, doanh nghiệp. Thông thường, các sự kiện này có thể diễn ra online hoặc offline, nhưng để thu hút sự chú ý và quan tâm của các khách hàng tiềm năng từ trước khi sự kiện diễn ra, người ta thường thiết kế các trang web dạng Landing Page hoặc Website tổng hợp. Với các website này người dùng không chỉ có thể vào cập nhật các thông tin cơ bản về sự kiện sắp diễn ra mà còn có thể thực hiện hành động (Call to Action) như điền form đăng kí tham gia, mua vé tham dự, đặt chỗ trước…" />
                <meta name="keywords" content="mẫu website event, thiết kế website sự kiện, website giới thiệu event, mẫu website quảng bá sự kiện, website tổ chức sự kiện, landing page sự kiện, website đăng ký sự kiện, website mua vé sự kiện, thiết kế website sự kiện online, website sự kiện offline, website tổ chức sự kiện chuyên nghiệp, website sự kiện đẹp, website sự kiện hiệu quả, mẫu website landing page sự kiện, website event chuẩn SEO, website sự kiện responsive, website event cho doanh nghiệp, website event cho công ty, thiết kế website event độc quyền"/>
            </Helmet>
                    <HeaderHomepage />
                    <div className='category-landing-page'>
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                            <LazyLoad><img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751651/education_pwiqj4.png' alt='' /></LazyLoad>
                            </div>
                            <div className='col-md-5 content' style={{ alignItems: 'center' }} >
                                <h6 className='text'>
                                    <div style={{ textAlign: 'center' }}>Website Tổ Chức Sự Kiện - Event</div>
                                    <div style={{ textAlign: 'end' }}></div>
                                </h6>
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
                                <h6 className='title'>Mẫu website event</h6>
                                <br></br>
                                <p className='content'><span style={{ color: '#50adff' }}>Mẫu website giới thiệu Event</span> thường được sử dụng để quảng bá cho các chương trình, sự kiện quan trọng của các công ty, doanh nghiệp. Thông thường, các sự kiện này có thể diễn ra online hoặc offline, nhưng để thu hút sự chú ý và quan tâm của các khách hàng tiềm năng từ trước khi sự kiện diễn ra, người ta thường thiết kế các trang web dạng Landing Page hoặc Website tổng hợp. Với các website này người dùng không chỉ có thể vào cập nhật các thông tin cơ bản về sự kiện sắp diễn ra mà còn có thể thực hiện hành động (Call to Action) như điền form đăng kí tham gia, mua vé tham dự, đặt chỗ trước…</p>
                                <br></br>
                                <p className='content'>Chính vì vậy việc <span style={{ color: '#50adff' }}>thiết kế một website giới thiệu Event, sự kiện</span> trở nên cần thiết đối với những ai đã và đang hoạt động tỏng lĩnh vực even, sự kiện. <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span>, một trong những đơn vị chuyên sưu tầm và bày bán các giao diện website đẹp trên Internet, đã tổng hợp các <span style={{ color: '#50adff' }}>mẫu website giới thiệu Event, sự kiện</span> đẹp và hiệu quả nhất</p>
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

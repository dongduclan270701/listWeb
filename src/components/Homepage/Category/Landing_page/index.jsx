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
        {
            id: 0,
            img: 'https://res.cloudinary.com/dolydpat4/image/upload/v1733569072/screencapture-xeghepbacgiangbacninhhanoi-net-2024-12-07-17_54_53_1.png',
            src: 'https://www.xeghepbacgiangbacninhhanoi.net',
            name: 'mẫu landing page xe ghép',
            view: 6,
            price: '3.000.000 VNĐ'
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
                <>
                    <HeaderHomepage />
                    <div className='category-landing-page'>
                        <div className='row banner-image'>
                            <div className='col-md-7 image'>
                                <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751652/landingpage_xu4ais.png' alt='' />
                            </div>
                            <div className='col-md-5 content'>
                                <div className='text'>
                                    <div>landing</div>
                                    <div>page</div>
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
                                <div className='title'>Mẫu website Landing Page</div>
                                <br></br>
                                <div className='content'>Mẫu website landing page là một loại website đang rất được ưa chuộng hiện nay vì hiệu quả mà nó mang lại. <span style={{ color: '#50adff' }}>Giao diện landing page</span> sẽ phù hợp nhất cho những <span style={{ color: '#50adff' }}>website giới thiệu công ty</span> tổng quan và chuyên sâu về công ty hoặc một sản phẩm nào đó nhằm PR, quảng cáo sản phẩm, công ty đến với khách hàng một cách nhanh và thân thiện nhất. Bản chất của Landing page sẽ thể hiện tất cả thông tin về công ty hoặc sản phẩm lên trên cùng một trang web, khách hàng có thể theo dõi tất cả thông tin mà không cần chuyển đi bất cứ một trang nào khác.</div>
                                <br></br>
                                <div className='content'><span style={{ color: 'grey' }}>Mẫu Landing page đẹp</span> có thể sử dụng tối ưu cho tất cả các loại hình kinh doanh đặc biệt là: landing page BĐS, Landing page Mỹ phẩm, Landing page công ty xe hơi, Landing page GYM. Ngoài ra tuy chỉ trên một trang web duy nhất nhưng website tại DUC LAN WEBSITE vẫn được tối ưu hóa bằng thiết kế <span style={{ color: '#50adff' }}>chuẩn SEO, chuẩn Responsive- chuẩn di động</span>. Khách hàng khi hợp tác cùng với Mona Media hãy tin tưởng rằng chúng tôi có một đội ngũ nhân viên chuyên nghiệp, chế độ hậu đãi cực tốt và dịch vụ SEO chuyên nghiệp có thể giúp cho website của bạn đạt những vị trí cao trên các cổ máy tìm kiếm.</div>
                                <br></br>
                                <div className='content'>Khả năng chính của chúng tôi là xây dựng landing page theo yêu cầu. Vì vậy nếu bạn cần xây dựng riêng thì đừng ngần ngại liên hệ hoặc để lại thông tin – chuyên viên của chúng tôi sẽ hỗ trợ tư vấn ngay với bạn</div>
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

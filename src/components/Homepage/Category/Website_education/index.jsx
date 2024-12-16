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
            img: 'https://res.cloudinary.com/dolydpat4/image/upload/v1734353124/screencapture-localhost-3000-website-template-KLD1312-2024-12-16-19_43_31_1_elarsn.png',
            src: '/website/template/KLD1312',
            name: 'mẫu website trường học & bán khoá học',
            view: 6,
            price: '10.000.000 VNĐ - Có thương lượng'
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
                                <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1733751651/event_mni8jk.png' alt='' />
                            </div>
                            <div className='col-md-5 content'>
                                <div className='text'>
                                    <div>Website</div>
                                    <div>Giáo Dục</div>
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
                                <div className='title'>Mẫu website giáo dục - trường học</div>
                                <br></br>
                                <div className='content'>Giáo dục là một trong những ngành đặc thù. Chính vì vậy các mẫu <span style={{ color: '#50adff' }}>website trường học – giáo dục</span> đều phải có sự khác biệt so với các lĩnh vực khác. Do đặc trưng của ngành nên các website phải thật nhã nhặn, nghiêm chỉnh mà phải không kém phần hiện đại.</div>
                                <br></br>
                                <div className='content'><span style={{ color: '#50adff' }}>Mẫu website giáo dục – trường học</span> giành cho các đợn vị trường học từ <span style={{ color: '#50adff' }}>mẫu web mầm non</span> đến <span style={{ color: '#50adff' }}>mẫu website đại học</span>, các <span style={{ color: '#50adff' }}>trang web trung tâm ngoại ngữ</span>, trung tâm đào tạo kỹ năng, trung tâm lái xe, trung tâm tư vấn visa du học Hàn Quốc… Mỗi một đơn vị khác nhau lại có những quy cách cũng như phong cách về website khác nhau. Tại đây, <span style={{ color: '#50adff' }}>DUC LAN WEBSITE</span> xin hân hạnh cung cấp cho bạn các <span style={{ color: '#50adff' }}>mẫu thiết kế website giáo dục – trường học</span> mới nhất, hiện đại và phù hợp với những lĩnh vực mà các bạn đang giảng dạy.</div>
                                <br></br>
                                <div className='content'>Sở hữu một mẫu website giới thiệu trường học giá rẻ và chất lượng là điều mọi khách hàng đều mong muốn. Hãy đến với Mona để sở hữu cho mình <span style={{ color: '#50adff' }}>mẫu website trường học độc quyền, rẻ, đẹp và chất lượng</span> để mang lại cho ngôi trường, trung tâm của bạn một sự uy tín và chất lượng đến từng chi tiết.</div>
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

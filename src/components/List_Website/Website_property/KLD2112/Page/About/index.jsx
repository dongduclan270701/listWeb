import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/about.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logo from 'assets/List_Website/KLD2112/images/logo-property.svg'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "-75px",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "black",
                    padding: '10px 20px',
                    borderRadius: '50%',
                    border: '1px solid #af8647'
                }}
                className='btn-prev-next'
                onClick={onClick}
            >
                <i className='fa fa-chevron-right' style={{ color: '#af8647' }}></i>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "-75px",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    cursor: "pointer",
                    fontSize: "24px",
                    color: "black",
                    padding: '10px 20px',
                    borderRadius: '50%',
                    border: '1px solid #af8647'

                }}
                onClick={onClick}
                className='btn-prev-next'
            >
                <i className='fa fa-chevron-left' style={{ color: '#af8647' }}></i>
            </div>
        );
    };
    const settings2 = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        cssEase: "ease-in-out",
        infinite: true,
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        pauseOnHover: false,
        dots: false,
        nextArrow: <NextArrow />, // Truyền mũi tên tới
        prevArrow: <PrevArrow />
    };
    const settings3 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        cssEase: "ease-in-out",
        infinite: true,
        lazyLoad: "ondemand",
        adaptiveHeight: true,
        pauseOnHover: false,
        dots: false,
        arrows: false,
    };
    useEffect(() => {
        const sections = document.querySelectorAll(".animate-section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };

    }, []);
    return (
        <div className='about-me-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735032131/portfolio-1_zg3vgz.webp"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Về tôi</div>
                    <div className="sub-title animate-section">Dưới đây là 1 số thông tin của tôi
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <img src={Logo} className="title animate-section" />
                <div className="sub-title animate-section">“Carol Staab có một công ty bất động sản hạng sang sáng tạo cung cấp dịch vụ trợ giúp khách hàng đẳng cấp thông qua tiếp thị đẳng cấp thế giới vô song và phương pháp kinh doanh thực tế. Sứ mệnh của cô là mang đến cho khách hàng trải nghiệm đặc biệt đồng thời giúp họ đạt được kết quả tốt nhất có thể.”</div>
            </div>
            <div className="section-3-kld2112">
                <div className='title animate-section'>Tìm hiểu về tôi</div>
                <div className="sub-title animate-section">Nhà tiên phong về bất động sản hạng sang của Manhattan</div>
                <p className=' animate-section'>Nổi tiếng và luôn được lựa chọn trong giới bất động sản hạng sang của Manhattan, Carol Staab vượt trội hơn hẳn những người cùng thời. Với thứ hạng cao trong top 1,5% các nhà môi giới trên toàn quốc, hơn 25 năm kinh nghiệm của Carol trong lĩnh vực bất động sản hạng sang tại Manhattan nhấn mạnh sự kết hợp giữa cam kết không lay chuyển và sự nhạy bén sâu sắc về thị trường.</p>
                <p className=' animate-section'>Hoạt động kinh doanh nhà ở theo yêu cầu của Carol đảm bảo rằng khách hàng nhận được dịch vụ được cá nhân hóa ở mức độ chuyên nghiệp. Cô không chỉ được công nhận trong lĩnh vực bất động sản mà còn được giới thiệu là chuyên gia bất động sản cao cấp trên các kênh truyền hình như Fox, CBS và Newsmax. Những trích dẫn thường xuyên của Carol trên các phương tiện truyền thông uy tín như WSJ, New York Times và New York Post càng củng cố thêm uy tín của cô trong lĩnh vực này. Hơn nữa, với tư cách là đồng tác giả của "Luxury Home Selling Mastery" và phần tiếp theo, cô là tiếng nói có uy tín trong giới truyền thông bất động sản cao cấp. Carol cũng là tác giả của tờ Pulse hàng tuần, một báo cáo về thị trường bất động sản cao cấp của Manhattan và sản xuất nhiều video tư vấn bất động sản. </p>
                <div className="sub-text animate-section">Lời chứng thực từ khách hàng hài lòng đã vẽ nên một bức tranh sống động về năng lực vô song:</div>
                <ul>
                    <li className=' animate-section'><b style={{ color: '#af8647' }}>Manhattan Real Estate Insight</b>: "Khi tôi mạo hiểm bước vào thị trường hợp tác xã tại 555 Park Avenue, kiến ​​thức chuyên môn sâu rộng của Carol Staab về các tòa nhà dân cư cao cấp tại Manhattan đã thực sự tỏa sáng. Sự hiểu biết sâu sắc và hiểu biết của bà vô cùng có giá trị đối với hành trình mua nhà của tôi."</li>
                    <li className=' animate-section'><b style={{ color: '#af8647' }}>Tiếp thị xa xỉ vô song</b>: "Chiến lược tiếp thị mang tính đột phá của Carol cho căn hộ SOHO của chúng tôi đã mang về cho chúng tôi mức giá kỷ lục chỉ trong 70 ngày, làm nổi bật cách tiếp cận sáng tạo của cô ấy trong việc tận dụng hoạt động tiếp cận kỹ thuật số và các công cụ tiếp thị đẳng cấp thế giới."</li>
                    <li className=' animate-section'><b style={{ color: '#af8647' }}>Chiến lược bán hàng mẫu mực</b>: “Ngay cả trong bối cảnh thị trường bất động sản xa xỉ tại Manhattan đang có nhiều thách thức, các chiến lược của Carol vẫn đảm bảo căn hộ chung cư của chúng tôi tại số 1049 Đại lộ số 5 không chỉ được bán nhanh chóng mà còn ở mức giá vượt quá mong đợi."</li>
                </ul>
                <p className=' animate-section'>Sống tại Fifth Avenue ở Upper East của Manhattan trong hơn 25 năm, Carol có kinh nghiệm trực tiếp về thị trường nhà ở cao cấp của thành phố. Việc phục vụ trong ban quản lý chung cư của cô trong một thập kỷ cho thấy cam kết của cô đối với cộng đồng. Ngoài cuộc sống nghề nghiệp, những đóng góp của Carol cho các tổ chức từ thiện như Central Park Conservancy và Ronald McDonald House cho thấy sự cống hiến của cô cho các mục đích có ý nghĩa. Carol là thành viên của Core, một câu lạc bộ tư nhân danh giá ở Manhattan. Cô cũng có một ngôi nhà thứ hai ở Southampton.</p>
                <p className=' animate-section'>Tóm lại, dù là vai trò của cô ấy là "bác sĩ bất động sản" cho những bất động sản không bán được hay sự tận tâm vô song của cô ấy đối với người mua và người bán. Khám phá những đại diện bất động sản hạng sang tốt nhất của Manhattan. Hãy chọn Carol Staab để có được sự thành thạo thị trường vô song, cơ hội mua hàng đặc biệt và kết quả vô song."</p>
                <div className='section-3-1'>
                    <div className='col-md-5 left animate-section'>
                        <img src="https://www.kassdev.com/static/media/avatar.120472ac7c0f500a270a.jpeg" alt="" />
                    </div>
                    <div className='col-md-7 right'>
                        <div className="title-section-3-1 animate-section">Kass D. Dong</div>
                        <div className="sub-title-section-3-1 animate-section">Thiết kế website - web apps - thiết kết theo mẫu</div>
                        <div className="text-section-3-1 animate-section">Hotline: (+84) 37 938 2992</div>
                        <div className="text-section-3-1 animate-section">Gmail: dongduclan277@gmail.com</div>
                        
                        <div className='link-section-3-1'>
                            <NavLink to={'https://www.facebook.com/kass277'}><i className="fa-brands fa-facebook-f"></i></NavLink>
                            <NavLink to={'https://m.me/466756929862397'}><i className="fa-brands fa-facebook-messenger"></i></NavLink>
                            <NavLink to={'https://www.kassdev.com'}><i className="fa fa-link"></i></NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="section-5-kld2112">
                <div className="testimonials-section">
                    <div className="col-md-3 animate-section"><svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="110" cy="110" r="110" fill="white" fill-opacity="1"></circle>
                        <path d="M93.0909 108.726C87.4545 108.726 83.697 112.274 82.0061 115.822C82.0061 106.485 86.8909 96.029 100.982 89.8672L100.418 88C86.8909 93.4149 79 104.058 79 117.129C79 127.772 85.9515 133 93.0909 133C99.8545 133 105.303 127.398 105.303 120.863C105.303 114.141 99.8545 108.726 93.0909 108.726ZM128.788 108.726C123.152 108.726 119.394 112.274 117.703 115.822C117.703 106.485 122.588 96.029 136.679 89.8672L136.115 88C122.588 93.4149 114.697 104.058 114.697 117.129C114.697 127.772 121.648 133 128.788 133C135.552 133 141 127.398 141 120.863C141 114.141 135.552 108.726 128.788 108.726Z" fill="#af8647" fill-opacity="1"></path>
                    </svg></div>

                    <div className="col-md-9 animate-section">
                        <Slider {...settings3}>
                            <div style={{ transition: 'all 0.5s' }}>
                                <div className="title">KHÁCH HÀNG CỦA TÔI NÓI GÌ</div>
                                <div className="text">''Kinh nghiệm, kỹ năng đàm phán và tính cách tuyệt vời của bạn đã giúp chúng tôi đạt được mức giá bán cao hơn mong đợi của chúng tôi trong vòng chưa đầy 60 ngày.</div>
                                <div className="text">Chúng tôi rất ấn tượng khi bạn có thể đạt được mức giá bán hoàn toàn bằng tiền mặt là 1,05 mm, đây là mức giá kỷ lục trên foot vuông cho tòa nhà và cao hơn 100.000 USD so với cùng một kiểu căn hộ, nhưng ở tầng cao hơn, được bán với giá chỉ một vài tuần trước đó. Vâng...''</div>
                                <div className="sub-title">— Michael P - CFO of Ariel Re</div>
                            </div>
                            <div>
                                <div className="title">KHÁCH HÀNG CỦA TÔI NÓI GÌ</div>
                                <div className="text">''Nhà môi giới bất động sản chuyên nghiệp bậc nhất. Khả năng phát triển thông điệp phù hợp, tài sản thế chấp và sự hiện diện xã hội để bán tài sản của chủ sở hữu ở NYC là tốt nhất.</div>
                                <div className="text">Chúng tôi đã bán thành công một bất động sản với sự giúp đỡ của Carol và sự siêng năng cũng như dịch vụ của cô ấy trong toàn bộ quá trình là hạng nhất. Một khách hàng hài lòng rất vui khi đưa ra khuyến nghị 5 sao mạnh mẽ!''</div>
                                <div className="sub-title">— Ed Kopko - Seller of 418 50th Street Penthouse A - author - Project Bold Life</div>
                            </div>
                            <div>
                                <div className="title">KHÁCH HÀNG CỦA TÔI NÓI GÌ</div>
                                <div className="text">''Đang tìm kiếm một nhà môi giới bất động sản hạng sang ở Manhattan cho cả mua và bán? Tôi là chuyên gia hàng đầu của bạn với kiến ​​thức tuyệt vời về thị trường NYC.</div>
                                <div className="text">Tận dụng mạng lưới rộng lớn gồm các chuyên gia hàng đầu của Carol cho các vấn đề bất động sản phức tạp như quyền sử dụng không khí và tư vấn pháp lý, đồng thời tận hưởng chi phí phụ trợ vừa phải. Chuyên về đàm phán chiến lược, Tôi thành thạo bảo vệ và bán các...''</div>
                                <div className="sub-title">— Michael Watson - chairman of Canopius & Laurie Banez- Head of Casualty at Canopius</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="section-4-kld2112" style={{ color: 'white' }}>
                <div className="title-section animate-section">Bất động sản nổi bật</div>
                <Slider {...settings2} className='slider-section-4 animate-section'>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/kjfvo2tkapgiaqwehdyx_wtl8jo.avif" alt="" />
                        </div>
                        <div className="title">$3,333,333</div>
                        <div className="sub-title">23/23/23, Phú Nhuận, Phường 2, Quận xx, Tp.Hồ Chí Minh</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/nzgbbaan2pawainqa8kd_pdwsjc.avif" alt="" />
                        </div>
                        <div className="title">$3,333,333</div>
                        <div className="sub-title">23/23/23, Phú Nhuận, Phường 2, Quận xx, Tp.Hồ Chí Minh</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/ojofh6t6wet5nyuznfdg_cgdcpy.avif" alt="" />
                        </div>
                        <div className="title">$3,333,333</div>
                        <div className="sub-title">23/23/23, Phú Nhuận, Phường 2, Quận xx, Tp.Hồ Chí Minh</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863565/qe3widmmhvcevnud2y6q_gk4xew.avif" alt="" />
                        </div>
                        <div className="title">$3,333,333</div>
                        <div className="sub-title">23/23/23, Phú Nhuận, Phường 2, Quận xx, Tp.Hồ Chí Minh</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/zqzndgfy2bs1iz2skhge_o5wysh.avif" alt="" />
                        </div>
                        <div className="title">$3,333,333</div>
                        <div className="sub-title">23/23/23, Phú Nhuận, Phường 2, Quận xx, Tp.Hồ Chí Minh</div>
                    </div>
                    <div className="section-4-1">
                        <div className='image'>
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/nmalps2msk2i5ilmh4ac_affh8u.avif" alt="" />
                        </div>
                        <div className="title">$3,333,333</div>
                        <div className="sub-title">23/23/23, Phú Nhuận, Phường 2, Quận xx, Tp.Hồ Chí Minh</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Index;

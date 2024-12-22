import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/homepage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: "linear",
        infinite: true,
        pauseOnHover: false,
        arrows: false,
        dots: false,

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
        <div className='homepage-kld2112'>
            <div className="section-1-kld2112">
                <video src="https://res.cloudinary.com/dolydpat4/video/upload/v1734777862/website-reel-50-central-park-s-manhattan-new-york-10019-f5hwet-reel-no-sound-1920x1080_gknoir.mp4" autoPlay loop muted></video>
                <div className='introduce'>
                    <div className='title animate-section'>Bất Động Sản</div>
                    <div className="sub-title animate-section">Nhà môi giới Manhattan sang trọng hàng đầu mang lại kết quả đặc biệt với dịch vụ tiếp thị đẳng cấp thế giới và dịch vụ trợ giúp đặc biệt.</div>
                    <div className="btn-intro animate-section">
                        <div className="btn-ele animate-section">Tìm kiếm nhà</div>
                        <div className="btn-ele animate-section">Về tôi</div>
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Hợp tác với</div>
                <Slider {...settings} className="test animate-section">
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/1200px-fox_business_logosvg_snfatd.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/lb-logo2018-1_smp8qc.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/rr_logo_chrondeck-1_u4fxns.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/wsj-social-share-2-1_blxodp.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/download-2-1_pvi34q.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/trd-ny-logo_sbkmzp.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/new-york-post-logo-vector-1_twhd0i.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810905/lre-og-logo-1_vczyfh.webp" alt="" />
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734810904/cheddarnews_primary_hor_hqex4u.webp" alt="" />
                </Slider>
            </div>
            <div className="section-3-kld2112">
                <div className="title animate-section">Mọi giao dịch thành công đều cần có kế hoạch và hướng dẫn</div>
                <div className="section-3-1">
                    <div className="col-md-4">
                        <img className='animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734809443/marketing-expertise_c0mye1.webp" alt="" />
                        <div className="title animate-section">Chuyên môn tiếp thị</div>
                        <div className="sub-title animate-section">Tìm kiếm câu chuyện về một ngôi nhà, nêu bật những đặc điểm độc đáo, tốt nhất của ngôi nhà và tạo hoạt động tiếp thị trực quan để tiếp cận đúng người mua.</div>
                        <button className='btn-link animate-section'>Bán hàng thành công</button>
                    </div>
                    <div className="col-md-4">
                        <img className=' animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734809442/xtra-1-1_pzhwgg.webp" alt="" />
                        <div className="title animate-section">Kiến thức thị trường sâu xa</div>
                        <div className="sub-title animate-section">một mạng lưới các thị trường vi mô. Sử dụng thông tin của tôi về bất động sản, các dự án phát triển mới, hoàn thiện và vật liệu, hợp tác xã, v.v. để yên tâm mua hàng.</div>
                        <button className='btn-link animate-section'>Nhân kiến thức mới</button>
                    </div>
                    <div className="col-md-4">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734809441/concierge-2_bpns6a.webp" alt="" />
                        <div className="title animate-section">Dịch vụ chiến lược & tùy chỉnh</div>
                        <div className="sub-title animate-section">Cùng nhau, chúng ta sẽ vận dụng hơn 25 năm hiểu biết sâu sắc, kinh nghiệm và khả năng đọc thị trường của tôi để tạo ra chiến lược thành công nhất cho bạn. Với tư cách là khách hàng, bạn sẽ có quyền truy cập vào toàn bộ hồ sơ của tôi...</div>
                        <button className='btn-link animate-section'>Kết nôi với tôi</button>
                    </div>
                </div>
            </div>
            <div className="section-4-kld2112" style={{ color: 'white' }}>
                <div className="title-section animate-section">Bất động sản nổi bật</div>
                <Slider {...settings2} className='slider-section-4'>
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
            <div className="section-5-kld2112">
                <div className="testimonials-section">
                    <div className="col-md-3"><svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="110" cy="110" r="110" fill="white" fill-opacity="1"></circle>
                        <path d="M93.0909 108.726C87.4545 108.726 83.697 112.274 82.0061 115.822C82.0061 106.485 86.8909 96.029 100.982 89.8672L100.418 88C86.8909 93.4149 79 104.058 79 117.129C79 127.772 85.9515 133 93.0909 133C99.8545 133 105.303 127.398 105.303 120.863C105.303 114.141 99.8545 108.726 93.0909 108.726ZM128.788 108.726C123.152 108.726 119.394 112.274 117.703 115.822C117.703 106.485 122.588 96.029 136.679 89.8672L136.115 88C122.588 93.4149 114.697 104.058 114.697 117.129C114.697 127.772 121.648 133 128.788 133C135.552 133 141 127.398 141 120.863C141 114.141 135.552 108.726 128.788 108.726Z" fill="#af8647" fill-opacity="1"></path>
                    </svg></div>

                    <div className="col-md-9">
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

            <div className="section-6-kld2112">
                <img className=' animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734809235/manhattan-new-york-skyline-neighborhoods_jfrpcm.jpg" alt="" />
                <div className='section-6-1'>
                    <div className="title animate-section">Làm việc với tôi</div>
                    <div className="text animate-section">Một hoạt động kinh doanh bất động sản sang trọng đầy sáng tạo, cung cấp dịch vụ trợ giúp đặc biệt ở mức độ ưu tú thông qua hoạt động tiếp thị đẳng cấp thế giới chưa từng có và phương pháp kinh doanh thực tế. Sứ mệnh của cô là mang đến cho khách hàng trải nghiệm đặc biệt đồng thời giúp họ đạt được kết quả tốt nhất có thể.</div>
                    <button className='btn-link animate-section'>Liên hệ với tôi</button>
                </div>
            </div>
        </div>
    );
}

export default Index;

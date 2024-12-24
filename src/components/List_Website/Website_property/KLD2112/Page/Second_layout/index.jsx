import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/second_layout.scss'
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Index = () => {
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
        <div className='second-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/czyo0nomdfautlfxxzpj/modern-living-room-interior"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Quy trình bán nhà</div>
                    <div className="sub-title animate-section">Tôi sẽ cung cấp cho bạn quy trình bán bất động sản
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Một cách tiếp cận riêng biệt để bán nhà của bạn</div>
                <div className="sub-title animate-section">“Một quá trình sáng tạo và đổi mới cho sự thành công của bạn”</div>
            </div>
            <div className="section-3-kld2112">
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Bước 1:</div>
                        <div className='text animate-section'>Trao đổi với bạn về nhu cầu, mong muốn và thách thức của bạn. Sau đó, cô ấy tiến hành đánh giá và phân tích đầy đủ về bất động sản của bạn bao gồm việc giải thích cẩn thận dữ liệu bán hàng, xu hướng thị trường và mốc thời gian của bạn. Kết quả của phân tích này giúp xác định mức giá chào bán tốt nhất cũng như giúp cô ấy phát triển kế hoạch tiếp thị phù hợp với mục tiêu của bạn. </div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/manhattan-new-york-view_1_tihf8e.webp' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020645/new-york-penthouse-terrace_pumhop.webp' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Bước 2:</div>
                        <div className='text animate-section'>Phát triển bản sắc thương hiệu cho bất động sản của bạn và xây dựng chiến lược quảng cáo mạnh mẽ xung quanh nó. Đây là cách tiếp cận tương tự được các nhà phát triển bất động sản hạng sang hàng đầu áp dụng. Cô hợp tác với nhóm nhiếp ảnh gia, người dàn dựng, quay phim, chuyên gia quảng cáo và thiết kế đồ họa giỏi nhất của mình để tạo ra các tài sản tiếp thị ở mức cao nhất nhằm quảng bá bất động sản của bạn. Những tài sản tiếp thị này ảnh hưởng mạnh mẽ đến nhận thức về bất động sản của bạn trong mắt người mua.</div>
                    </div>
                </div>
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Bước 3:</div>
                        <div className='text animate-section'>Sau khi hoàn tất việc xây dựng thương hiệu, sẽ quảng bá bất động sản của bạn thông qua nhiều kênh để có thể mở rộng mạng lưới nhất có thể. Xét cho cùng, một chiến dịch tiếp thị tuyệt vời mà không có phạm vi tiếp cận rộng rãi thì sẽ không hiệu quả. Do đó, cách tiếp cận của Carol bao gồm các chiến lược kỹ thuật số và in ấn, phương tiện truyền thông xã hội, quảng cáo, đề cập đến quan hệ công chúng và các sự kiện giao lưu. Ngoài ra, bất động sản của bạn được quảng bá đến mạng lưới toàn cầu có giá trị tài sản ròng rất cao và cực cao. Các chiến dịch tiếp thị tạo ra mức độ quan tâm cao của người mua. </div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/manhattan-new-york-architecture_1_k42lcr.webp' alt='' className='col-md-6 right animate-section' />
                </div>
            </div>
            <div className="section-3-kld2112">
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/modern-living-room-penthouse-new-york_p2jwww.webp' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Bước 4:</div>
                        <div className='text animate-section'>Chuyến tham quan bất động sản được thực hiện chứ không phải được giao cho trợ lý. Cô ấy tin rằng cách một bất động sản được thể hiện và những gì được nói hoặc không được nói có thể tạo nên sự khác biệt giữa người mua tiếp tục hoặc chỉ gạch bỏ bất động sản của bạn khỏi danh sách của họ. </div>
                    </div>
                </div>
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Bước 5:</div>
                        <div className='text animate-section'>Một lời đề nghị được đưa ra bởi người mua. đàm phán quyết liệt thay mặt bạn để có được kết quả tốt nhất có thể. Sau khi một lời đề nghị được chấp nhận, cô ấy sẽ hợp tác chặt chẽ với luật sư của bạn để đảm bảo tất cả các tài liệu được cung cấp cho giao dịch và trả lời mọi câu hỏi.</div>
                        <div className="text animate-section">Các cuộc đàm phán hợp đồng được tiến hành giữa luật sư của bên mua và bên bán. Sau khi tất cả các điều khoản của hợp đồng được thống nhất, bạn sẽ ký hợp đồng. Nếu bạn đang bán một hợp tác xã hoặc chung cư, bạn cần phải nộp đơn xin lên hội đồng quản trị. Carol sẽ xem xét đơn xin lên hội đồng quản trị với người môi giới của bên mua để đảm bảo rằng đơn đã hoàn tất trước khi nộp lên hội đồng quản trị để phê duyệt. Sau khi đơn xin lên hội đồng quản trị được phê duyệt, có thể lên lịch đóng sổ. </div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/manhattan-new-york-architecture_1_k42lcr.webp' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/modern-living-room-penthouse-new-york_p2jwww.webp' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Bước 5</div>
                        <div className='text animate-section'>Việc đóng cửa được lên lịch và diễn ra suôn sẻ. Ngay từ khi bạn bắt đầu làm việc với Carol, dịch vụ trợ lý riêng của cô ấy sẽ bắt đầu và theo sát bạn trong suốt quá trình đóng cửa và hơn thế nữa. Sứ mệnh của cô ấy là giúp bạn có một giao dịch thành công và trải nghiệm khách hàng năm sao đặc biệt. </div>
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Chúc mừng!</div>
                <div className="sub-title animate-section">Sau khi bán nhà, bạn có thể tự do thực hiện bước tiếp theo trong hành trình của mình. Cho dù là chuyển đến một thành phố mới, chuyển đến một ngôi nhà lớn hơn, thu hẹp quy mô hoặc mua nhà nghỉ dưỡng, việc biết rằng mọi trách nhiệm bán nhà của bạn đã được giải quyết sẽ giúp bạn đạt được sự an tâm cho con đường mới của mình. Chúng tôi sẽ ở đó để cung cấp cho bạn bất kỳ dịch vụ bổ sung nào mà bạn có thể cần trong tương lai.</div>
                
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
            <div className="section-6-kld2112">
                <div className="title-section-6 animate-section">Hợp tác với</div>
                <Slider {...settings} className="test-section-6 animate-section">
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
        </div>
    );
}

export default Index;

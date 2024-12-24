import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/third_layout.scss'
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
        <div className='third-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/manhattan-new-york-view_1_tihf8e.webp"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Quy trình mua nhà</div>
                    <div className="sub-title animate-section">Tôi sẽ cung cấp cho bạn quy trình mua bất động sản
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Một cách tiếp cận riêng biệt để mua nhà ở Manhattan</div>
                <div className="sub-title animate-section">Biến tầm nhìn bất động sản của bạn thành bất động sản</div>
            </div>
            <div className="section-3-kld2112">
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Bước 1: Tìm kiếm</div>
                        <div className='text animate-section'>Bắt đầu hành trình của bạn với tầm nhìn về ngôi nhà mơ ước của bạn bao gồm kích thước, số phòng ngủ, phòng tắm, các tính năng và tiện nghi của tòa nhà cũng như số tiền bạn có thể chi tiêu thoải mái. Có ba loại bất động sản ở Manhattan: chung cư, hợp tác xã và nhà chung cư. Chung cư và nhà chung cư là bất động sản. Bạn sẽ nhận được giấy tờ mua bán. Hợp tác xã là hình thức sở hữu hạn chế hơn. Bạn sẽ mua cổ phần trong hợp tác xã và sẽ nhận được hợp đồng thuê độc quyền. Hãy nghĩ đến những khu phố phù hợp với lối sống của bạn. Carol có kiến ​​thức uyên bác về các tòa nhà và khu phố. Cô ấy sẽ giúp bạn xác định những bất động sản tốt nhất và cung cấp cho bạn mọi thông tin bạn cần để đưa ra lựa chọn tốt nhất. Cô ấy sẽ giúp bạn xác định mức giá mở đầu phù hợp và đàm phán quyết liệt thay mặt bạn.</div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/modern-living-room-penthouse-new-york_p2jwww.webp' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020645/new-york-penthouse-terrace_pumhop.webp' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Bước 2: Phê duyệt hợp đồng và hội đồng quản trị</div>
                        <div className='text animate-section'>Trong quá trình giao dịch mua bán, luật sư bất động sản của người bán sẽ soạn thảo hợp đồng mua bán cho luật sư của người mua. Luật sư bất động sản của người mua sẽ tiến hành thẩm định – xem xét kế hoạch chào bán, đọc biên bản, xây dựng báo cáo tài chính, v.v. Người mua ký hợp đồng sau khi thẩm định được giải quyết và chuyển tiếp hợp đồng với khoản đặt cọc 10%. Sau khi hợp đồng được ký, người mua sẽ hoàn thành đơn đăng ký hội đồng quản trị nếu họ mua nhà chung cư hoặc hợp tác xã. Không cần đơn đăng ký hội đồng quản trị để mua nhà chung cư mới phát triển. Đối với chung cư, đơn đăng ký hội đồng quản trị chỉ là thủ tục. Hội đồng quản trị chung cư chỉ có thể từ chối đơn đăng ký của bạn nếu họ từ bỏ quyền từ chối đầu tiên và mua căn hộ. Đối với hợp tác xã, hội đồng quản trị sử dụng đơn đăng ký để xác định người mà họ muốn phỏng vấn và có thể chấp thuận hoặc từ chối chấp thuận của bạn.</div>
                    </div>
                </div>
            </div>
            <div className="section-3-kld2112">
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Bước 3: Thế chấp & Phê duyệt</div>
                        <div className='text animate-section'>Nếu bạn quyết định thế chấp, tốt nhất là nên được chấp thuận trước. Bạn cũng có thể trả toàn bộ tiền mặt và nhận được khoản tài trợ sau khi đóng sổ. Hội đồng quản trị yêu cầu một lá thư cam kết từ người cho vay của bạn. Lá thư cam kết được bao gồm trong gói hội đồng quản trị của bạn. Nếu chung cư chấp thuận đơn xin hội đồng quản trị của bạn, bạn sẽ nhận được một tài liệu có tên là Quyền từ chối đầu tiên. Trước khi hội đồng quản trị hợp tác đưa ra phê duyệt cuối cùng, cần phải có một cuộc phỏng vấn cá nhân. Carol sẽ giúp bạn hoàn thành và trình bày một đơn xin hội đồng quản trị tuyệt vời. Nếu cần phải phỏng vấn, cô ấy sẽ chuẩn bị cho bạn cho cuộc phỏng vấn hội đồng quản trị của mình.</div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/manhattan-new-york-architecture_1_k42lcr.webp' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1735020644/modern-living-room-penthouse-new-york_p2jwww.webp' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Bước 4: Đóng cửa và chuyển vào</div>
                        <div className='text animate-section'>Sau khi hội đồng quản trị chấp thuận, việc đóng sổ sẽ được lên lịch. Thỏa thuận đóng sổ và bạn được trao chìa khóa ngôi nhà mơ ước của mình. Carol cung cấp cho bạn dịch vụ trợ giúp riêng có thể cung cấp cho bạn bất kỳ dịch vụ nào tại AZ mà bạn có thể cần từ khi bắt đầu tìm kiếm cho đến khi bạn chuyển đến và sau đó. </div>
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Mục tiêu của tôi là cung cấp cho bạn dịch vụ cá nhân hóa nhất được thiết kế để giúp bạn mua được ngôi nhà mơ ước của mình.</div>
                <div className='form-submit animate-section'>
                    <button className='btn-link animate-section'>lên lịch tư vấn</button>
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

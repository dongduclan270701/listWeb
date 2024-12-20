import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/Sixth_layout.scss'
import Svg3 from 'assets/List_Website/KLD1812/images/banner-logo-3.svg'
import Svg2 from 'assets/List_Website/KLD1812/images/banner-logo-2.svg'
import Svg1 from 'assets/List_Website/KLD1812/images/banner-logo-1.svg'
const Index = () => {

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
        <div style={{ backgroundColor: '#f6eee6' }}>
            <div className="sixth-layout-kld1812">
                <div className="section-1-kld1812">
                    <div className="col-md-6 left">
                    <div className='logo animate-section'>
                            <img src={Svg2} alt="" />
                            <img src={Svg3} alt="" />
                        </div>
                        <div className="sub-title animate-section">Ẩm thực chay sáng tạo</div>
                        <div className="text animate-section">Kể từ khi mở cửa, Cafe Kass đã đi đầu trong việc sử dụng các sản phẩm hữu cơ và bền vững của địa phương, đồng thời xây dựng mối quan hệ trực tiếp, bền chặt với các trang trại. Đội ngũ ẩm ​​thực của nó lấy cảm hứng từ truyền thống quốc tế và sự sẵn có của các sản phẩm phong phú, được trồng tại địa phương để tạo ra các món ăn chay, thuần chay và không chứa gluten giàu trí tưởng tượng và năng động.</div>
                        <div className="text animate-section">Cafe Kass cũng đã áp dụng triết lý thân thiện với môi trường vào các nhà hàng anh chị em của mình là Kass và Ngôi nhà bánh. Kass khai trương vào năm 2018 và đã đóng vai trò là ngọn hải đăng , cung cấp các món ăn chay theo mùa được chế biến sẵn ở một nơi không có gì khác giống như vậy. Là nơi nghỉ ngơi quyến rũ và sảng khoái trong sân bay nhộn nhịp, Kass mang đến cho du khách cơ hội hít thở dù họ có 3 phút hay 30 phút.</div>
                        <div className="text animate-section">Sự bổ sung mới nhất, Ngôi nhà bánh, hiện đã mở cửa! Cung cấp không gian quán cà phê ấm cúng và tầng thượng, nơi quý khách có thể thưởng thức bánh ngọt mới nướng, bánh mì và các món ăn không chứa gluten cùng với một tách cà phê thơm ngon.</div>
                        <div className="text animate-section">Sự kết hợp thành công giữa triết lý thân thiện với môi trường, sự tham gia dựa vào cộng đồng và ẩm thực chay năng động, tiên tiến đã mang lại sự hỗ trợ to lớn cho cả ba địa điểm. Hãy đến và thưởng thức một miếng nhé!</div>
                        
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734673558/190627-LA_Flora-WEB-53_xz94b4.jpg" alt="" />
                    </div>
                </div>
                <div className="section-2-kld1812">
                    <div className="section-2-1">
                        <div className="col-md-6 right animate-section">
                            <img src="https://www.kassdev.com/static/media/avatar.120472ac7c0f500a270a.jpeg" alt="" />
                        </div>
                        <div className="col-md-6 left">
                            <div className="title animate-section">Cùng gặp gỡ người tạo website</div>
                            <div className="text animate-section">Đồng Đức Lân hay còn được gọi là Kass với những dự án và sản phẩm từ kho giao diện website phong phú với những loại website như: Landing Page, Website thương mại điện tử, Website giáo dục, Website dashboard, và website về portfolio cũng như website về blog tin tức để bạn có thể lựa chọn phù hợp với doanh nghiệp cũng như cá nhân</div>
                            <div className="text animate-section">Thiết kế riêng website theo yêu cầu với giá rẻ, giao 100% source code, bảo hành trọn đời khi có vấn đề</div>
                            <div className="text animate-section">Thiết kế, nâng cấp lại website sẵn có</div>
                        </div>
                    </div>

                </div>
                <div className="section-4-kld1812">
                    <div className="section-4-1">
                        <div className="col-md-6 right animate-section">
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734673558/190627-LA_Flora-WEB-53_xz94b4.jpg" alt="" />
                        </div>
                        <div className="col-md-6 left">
                            <div className="title animate-section">QUYÊN GÓP</div>
                            <div className="text animate-section">Nhấp vào bên dưới để gửi email yêu cầu quyên góp của bạn: vui lòng bao gồm thông tin về tổ chức/sự kiện và biểu mẫu mua sắm của bạn ở định dạng PDF.</div>
                            
                        </div>
                    </div>

                </div>
                <div className="section-5-kld1812">
                    <div className="section-5-1">
                        <div className="col-md-6 right animate-section">
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734673563/BakehouseRoof164_small-2048x1365_rrzfns.jpg" alt="" />
                        </div>
                        <div className="col-md-6 left">
                            <div className="title animate-section">SỰ NGHIỆP</div>
                            <div className="text animate-section">Kể từ khi mở Cafe Kass cách đây x0 năm,  gia đình chúng tôi đã phát triển bao gồm Cafe Kass và Ngôi nhà bánh. Phần thú vị nhất trong quá trình phát triển của chúng tôi là được làm việc với những cá nhân vô cùng tài năng, những người trong nhóm của chúng tôi và biến mọi điều kỳ diệu thành hiện thực.</div>
                            <div className="text animate-section">Công ty chúng tôi đầu tư vào cộng đồng của mình, vừa hỗ trợ các nhà cung cấp, nông dân và nghệ sĩ địa phương, cũng như đóng góp vào các sứ mệnh công bằng xã hội đang diễn ra, đặc biệt là về công lý chuyển giới, công bằng chủng tộc và công bằng lương thực. Chúng tôi tự hào nuôi dưỡng sự tôn vinh văn hóa đồng tính và tạo ra không gian cho sự hòa nhập. Tại mỗi địa điểm của chúng tôi, chúng tôi không chỉ cung cấp các cơ hội nghề nghiệp liên tục mà còn cung cấp các công cụ, giáo dục và lợi ích để thúc đẩy việc làm thỏa mãn.</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Index;

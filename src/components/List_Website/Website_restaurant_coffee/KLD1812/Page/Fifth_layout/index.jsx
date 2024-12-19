import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/Fifth_layout.scss'
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
            <div className="fifth-layout-kld1812">
                <div className="section-1-kld1812">
                    <div className="col-md-6 left">
                        <div className="title animate-section">Hãy kỷ niệm sự kiện tiếp theo của bạn với chúng tôi!</div>
                        <div className="text animate-section">Dịch vụ cho thuê sự kiện riêng có tại Cafe Kass và Ngôi nhà bánh. Hãy tham gia cùng chúng tôi trên những không gian trên sân thượng có tầm nhìn tuyệt đẹp, khoảng không gian thông tầng tràn ngập ánh sáng hoặc phòng ăn ấm cúng. Nhóm của chúng tôi đã sẵn sàng tổ chức lễ kỷ niệm hoàn hảo cho dịp đặc biệt tiếp theo của bạn! Chúng tôi cung cấp thực đơn lấy cảm hứng từ vùng Tây Bắc cho thực khách không có gluten, ăn chay và ăn chay.</div>
                        
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/CafeFlora-Food_Belathee-Photography-1400x933_kyu8ed.jpg" alt="" />
                    </div>
                </div>
                <div className="section-2-kld1812">
                    <div className="col-md-6 left">
                        <div className="title animate-section">Cafe Kass!</div>
                        <div className="text animate-section">Cafe Kass là một tổ chức ở Seattle do người đồng tính sở hữu trong hơn 30 năm, chiếm được cảm tình của tất cả các vị khách với khoảng không gian thông tầng tràn ngập ánh sáng, phòng ăn ấm cúng và sân ngoài trời có mái che. Thực đơn thơm ngon làm từ thực vật của chúng tôi kết hợp nguồn cảm hứng toàn cầu với sự hào phóng của vùng Tây Bắc Thái Bình Dương. Lấy cảm hứng theo mùa, chúng tôi cung cấp nhiều lựa chọn không chứa gluten, ăn chay và thuần chay.</div>
                        <div className="text animate-section">Khoảng không gian thông tầng tuyệt đẹp của chúng tôi có thể chứa tối đa 54 khách hoặc tối đa 65 khách cho bữa tiệc cocktail đứng. Sân hiên ngoài trời của chúng tôi có thể chứa tối đa 40 khách hoặc tổ chức tiệc cocktail đứng lên tới 60 khách</div>
                        <div className="sub-title animate-section">Bạn đang muốn đặt một sự kiện?</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/CafeFloraPatio054-1400x933_irtlzx.jpg" alt="" />
                    </div>
                </div>
                <div className="section-3-kld1812">
                    <div className="col-md-6 left">
                        <div className="title animate-section">Ngôi nhà bánh!</div>
                        <div className="text animate-section">Không gian tổ chức sự kiện của chúng tôi nằm ở tầng trên tại Ngôi nhà bánh và bao gồm sân thượng đẹp như tranh vẽ với tầm nhìn tuyệt đẹp ra Mt. Rainier ở phía xa cũng như không gian tổ chức sự kiện trong nhà của chúng tôi. Boong được che phủ một phần và cung cấp nhiều lựa chọn chỗ ngồi cũng như khu vực chỗ ngồi thân mật trong nhà của chúng tôi.</div>
                        <div className="text animate-section">Thực đơn phục vụ của chúng tôi cung cấp mọi thứ, từ các loại trà kiểu Anh cho đến các bữa tiệc pizza kiểu La Mã. Chúng tôi tự hào cung cấp các nguyên liệu tươi sống, địa phương và lấy cảm hứng theo mùa và mong muốn được hợp tác với bạn để tạo ra một sự kiện đẹp mắt.</div>
                        <div className="sub-title animate-section">Bạn đang muốn đặt một sự kiện?</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734627123/BakehouseRoof006-scaled-e1692637459413_uuivem.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

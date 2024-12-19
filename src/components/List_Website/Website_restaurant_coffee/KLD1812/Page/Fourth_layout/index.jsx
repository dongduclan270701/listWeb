import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/Fourth_layout.scss'
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
            <div className="fourth-layout-kld1812">
                <div className="section-1-kld1812">
                    <div className="col-md-6 left">
                        <div className="title animate-section">Đặt trước gói bánh quế ngày lễ tại Ngôi nhà bánh!</div>
                        <div className="text animate-section">Hãy làm cho kỳ nghỉ của bạn vui vẻ và tươi sáng với gói bốn gói bánh quế nổi tiếng của chúng tôi! 100% thuần chay, những chiếc bánh quế này sẽ là sự bổ sung hoàn hảo cho bữa sáng muộn ngày lễ, bữa ăn nhẹ buổi chiều của bạn và sẽ trở thành một món quà tuyệt vời cho hàng xóm, giáo viên hoặc người thân yêu!</div>
                        <div className="text animate-section">Hiện đã có thể đặt hàng trước và nhận hàng vào ngày 24/12.</div>
                        <div className="text animate-section">Gói 4 gói bánh quế với kem phô mai thuần chay: 500.000 VND</div>
                        <div className="sub-title animate-section">Đặt chỗ ngay</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602935/FloraFall015_ujq9qr.jpg" alt="" />
                    </div>
                </div>
                <div className="section-2-kld1812">
                    <div className="section-2-1">
                        <div className="col-md-6 right animate-section">
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734605137/Flora_Tea006-2_pmvugs.jpg" alt="" />
                        </div>
                        <div className="col-md-6 left">
                            <div className="title animate-section">Trà chiều ngày lễ tại Cafe Kass</div>
                            <div className="text animate-section">Chúng tôi rất vui mừng được thông báo rằng Trà Chiều Ngày Lễ của chúng tôi sẽ quay trở lại vào tháng 12 này!</div>
                            <div className="text animate-section">Chúng tôi đã hợp tác với tiệm bánh anh chị em @kassbakehouse của mình để tạo ra trải nghiệm Trà Chiều Ngày lễ tinh tế. Chúng tôi đã mang đến một số loại trà yêu thích của chúng tôi từ khắp nơi trên thế giới để thưởng thức cùng với ba tầng món ngon bao gồm bánh nướng + mứt cổ điển, bánh mì kẹp ngón tay và bánh ngọt tuyệt đẹp. Đây là cơ hội hoàn hảo để gặp gỡ bạn bè hoặc đưa bọn trẻ đi uống trà mặn trong mùa lễ này.</div>
                            <div className="text animate-section">Tháng 12 / 9 - 13 & Tháng 12 / 16 - 20</div>
                            <div className="text animate-section">Thực đơn thuần chay/không chứa gluten cũng như thực đơn dành cho trẻ em sẽ có sẵn.</div>
                            <div className="text animate-section">Đặt chỗ hiện có sẵn để đặt trực tuyến! Năm ngoái chúng đã bán hết nhanh chóng, vì vậy hãy nhớ đặt chỗ ngay bây giờ!</div>
                            <div className="sub-title animate-section">CUỘN XUỐNG ĐỂ CÓ MENU ĐẦY ĐỦ!</div>
                        </div>
                    </div>

                </div>
                <div className="section-3-kld1812">
                    <div className="section-3-1">
                        <div className="title animate-section">Thực đơn dành cho người lớn</div>
                        <div className="sub-title animate-section">Món mặn</div>
                        <div className="text animate-section">ras el hanout salad trứng cà ri trên bánh mì sữa nướng</div>
                        <div className="text animate-section">phô mai cheddar & tương ớt táo trên bột chua gia truyền của tiệm bánh nướng</div>
                        <div className="text animate-section">gougère nhồi nấm hoang dã và hạt dẻ</div>
                        <div className="text animate-section">bánh quiche mini bí đỏ và phô mai xanh rogue river</div>
                        <div className="sub-title animate-section">Bánh nướng và bánh sừng bò tươi nướng</div>
                        <div className="text animate-section">bánh nướng gừng</div>
                        <div className="text animate-section">bánh sừng bò nhỏ</div>
                        <div className="text animate-section">bơ mộc qua vani, mứt theo mùa và kem tươi</div>
                        <div className="sub-title animate-section">bánh ngọt</div>
                        <div className="text animate-section">bánh trứng đường thường xanh</div>
                        <div className="text animate-section">mousse sô cô la bạc hà trong vỏ sô cô la đen với kẹo mía giòn</div>
                        <div className="text animate-section">bánh cầm tay lê và nam việt quất</div>
                    </div>
                    <div className="section-3-1">
                        <div className="title animate-section">Người lớn ăn chay/không chứa gluten</div>
                        <div className="sub-title animate-section">Món mặn</div>
                        <div className="text animate-section">bánh phồng bí cà ri ras el hanout</div>
                        <div className="text animate-section">súp lơ & khoai tây croquette với trang trại thung lũng Madison ẩn giấu</div>
                        <div className="text animate-section">nấm nhồi hạt dẻ & cây xô thơm</div>
                        <div className="text animate-section">cà rốt hun khói với phô mai kem thì là, nụ bạch hoa & hành đỏ ngâm trên khoai tây chiên giòn không chứa gluten</div>
                        <div className="sub-title animate-section">Bánh nướng tươi</div>
                        <div className="text animate-section">bánh nướng gừng</div>
                        <div className="text animate-section">bánh kem cam quýt</div>
                        <div className="text animate-section">bơ mộc qua vani, mứt theo mùa và kem dừa đánh bông</div>
                        <div className="sub-title animate-section">bánh ngọt</div>
                        <div className="text animate-section">cây cẩm quỳ tuyết</div>
                        <div className="text animate-section">mousse sô cô la bạc hà trong vỏ sô cô la đen với kẹo mía giòn</div>
                        <div className="text animate-section">bánh thịt băm nhỏ</div>
                    </div>
                    <div className="section-3-1">
                        <div className="title animate-section">Thực đơn dành cho trẻ em</div>
                        <div className="sub-title animate-section">Món mặn</div>
                        <div className="text animate-section">bánh mì kẹp mứt trên bánh mì sữa ở tiệm nướng</div>
                        <div className="text animate-section">súp lơ và khoai tây croquette với trang trại ẩn tại thung lũng Madison</div>
                        <div className="text animate-section">trái cây tươi</div>
                        <div className="sub-title animate-section">Bánh nướng tươi</div>
                        <div className="text animate-section">bánh kem cam quýt</div>
                        <div className="text animate-section">mứt và kem theo mùa</div>
                        <div className="sub-title animate-section">bánh ngọt</div>
                        <div className="text animate-section">bánh trứng đường thường xanh</div>
                        <div className="text animate-section">mousse sô cô la bạc hà trong vỏ sô cô la đen với kẹo mía giòn</div>
                        <div className="text animate-section">bánh quy gừng</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

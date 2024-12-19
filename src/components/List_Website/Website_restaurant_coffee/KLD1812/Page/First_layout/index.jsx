import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/First_layout.scss'
import Svg2 from 'assets/List_Website/KLD1812/images/banner-logo-2.svg'

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
            <div className="first-layout-kld1812">
                <div className="section-1-kld1812">
                    <div className="col-md-6 left">
                        <img className='animate-section' src={Svg2} alt="" />
                        <div className="sub-title animate-section">ẨM THỰC CHAY NGON VÀ CẢM HỨNG CHO TẤT CẢ MỌI NGƯỜI</div>
                        <div className="title animate-section">Cafe Kass</div>
                        <div className="text animate-section">Cafe Kass đã là một tổ chức trong hơn 30 năm, chiếm được cảm tình của tất cả các vị khách với khoảng không gian thông tầng tràn ngập ánh sáng, phòng ăn ấm cúng và sân hiên ngoài trời tuyệt đẹp. Thực đơn chay ngon miệng của chúng tôi kết hợp nguồn cảm hứng toàn cầu với sự hào phóng của vùng Tây Bắc Thái Bình Dương. Chúng tôi cố gắng hết sức để tìm nguồn hàng từ nhiều Nông dân và đáp ứng nhu cầu ăn kiêng, đồng thời giữ vững niềm tin của chúng tôi về ẩm thực chay thú vị và thỏa mãn. Hãy tham gia bữa sáng muộn, bữa sáng, bữa trưa hoặc bữa tối với chúng tôi với một số bạn bè hoặc cả gia đình.</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602935/FloraFall015_ujq9qr.jpg" alt="" />
                    </div>
                </div>
                <div className="section-2-kld1812">
                    <div id="carouselExampleAutoplaying" class="carousel slide animate-section" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602915/190630-LA_Flora-WEB-143_lecuy3.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/CafeFlora-Food_Belathee-Photography-1400x933_kyu8ed.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/CafeFloraPatio054-1400x933_irtlzx.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/FloraFall018-1400x933_gshi02.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="section-3-kld1812">
                    <div className="section-3-1">
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
                <div className="section-4-kld1812">
                    <div className="section-4-1">
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
                    <div className="section-4-1">
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
                    <div className="section-4-1">
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
                <div className="section-5-kld1812">
                    <div className="col-md-6 left">
                        <div className="sub-title animate-section">CHÀO MỪNG DỊP ĐẶC BIỆT TIẾP THEO CỦA BẠN VỚI CHÚNG TÔI!</div>
                        <div className="text animate-section">Chúng tôi có một giếng trời tuyệt đẹp có thể chứa tối đa 54 khách hoặc chứa tối đa 65 khách cho một bữa tiệc cocktail đứng. Sân hiên ngoài trời của chúng tôi có thể chứa tối đa 40 khách hoặc tổ chức tiệc cocktail đứng lên tới 60 khách</div>
                        <div className="title animate-section">Want to book an event?</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/CafeFloraPatio054-1400x933_irtlzx.jpg" alt="" />
                    </div>
                </div>
                <div className="section-6-kld1812">
                    <div className="col-md-6 left">
                        {/* <div className="sub-title animate-section">Thời gian hoạt động!</div>
                        <div className="text animate-section">Chúng tôi hiện đang chấp nhận đặt chỗ ăn tối! </div>
                        <div className="title animate-section">Want to book an event?</div> */}
                        <div className="title">Thời gian hoạt động!</div>
                        <div className="sub-text">Chúng tôi đang chấp nhận đặt chỗ ăn tối!</div>
                        <div className="sub-title">Giờ nghỉ lễ sắp tới:</div>

                        <div className="text">Thứ 2 đến thứ 5<br /> 9:00AM – 2:30PM | 5:00PM – 9:00PM</div>
                        <div className="text">Thứ 6 Đóng cửa</div>
                        <div className="text">Thứ 7, Chủ Nhật<br /> 9:00AM – 2:30PM | 5:00PM – 9:00PM</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734614305/190627-LA_Flora-WEB-18_yy4puz.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

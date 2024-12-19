import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/Third_layout.scss'
import Svg3 from 'assets/List_Website/KLD1812/images/banner-logo-3.svg'

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
            <div className="third-layout-kld1812">
                <div className="section-1-kld1812">
                    <div className="col-md-6 left">
                        <img className='animate-section' src={Svg3} alt="" />
                        <div className="sub-title animate-section">BÁNH TƯƠI NƯỚNG VỚI NGUYÊN LIỆU ĐỊA PHƯƠNG & THEO MÙA</div>
                        <div className="title animate-section">Ngôi nhà bánh</div>
                        <div className="text animate-section">Sự bổ sung mới nhất cho gia đình chúng tôi, Ngôi nhà bánh là sự kết nối hoàn hảo giữa Cafe Kass và Kass. Quán cà phê tràn ngập ánh nắng này mang đến những chiếc bánh ngọt và mặn mới nướng, bánh mì mới nướng và đồ uống cà phê espresso sáng tạo mỗi ngày. Từ bánh sừng bò hạnh nhân nướng hai lần, bánh sừng bò kouign amann và bánh sừng bò mặn lấy cảm hứng từ chợ nông sản cho đến các món ngon không chứa gluten và thuần chay bao gồm bánh quế thuần chay nổi tiếng của chúng tôi, luôn có thứ gì đó dành cho tất cả mọi người! Những ổ bánh mì nướng tại nhà có sẵn để mua bảy ngày một tuần.</div>
                        <div className="text animate-section">Chúng tôi cung cấp dịch vụ ăn nhẹ hàng ngày bắt đầu lúc 11:30 sáng, với các loại kem và hương vị lấy cảm hứng theo mùa có sẵn ở dạng nón hoặc cốc, bao gồm cả nón bánh sừng bò đặc trưng của chúng tôi! Sân thượng của chúng tôi hiện mở cửa quanh năm để bạn tận hưởng, hoàn chỉnh với ghế Adirondack, khu vực râm mát và đầy nắng và tầm nhìn hoàn hảo ra Núi Rainier.</div>
                        <div className="text animate-section">Phòng trên sân thượng và trong nhà đều có sẵn để đặt cho các sự kiện riêng tư. Ngoài ra, hãy thưởng thức các loại rượu vang tự nhiên, bia địa phương và đồ uống lạnh khác được tuyển chọn cẩn thận từ Cửa hàng Chai Bakehouse của chúng tôi.</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734632520/BakehouseFeb2024_159-933x1400_ecc3kp.jpg" alt="" />
                    </div>
                </div>
                <div className="section-5-kld1812">
                    <div className="col-md-6 left">
                        <div className="sub-title animate-section">Đặt trước gói bánh quế ngày lễ!</div>
                        <div className="text animate-section">Hãy làm cho kỳ nghỉ của bạn vui vẻ và tươi sáng với gói bốn gói bánh quế nổi tiếng của chúng tôi! 100% thuần chay, những chiếc bánh quế này sẽ là sự bổ sung hoàn hảo cho bữa sáng muộn ngày lễ, bữa ăn nhẹ buổi chiều của bạn và sẽ trở thành một món quà tuyệt vời cho hàng xóm, giáo viên hoặc người thân yêu!</div>
                        <div className="text animate-section">Hiện đã có thể đặt hàng trước và nhận hàng vào ngày 24/12.</div>
                        <div className="text animate-section">Gói 4 gói bánh quế với kem phô mai thuần chay: 500.000 VND.</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734602906/CafeFloraPatio054-1400x933_irtlzx.jpg" alt="" />
                    </div>
                </div>
                <div className="section-6-kld1812">
                    <div className="col-md-6 left">
                        <div className="title animate-section">CHÀO MỪNG DỊP TIẾP THEO CỦA BẠN VỚI CHÚNG TÔI TRONG KHÔNG GIAN SỰ KIỆN RIÊNG CỦA CHÚNG TÔI!</div>
                        <div className="sub-text animate-section">Không gian tổ chức sự kiện của chúng tôi nằm ở tầng trên tại Ngôi nhà bánh và bao gồm sân thượng đẹp như tranh vẽ với tầm nhìn tuyệt đẹp ra Mt. Rainier ở phía xa cũng như không gian tổ chức sự kiện trong nhà của chúng tôi. Boong được che phủ một phần và cung cấp nhiều lựa chọn chỗ ngồi cũng như khu vực chỗ ngồi thân mật trong nhà của chúng tôi.</div>
                        <div className="sub-text animate-section">Thực đơn phục vụ của chúng tôi cung cấp mọi thứ, từ các loại trà kiểu Anh đến các bữa tiệc pizza kiểu La Mã. Chúng tôi tự hào cung cấp các nguyên liệu tươi sống, địa phương và lấy cảm hứng theo mùa và mong muốn được hợp tác với bạn để tạo ra một sự kiện đẹp mắt.</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734632557/Bakehouse008-1400x933_yex59e.jpg" alt="" />
                    </div>
                </div>

                <div className="section-3-kld1812">
                    <div className="section-3-1">
                        <div className="col-md-6 right animate-section">
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734632558/IMG_5813-2_kngbkr.jpg" alt="" />
                        </div>
                        <div className="col-md-6 left">
                            <div className="title animate-section">Thời gian & Địa điểm</div>
                            <div className="text animate-section">Những chiếc bánh kỷ niệm của chúng tôi sẽ là điểm nhấn hoàn hảo cho ngày sinh nhật, ngày kỷ niệm tiếp theo của bạn hoặc thậm chí chỉ là một đêm trong tuần!</div>
                            <div className="text animate-section">Ưu đãi bao gồm: Bánh Dừa 9" (thuần chay)</div>
                            <div className="text animate-section">Nhận tại cửa hàng</div>
                        </div>
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
                <div className="section-4-kld1812">
                    <div className="title animate-section">Thời gian & Địa điểm</div>
                    <div className="sub-title animate-section">Daily: 7:00am – 5:00pm</div>
                    <div className="sub-title animate-section">Tân Bình, Tp.HCM</div>
                </div>
            </div>
        </div>
    );
}

export default Index;

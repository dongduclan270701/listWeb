import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/Second_layout.scss'
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
            <div className="second-layout-kld1812">
                <div className="section-1-kld1812">
                    <div className="col-md-6 left">
                        <img className='animate-section' src={Svg3} alt="" />
                        <div className="sub-title animate-section">MÓN CHAY TƯƠI, ĐỊA PHƯƠNG, SỐNG ĐỘNG TẠI SÂN BAY SEA-TAC.</div>
                        <div className="title animate-section">Đồ Chay</div>
                        <div className="text animate-section">Tọa lạc tại Phòng chờ A, cổng A1 gần đó, Cafe Kass mang đến trải nghiệm ăn uống yên tĩnh và thư giãn không giống ai. Cửa sổ nhà kính lớn lấp đầy không gian bằng ánh sáng tự nhiên và cho phép khách quan sát hoạt động trên đường băng trong khi uống rượu và ăn uống. Quầy dịch vụ nhanh mang đến cơ hội mua đồ uống nhanh và đồ ăn nhẹ trên đường đi, bao gồm cà phê, bánh ngọt, quà tặng và các sản phẩm từ khắp vùng Tây Bắc Thái Bình Dương.</div>
                        <div className="text animate-section">Kass cung cấp một số món ăn cổ điển của Cafe Kass cùng với các món đặc biệt dành riêng cho sân bay. Thể hiện triết lý ẩm thực địa phương theo mùa của Cafe Kass, Kass là một không gian mở và hít thở không khí trong lành giữa sân bay nhộn nhịp. Hãy dành chút thời gian để thưởng thức các món ăn chay và thuần chay ngon miệng (với các lựa chọn không chứa gluten) trong chuyến du lịch của bạn tại nhà hàng ngồi hoặc quầy mua mang đi.</div>
                    </div>
                    <div className="col-md-6 right animate-section">
                        <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734534994/FloretSEA039-1400x933_oxrycm.jpg" alt="" />
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
                    <div className="title animate-section">Menus</div>
                    <div className="sub-title animate-section">Thực đơn của chúng tôi thay đổi theo mùa và chúng tôi cố gắng hết sức để cập nhật chúng nhiều nhất có thể. Xin lưu ý rằng một số mục menu có thể đã thay đổi.</div>
                </div>
                <div className="section-3-kld1812">
                    <div className="section-3-1">
                        <div className="col-md-6 right animate-section">
                            <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734631817/Map-fixed-2_Background_Removed_ggh3kq.png" alt="" />
                        </div>
                        <div className="col-md-6 left">
                            <div className="title animate-section">Thời gian & Địa điểm</div>
                            <div className="text animate-section">Tân Bình, Tp.HCM</div>
                            <div className="title animate-section">Thời gian & Địa điểm</div>
                            <div className="text animate-section">GRAB & GO:</div>
                            <div className="text animate-section">Daily: 4:30AM – 8PM</div>
                            <div className="text animate-section">DINING ROOM:</div>
                            <div className="text animate-section">Daily: 6AM – 10PM</div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default Index;

import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1812/scss/homepage.scss'
import Svg1 from 'assets/List_Website/KLD1812/images/banner-logo-1.svg'
import Svg2 from 'assets/List_Website/KLD1812/images/banner-logo-2.svg'
import Svg3 from 'assets/List_Website/KLD1812/images/banner-logo-3.svg'
import { NavLink } from 'react-router-dom';
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
            <div className='homepage-kld1812'>
                <div className='section-1-kld1812'>
                    <img
                        className="banner animate-section"
                        src={'https://res.cloudinary.com/dolydpat4/image/upload/v1734534995/FloraSpring23_005-1_eij0xi.jpg'}
                    />
                    <div className='text-banner animate-section'>
                        <img src={Svg2} alt="" />
                        <img src={Svg1} alt="" />
                        <img src={Svg3} alt="" />
                    </div>
                </div>
                <div className='section-2-kld1812'>
                    <div className='row section-2-1'>
                        <div className='col-md-6 section-2-1-1'>
                            <div className='sub-title animate-section'>Baker's house</div>
                            <div className='title animate-section'>Hiện đã có đơn đặt hàng trước bánh quế!</div>
                            <button className='btn-more animate-section'>Xem thêm</button>
                        </div>
                        <div className='col-md-6 section-2-1-1 '>
                            <div className='sub-title animate-section'>Cafe Kass</div>
                            <div className='title animate-section'>Mua thẻ quà tặng kỳ nghỉ của bạn ở đây!</div>
                            <button className='btn-more animate-section'>Đặt ngay</button>
                        </div>
                        <div className='col-md-6 section-2-1-1'>
                            <div className='sub-title animate-section'>Cafe Kass & Baker's house</div>
                            <div className='title animate-section'>Đặt bữa tiệc riêng tư của bạn bây giờ!</div>
                            <button className='btn-more animate-section'>Xem thêm</button>
                        </div>
                        <div className='col-md-6 section-2-1-1'>
                            <div className='sub-title animate-section'>Cafe Kass</div>
                            <div className='title animate-section'>Hiện đã có thể đặt chỗ cho bữa tối!!</div>
                            <button className='btn-more animate-section'>Đặt ngay</button>
                        </div>
                    </div>
                </div>
                <div className='section-3-kld1812'>
                    <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734534995/CafeFlora-Food_Belathee-Photography_fpkdbr.jpg" className='col-md-6 animate-section' alt="" />
                    <div className='col-md-6 content-kld1812'>
                        <div className='title animate-section'>Ẩm thực chay sáng tạo</div>
                        <div className='text animate-section'>Mục tiêu của chúng tôi rất đơn giản: thành lập các nhà hàng, quán cà phê và tiệm bánh chay thân thiện, dựa vào cộng đồng, có thể trở thành doanh nghiệp kiểu mẫu tận tâm nuôi dưỡng sự thịnh vượng của hành tinh chúng ta. Chúng tôi tự hào cung cấp nhiều loại thực phẩm và đồ uống được chế biến từ các nguyên liệu hữu cơ, có nguồn gốc địa phương và bền vững.</div>

                    </div>
                </div>
                <div className='section-4-kld1812'>
                    <div className='row section-4-1'>
                        <div className='col-md-6 section-4-1-1'>
                            <img className='animate-section'src={Svg2} alt="" />
                            <div className='title animate-section'>Ẩm thực chay đầy cảm hứng và ngon miệng cho tất cả mọi người.</div>
                            <div className='text animate-section'>Một bầu không khí tươi sáng và nhộn nhịp, hoàn hảo cho một bữa ăn nhanh, bữa sáng muộn hoặc những buổi tụ tập trang trọng hơn, Cafe Kass là nhà hàng lân cận của bạn.</div>
                            <div className='btn-list animate-section'>
                                <NavLink to>Về chúng tôi</NavLink>
                                <NavLink to>Đặt chỗ</NavLink>
                                <NavLink to>Menu</NavLink>
                                <NavLink to>Địa chỉ</NavLink>
                            </div>
                        </div>
                        <div className='col-md-6 section-4-1-2'><img className=' animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734534994/Flora049-933x1400-1_bue2zj.jpg" alt="" /></div>

                    </div>
                    <div className='row section-4-2'>
                        <div className='col-md-6 section-4-2-2'><img className=' animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734534994/BakehouseHoliday007-933x1400-1_eop52m.jpg" alt="" /></div>
                        <div className='col-md-6 section-4-2-1'>
                            <img className=' animate-section'src={Svg1} alt="" />
                            <div className='title animate-section'>Bánh ngọt và bánh mì mới nướng với nguyên liệu theo mùa của địa phương</div>
                            <div className='text animate-section'>Một quán cà phê và tiệm bánh ấm cúng mang các loại bánh ngọt, bánh mì, bánh mì sandwich lấy cảm hứng theo mùa và thực đơn đầy đủ các đồ uống cà phê espresso Stumptown đầy sáng tạo</div>
                            <div className='btn-list animate-section'>
                                <NavLink to>Về chúng tôi</NavLink>
                                <NavLink to>Thời gian & Địa điểm</NavLink>
                            </div>
                        </div>

                    </div>
                    <div className='row section-4-3'>
                        <div className='col-md-6 section-4-3-1'>
                            <img className=' animate-section' src={Svg3} alt="" />
                            <div className='title animate-section'>Đồ ăn chay tươi, địa phương, tốt cho sức khỏe</div>
                            <div className='text animate-section'>Cafe Kass cung cấp hai lựa chọn ăn uống để phù hợp với lịch trình du lịch bận rộn của bạn: nhà hàng + quầy bar phục vụ đầy đủ dịch vụ và quầy mua mang đi.</div>
                            <div className='btn-list animate-section'>
                                <NavLink to>Menus</NavLink>
                                <NavLink to>Thời gian & Địa điểm</NavLink>
                            </div>
                        </div>
                        <div className='col-md-6 section-4-3-2'><img className=' animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734534994/FloretSEA039-1400x933_oxrycm.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

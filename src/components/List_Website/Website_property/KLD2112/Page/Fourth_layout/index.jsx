import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/fourth_layout.scss'
import { NavLink } from 'react-router-dom'
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
        <div className='fourth-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734884460/2bc0de08-5ac8-4350-aed5-c2e3c1da41b8_opkss2.avif"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Báo Cáo Thị Trường</div>
                    <div className="sub-title animate-section">biến dữ liệu thành thông tin chi tiết cho các quyết định thực tế thông minh
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Tham gia cùng hơn 20.000 người đăng ký có giá trị ròng cao để có được thông tin chi tiết độc quyền về bất động sản cao cấp</div>
                <div className="sub-title animate-section">Thu thập kiến ​​thức nội bộ, các xu hướng có thể hành động và lời khuyên chiến lược được những người mua, người bán và những người đam mê thị trường ưu tú.</div>
                <div className='form-submit animate-section'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <button className='btn-link animate-section'>gửi</button>
                </div>
            </div>
            <div className="section-3-kld2112">
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Thông tin chi tiết độc quyền</div>
                        <div className='text animate-section'>Hiểu điều gì đang thúc đẩy hành vi của người mua và người bán trong thị trường xa xỉ với kiến ​​thức nội bộ mà bạn sẽ không tìm thấy ở nơi nào khác. xu hướng cung cấp những hiểu biết độc quyền về các xu hướng mới nổi, cơ hội thị trường độc đáo và chiến lược của các cá nhân có giá trị ròng cao. Tham gia cùng hơn 20.000 người đăng ký ưu tú dựa vào những thông tin chi tiết này để đưa ra quyết định thông minh hơn.</div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1734884529/7512a4b7-9f09-4026-a607-f4e39a23b9c9_h6rkst.avif' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1734884530/photo-1518186285589-2f7649de83e0_sidtd7.jpg' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Xu hướng thị trường</div>
                        <div className='text animate-section'>Theo dõi những diễn biến mới nhất trên thị trường bất động sản hạng sang. xu hướng phân tích xu hướng người mua và người bán hiện tại, sự thay đổi về giá và thay đổi hàng tồn kho, giúp bạn hiểu được động lực của bối cảnh cạnh tranh này. Với phân tích xu hướng dựa trên dữ liệu của chúng tôi, bạn sẽ sẵn sàng thực hiện những bước đi sáng suốt</div>
                        <NavLink to={'/website/template/KLD2112/xu-huong'} className='btn-link animate-section'>Xem Lịnh sử xu hướng</NavLink>
                    </div>
                </div>
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <div className='title animate-section'>Tư vấn chiến lược</div>
                        <div className='text animate-section'>Cho dù bạn đang tìm cách tối ưu hóa danh sách của mình hay đàm phán mua hàng, The xu hướng đều cung cấp lời khuyên có mục tiêu phù hợp với điều kiện thị trường hiện tại. Những hiểu biết chuyên môn của chúng tôi được điều chỉnh để giúp cả người mua và người bán tận dụng thời gian, giá cả và chiến lược có lợi cho họ.</div>
                    </div>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1734884528/19ece944-2093-4254-bbca-9ae028111ea9_kx47zi.avif' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://res.cloudinary.com/dolydpat4/image/upload/v1734884527/27b695e2-c0da-4234-b53b-a1a810c9b2df_py84nv.avif' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <div className='title animate-section'>Phân tích chuyên gia</div>
                        <div className='text animate-section'>Một chuyên gia được công nhận trong thị trường bất động sản cao cấp, The xu hướng đưa ra những phân tích chuyên môn kết nối các xu hướng địa phương với những ảnh hưởng kinh tế rộng lớn hơn. Có được cái nhìn toàn diện về cách các yếu tố như lãi suất, tâm lý người mua và sự thay đổi kinh tế tác động đến thị trường cao cấp.</div>
                    </div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Đăng ký ngay để có thông tin chi tiết độc quyền</div>
                <div className="sub-title animate-section">Thu thập kiến ​​thức nội bộ, các xu hướng có thể hành động và lời khuyên chiến lược được những người mua, người bán và những người đam mê thị trường ưu tú.</div>
                <div className='form-submit animate-section'>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <button className='btn-link animate-section'>gửi</button>
                </div>
            </div>
        </div>
    );
}

export default Index;

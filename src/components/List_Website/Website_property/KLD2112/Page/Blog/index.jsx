import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/blog.scss'
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
        <div className='blog-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978095/tuph8n9fgdgcrnuj3kds_1_bexgao.webp"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Blog & Tin tức</div>
                    <div className="sub-title animate-section">Cập nhật tin tức và thông tin mới nhất về bất động sản
                    </div>
                </div>
            </div>
            <div className="section-3-kld2112">
                <div className="report">
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978094/oeydwjw9fyacqnxtcg0c_z9ot9h.avif" alt="" /></div>
                        <div className="title-report animate-section">12 Phong cách kiến ​​trúc phổ biến nhất ở Manhattan</div>
                        <div className="sub-report animate-section">Trải nghiệm sự pha trộn của thiết kế kết cấu tại Manhattan.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950942/photo-1685665018097-17b32c0b1ec2_nndmsg.jpg" alt="" /></div>
                        <div className="title-report animate-section">6 ý tưởng nâng cấp căn hộ chung cư</div>
                        <div className="sub-report animate-section">Nâng tầm căn hộ Manhattan của bạn bằng những cải tiến chu đáo kết hợp giữa phong cách, chức năng và sự tinh tế của đô thị.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978094/m15gq4kcwd6cm0m8pbfv_afled9.avif" alt="" /></div>
                        <div className="title-report animate-section">Làm thế nào để sở hữu ngôi nhà mơ ước của bạn: Hướng dẫn từng bước</div>
                        <div className="sub-report animate-section">Tự tin sở hữu nhà tại West Village.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978095/lji3gjb3rbqzh5pqo1q2_nt5mmb.avif" alt="" /></div>
                        <div className="title-report animate-section">Bạn có nên mua căn hộ chung cư cao tầng không?</div>
                        <div className="sub-report animate-section">Nâng cao trải nghiệm sống của bạn với căn hộ chung cư cao tầng tại Manhattan.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978095/w1se8kysbz0ngn094ufs_unswfz.avif" alt="" /></div>
                        <div className="title-report animate-section">9 Chiến lược đàm phán bất động sản từ một chuyên gia</div>
                        <div className="sub-report animate-section">Giúp bạn đạt được thành công.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978094/xbysaymxdlywcqmbrnu8_dxddyf.avif" alt="" /></div>
                        <div className="title-report animate-section">Làm thế nào để mua một ngôi nhà sang trọng</div>
                        <div className="sub-report animate-section">Hướng dẫn toàn diện để tìm được sản phẩm phù hợp.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978095/v0t9xluni5h4rtuabzo9_mlkhkd.avif" alt="" /></div>
                        <div className="title-report animate-section">10 mẹo giúp việc chuyển nhà bớt căng thẳng hơn</div>
                        <div className="sub-report animate-section">Quản lý di chuyển dễ dàng: Chiến lược thông minh cho quá trình chuyển đổi suôn sẻ hơn.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978095/gesjzlcblojnrh4qinfn_qtrpjf.avif" alt="" /></div>
                        <div className="title-report animate-section">6 lý do để chuyển đến Manhattan</div>
                        <div className="sub-report animate-section">Hãy biến Manhattan thành cuộc phiêu lưu tiếp theo của bạn.</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734978097/f3pr5vsnlileocfw8t5j_dgrdve.avif" alt="" /></div>
                        <div className="title-report animate-section">Những Điểm Tham Quan Hàng Đầu Ở Manhattan, NY, Dành Cho Người Dân Địa Phương Hoặc Khách Du Lịch</div>
                        <div className="sub-report animate-section">Khám phá sự thú vị.</div>
                    </NavLink>
                </div>
                <div className='pagination-report animate-section'>
                    <div><i className='fa fa-chevron-left'></i></div>
                    <div className='active'>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div><i className='fa fa-chevron-right'></i></div>
                </div>
            </div>
            <div className="section-2-kld2112">
                <div className="title animate-section">Nhận cập nhật xu hướng độc ​​quyền trong hộp thư đến của bạn</div>
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

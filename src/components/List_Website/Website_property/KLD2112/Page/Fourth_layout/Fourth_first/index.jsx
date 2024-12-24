import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/fourth_first.scss'
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
        <div className='fourth-first-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734884460/2bc0de08-5ac8-4350-aed5-c2e3c1da41b8_opkss2.avif"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Xu hướng thị trường</div>
                    <div className="sub-title animate-section">biến dữ liệu thành thông tin chi tiết cho các quyết định thực tế thông minh
                    </div>
                </div>
            </div>
            <div className="section-3-kld2112">
                <div className="title animate-section">Báo cáo lịch sử</div>
                <div className="report">
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950943/nn2inlkwwe5pwcmn0zok_hoxhwl.avif" alt="" /></div>
                        <div className="title-report animate-section">Xu hướng sang trọng 12/17/24</div>
                        <div className="sub-report animate-section">Nhà môi giới | 18 / 12 / 2024</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950942/photo-1685665018097-17b32c0b1ec2_nndmsg.jpg" alt="" /></div>
                        <div className="title-report animate-section">Xu hướng sang trọng 12/17/24</div>
                        <div className="sub-report animate-section">Nhà môi giới | 11 / 12 / 2024</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950942/fbad539e-9313-481d-8c67-8d3df8eba04f_bpksgi.avif" alt="" /></div>
                        <div className="title-report animate-section">Xu hướng sang trọng 12/17/24</div>
                        <div className="sub-report animate-section">Nhà môi giới | 04 / 12 / 2024</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950935/jnfevx4y3zqzvchkwgbd_lbxxyx.avif" alt="" /></div>
                        <div className="title-report animate-section">Xu hướng sang trọng 12/17/24</div>
                        <div className="sub-report animate-section">Nhà môi giới | 13 / 11 / 2024</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950934/ldbslobiup972hncbvib_cvah94.avif" alt="" /></div>
                        <div className="title-report animate-section">Xu hướng sang trọng 12/17/24</div>
                        <div className="sub-report animate-section">Nhà môi giới | 11 / 11 / 2024</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734950935/mbqqexyor5vfxf6sa2dg_xkxict.avif" alt="" /></div>
                        <div className="title-report animate-section">Xu hướng sang trọng 12/17/24</div>
                        <div className="sub-report animate-section">Nhà môi giới | 08 / 10 / 2024</div>
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

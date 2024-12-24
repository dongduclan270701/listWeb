import React, { useEffect } from 'react';
import 'assets/List_Website/KLD2112/scss/second_first.scss'
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
        <div className='second-first-kld2112'>
            <div className="section-1-kld2112">
                <img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735032131/portfolio-1_zg3vgz.webp"></img>
                <div className='introduce'>
                    <div className='title animate-section'>Bất động sản đã bán</div>
                    <div className="sub-title animate-section">Duyệt danh sách của tôi và tìm ngôi nhà mơ ước tiếp theo của bạn. Liên hệ với tôi để biết thêm thông tin.
                    </div>
                </div>
            </div>
            <div className="section-3-kld2112">
                <div className="report">
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1734863566/nmalps2msk2i5ilmh4ac_affh8u.avif" alt="" /></div>
                        <div className="title-report animate-section">$14.950.000</div>
                        <div className="sub-report animate-section">1049 Fifth Avenue Penthouse 3, Upper East Side, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/vr9sbmapipri97yv3oee_xhunds.jpg" alt="" /></div>
                        <div className="title-report animate-section">$5.950.000</div>
                        <div className="sub-report animate-section">985 Park Avenue Garden Triplex, Phía Đông Thượng, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/s3tvw5sy0vlqgkw56gnt_vkkzcv.jpg" alt="" /></div>
                        <div className="title-report animate-section">$7.950.000</div>
                        <div className="sub-report animate-section">30 East 85th Street Unit 20A, New York, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/tyyk7dvtd4xz9n46ilpg_zdt8mp.avif" alt="" /></div>
                        <div className="title-report animate-section">$9.950.000</div>
                        <div className="sub-report animate-section">1049 Fifth Avenue Unit 14A, Upper East Side, NY</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/bvftischsehrbwqacxli_uibdmf.avif" alt="" /></div>
                        <div className="title-report animate-section">$11.950.000</div>
                        <div className="sub-report animate-section">12 WARREN ST, PH</div>
                        <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>
                    </NavLink>
                    <NavLink to={'/website/template/KLD2112/blog-detail'} className="col-md-4 report-detail">
                        <div className="image animate-section"><img src="https://res.cloudinary.com/dolydpat4/image/upload/v1735031988/ojofh6t6wet5nyuznfdg_tnrioh.jpg" alt="" /></div>
                        <div className="title-report animate-section">$13.950.000</div>
                        <div className="sub-report animate-section">641 Đại lộ số 5, Đơn vị 32D, New York, NY
                            <div className='text-report animate-section'>3 giường | 4,5 phòng tắm | 3.572 feet vuông</div>

                        </div>
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

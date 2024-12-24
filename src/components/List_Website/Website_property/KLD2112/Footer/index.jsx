import React,{useEffect} from 'react';
import Logo from 'assets/List_Website/KLD2112/images/logo-property.svg'
import 'assets/List_Website/KLD2112/scss/footer.scss'
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
        <div className='footer-kld2112'>
            <div className="section-6-kld2112 animate-section">
                <img className=' animate-section' src="https://res.cloudinary.com/dolydpat4/image/upload/v1734809235/manhattan-new-york-skyline-neighborhoods_jfrpcm.jpg" alt="" />
                <div className='section-6-1'>
                    <div className="title animate-section">Làm việc với tôi</div>
                    <div className="text animate-section">Một hoạt động kinh doanh bất động sản sang trọng đầy sáng tạo, cung cấp dịch vụ trợ giúp đặc biệt ở mức độ ưu tú thông qua hoạt động tiếp thị đẳng cấp thế giới chưa từng có và phương pháp kinh doanh thực tế. Sứ mệnh của cô là mang đến cho khách hàng trải nghiệm đặc biệt đồng thời giúp họ đạt được kết quả tốt nhất có thể.</div>
                    <button className='btn-link animate-section'>Liên hệ với tôi</button>
                </div>
            </div>
            <div className="section-1-kld2112 animate-section">
                <img src={Logo} alt="" />
            </div>
            <div className="row section-2-kld2112">
                <div className="col-md-3">
                    <div className="title animate-section">Liên hệ</div>
                    <div className="sub-title animate-section">(+84) 37 938 2992</div>
                    <div className="sub-title animate-section">dongduclan277@gmail.com</div>
                </div>
                <div className="col-md-3">
                    <div className="title animate-section">Địa chỉ</div>
                    <div className="sub-title animate-section">Tân Bình, TP.HCM</div>
                    <div className="sub-title animate-section">Viet Nam</div>
                </div>
            </div>
            <div className="row section-3-kld2112">
                <div className="row col-md-9 left">
                    <div className="col-md-2 animate-section">Trang chủ</div>
                    <div className="col-md-2 animate-section">Về tôi</div>
                    <div className="col-md-2 animate-section">Nhà nổi bật</div>
                    <div className="col-md-2 animate-section">Hàng xóm</div>
                    <div className="col-md-2 animate-section">Đánh giá</div>
                    <div className="col-md-2 animate-section">Kết nối</div>
                </div>
                <div className="col-md-3 right animate-section">
                    <div><i className="fa-brands fa-facebook-f"></i></div>
                    <div><i className="fa-brands fa-facebook-messenger"></i></div>
                    <div><i className="fa fa-link"></i></div>
                </div>
            </div>
            <div className="section-4-kld2112 animate-section">
                <hr />
                <div style={{ textAlign: 'center', padding: '10px 10px 20px 10px', fontWeight:'600' }}>Website created by Kass ( <span style={{color:'#af8647'}}>Đồng Đức Lân</span> ) - Gmail: <span style={{color:'#af8647'}}>dongduclan277@gmail.com</span> - Hotline: <span style={{color:'#af8647'}}>0379382992</span></div>
            </div>
            
        </div>
    );
}

export default Index;

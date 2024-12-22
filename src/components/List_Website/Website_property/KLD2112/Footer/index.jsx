import React from 'react';
import Logo from 'assets/List_Website/KLD2112/images/logo-property.svg'
import 'assets/List_Website/KLD2112/scss/footer.scss'
const Index = () => {
    return (
        <div className='footer-kld2112'>
            <div className="section-1-kld2112">
                <img src={Logo} alt="" />
            </div>
            <div className="row section-2-kld2112">
                <div className="col-md-3">
                    <div className="title">Liên hệ</div>
                    <div className="sub-title">(+84) 37 938 2992</div>
                    <div className="sub-title">dongduclan277@gmail.com</div>
                </div>
                <div className="col-md-3">
                    <div className="title">Địa chỉ</div>
                    <div className="sub-title">Tân Bình, TP.HCM</div>
                    <div className="sub-title">Viet Nam</div>
                </div>
            </div>
            <div className="row section-3-kld2112">
                <div className="row col-md-9 left">
                    <div className="col-md-2">Trang chủ</div>
                    <div className="col-md-2">Về tôi</div>
                    <div className="col-md-2">Nhà nổi bật</div>
                    <div className="col-md-2">Hàng xóm</div>
                    <div className="col-md-2">Đánh giá</div>
                    <div className="col-md-2">Kết nối</div>
                </div>
                <div className="col-md-3 right">
                    <div><i className="fa-brands fa-facebook-f"></i></div>
                    <div><i className="fa-brands fa-facebook-messenger"></i></div>
                    <div><i className="fa fa-link"></i></div>
                </div>
            </div>
            <div className="section-4-kld2112">
                <hr />
                <div style={{ textAlign: 'center', padding: '10px 10px 20px 10px', fontWeight:'600' }}>Website created by Kass ( <span style={{color:'#af8647'}}>Đồng Đức Lân</span> ) - Gmail: <span style={{color:'#af8647'}}>dongduclan277@gmail.com</span> - Hotline: <span style={{color:'#af8647'}}>0379382992</span></div>
            </div>
        </div>
    );
}

export default Index;

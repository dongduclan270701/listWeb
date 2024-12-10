import React from 'react';
import 'assets/Homepage/scss/footer.scss'
import signature from 'assets/Homepage/images/logo3.svg'
const Index = () => {
    return (
        <div className='footer-homepage'>
            <div className='row content'>
                <div className='col-md-2' style={{paddingBottom:15}}>
                    <img src={signature} alt='' />
                </div>
                <div className='col-md-5 contact-footer' style={{paddingBottom:15}}>
                    <div><span style={{color:'#50adff'}}>HOTLINE:</span> 0379382992 - Lân ( Chủ sở hữu website )</div>
                    <div><span style={{color:'#50adff'}}>GMAIL</span>: dongduclan277@gmail.com</div>
                    <div><span style={{color:'#50adff'}}>HOẠT ĐỘNG</span>: TỪ 7h ĐẾN 22h HẰNG NGÀY</div>
                </div>
                <div className='col-md-4 info-footer' style={{paddingBottom:15}}>
                    <div style={{fontWeight:'bold', textTransform:'uppercase', fontSize:18, letterSpacing:1, color:'#50adff'}}>kho mẫu website của KL Website</div>
                    <div>Tất cả nẫu website sử dụng đều được chủ nhân của website này thiết kế và lập trình riêng.</div>
                </div>
                
                <hr/>
                
                <div style={{textAlign:'center', fontWeight:'bold'}}>Website created by <span style={{color:'#50adff'}}>Kass ( Đồng Đức Lân )</span> - Gmail: <span style={{color:'#50adff'}}>dongduclan277@gmail.com</span> - Hotline: <span style={{color:'#50adff'}}>0379382992</span></div>
                
            </div>
        </div>
    );
}

export default Index;

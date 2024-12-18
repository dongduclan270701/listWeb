import React from 'react';
import Logo from 'assets/List_Website/KLD1812/images/logo-restaurant.svg'
import 'assets/List_Website/KLD1812/scss/footer.scss'
const Index = () => {
    return (
        <div className='footer-kld1813'>
            <div className='section-1-kld1812'>
                <img className='col-md-2' src={Logo} alt="" />
                <div className='col-md-4 contact'>
                    <div className='title'>Contact</div>
                    <div className='sub-title'>Hotline: (+84) 37 938 2992</div>
                    <div className='sub-title'>Gmail: dongduclan277@gmail.com</div>
                </div>
                <div className='col-md-6 contact'>
                    <div className='title'>Sign-up for our E-Newsletter</div>
                    <div className='sub-title'>Location: Tân Bình, Tp.HCM</div>
                    <div className='row sub-title'>
                        <div className='col-4'>DUC LAN WEBSITE</div>
                        <div className='col-4'>Terms & Privacy</div>
                        <div className='col-4'>Site by People</div>
                    </div>
                </div>

            </div>
            <hr style={{width:1200, margin:'0 auto', padding:'0'}}/>
            <div style={{ textAlign: 'center', padding:'20px 10px' }}>Website created by Kass ( Đồng Đức Lân ) - Gmail: dongduclan277@gmail.com - Hotline: 0379382992</div>
        </div>
    );
}

export default Index;

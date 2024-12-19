import React from 'react';
import Logo from 'assets/List_Website/KLD1812/images/logo-restaurant.svg'
import 'assets/List_Website/KLD1812/scss/footer.scss'
import Svg1 from 'assets/List_Website/KLD1812/images/banner-logo-1.svg'
import Svg2 from 'assets/List_Website/KLD1812/images/banner-logo-2.svg'
import Svg3 from 'assets/List_Website/KLD1812/images/banner-logo-3.svg'
import { NavLink } from 'react-router-dom';
const Index = () => {
    return (
        <div className='footer-kld1812'>
            <div className="section-2-kld1812">
                <div className="section-2-1">
                    <div className="col-md-4">
                        <img src={Svg2} alt="" />
                        <div className="title">Thiết kế website</div>
                        <NavLink to={'https://www.kassdev.com'} className="sub-title">kassdev.com</NavLink>
                    </div>
                    <div className="col-md-4">
                        <img src={Svg1} alt="" />
                        <div className="title">Thiết kế web apps</div>
                        <NavLink to={'https://www.kassdev.com'} className="sub-title">kassdev.com</NavLink>
                    </div>
                    <div className="col-md-4">
                        <img src={Svg3} alt="" />
                        <div className="title">Nâng cấp website</div>
                        <NavLink to={'https://www.kassdev.com'} className="sub-title">kassdev.com</NavLink>
                    </div>
                </div>
            </div>
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
            <hr style={{ width: 1200, margin: '0 auto', padding: '0' }} />
            <div style={{ textAlign: 'center', padding: '20px 10px', fontWeight:'600' }}>Website created by Kass ( Đồng Đức Lân ) - Gmail: dongduclan277@gmail.com - Hotline: 0379382992</div>
        </div>
    );
}

export default Index;

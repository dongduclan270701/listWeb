import React from 'react';
import 'assets/List_Website/KLD1312/scss/contact.scss'
import { NavLink } from 'react-router-dom';
import Mail from 'assets/List_Website/KLD1312/images/mail.svg'
const Index = () => {
    return (
        <div className='contact-kld1312'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-820609122.jpg'}
                />
                <div className='text-banner'>
                    <div className='title'>Contact us</div>
                    <div className='sub-title'>Get Intouch and keep in touch</div>
                </div>
            </div>
            <div className='section-2'>
                <div className='row content'>
                    <div className='col-md-4 box'>
                        <i className='fa fa-phone' style={{ fontSize: 50 }} />
                        <div className='title'>Phone</div>
                        <div className='sub-title'>A wonderful serenity has taken possession of my entire soul, like these.</div>
                        <NavLink to='tel:0379382992'>(+84)37 938 2992</NavLink>
                    </div>
                    <div className='col-md-4 box'>
                        <img src={Mail} width={50} alt="" />
                        <div className='title'>Email</div>
                        <div className='sub-title'>A wonderful serenity has taken possession of my entire soul, like these.</div>
                        <NavLink to='tel:0379382992'>dongduclan277@gmail.com</NavLink>
                    </div>
                    <div className='col-md-4 box'>
                        <i className='fa fa-location-arrow' style={{ fontSize: 50 }} />
                        <div className='title'>location</div>
                        <div className='sub-title'>A wonderful serenity has taken possession of my entire soul, like these.</div>
                        <NavLink to='tel:0379382992'>TP.HCM</NavLink>
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div className='title'>Leave us your info</div>
                <div className='sub-title'>and we will get back to you.</div>
                <div className='form-contact'>
                    <div className='content-contact'>
                        <label className='label-contact' >Full Name<span style={{ color: 'red' }}>*</span>:</label>
                        <input type="text" placeholder='Full Name' />
                    </div>
                    <div className='content-contact'>
                        <label className='label-contact' >Email<span style={{ color: 'red' }}>*</span>:</label>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='content-contact'>
                        <label className='label-contact' >Subject<span style={{ color: 'red' }}>*</span>:</label>
                        <input type="text" placeholder='Subject' />
                    </div>
                    <div className='content-contact'>
                        <label className='label-contact' >Message<span style={{ color: 'red' }}>*</span>:</label>
                        <textarea rows={4} type="text" placeholder='Message' />
                    </div>
                    <button className='button-contact'>Submit</button>
                </div>

            </div>
            <div className='section-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31352.84105272246!2d106.6326591518385!3d10.803259473420336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293818af3a73%3A0xcd8d16d1180acc8b!2zVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1734168570514!5m2!1svi!2s" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Index;

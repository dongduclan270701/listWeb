import React from 'react';
import 'assets/List_Website/KLD1312/scss/footer.scss'
import Logo from 'assets/List_Website/KLD1312/images/logo_education.svg'
const Index = () => {
    return (
        <div className='footer-kld1312'>
            <div className='section-9'>
                <div className='row'>
                    <div className='col-md-6 left'>
                        <div className='title'>Subscribe new and go premium for one month</div>
                        <div className='sub-title'>Subscribe to our newsletter.
                            <br />Get updates to news and events.
                        </div>
                    </div>
                    <div className='col-md-6 right'>
                        <input type='text' className='col-8 input' placeholder='Your email address' colorP />
                        <div className='col-4 submit'>subscribe</div>
                    </div>
                </div>
            </div>
            <div className='row section'>
                <div className='col-md-4 section-1'>
                    <img src={Logo} alt='' />
                    <div className='text'>We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist.</div>
                </div>
                <div className='col-md-4 section-2'>
                    <div className='title'>Contact</div>
                    <div className='content'>
                        <div>Mon – Fri: 8.00am 6.00pm</div>
                        <div>Tell: (+84)37 938 2992</div>
                        <div>Gmail: dongduclan277@gmail.com</div>
                    </div>
                </div>
                <div className='col-md-4 section-3'>
                    <div className='title'>Usefull Links</div>
                    <div className='row content'>
                        <div className='col-6'>Course</div>
                        <div className='col-6'>About us</div>
                        <div className='col-6'>Blogs</div>
                        <div className='col-6'>Pages</div>
                        <div className='col-6'>Courses</div>
                    </div>
                </div>
                <hr />
                <div style={{ textAlign: 'center' }}>Website created by Kass ( Đồng Đức Lân ) - Gmail: dongduclan277@gmail.com - Hotline: 0379382992</div>
            </div>

        </div>
    );
}

export default Index;

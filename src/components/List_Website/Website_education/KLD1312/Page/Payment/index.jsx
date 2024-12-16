import React, { useState } from 'react';
import 'assets/List_Website/KLD1312/scss/payment.scss';
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [isGuest, setIsGuest] = useState(1)
    return (
        <div className='payment-kld1312'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/shutterstock_218235004.jpg'}
                />
                <div className='text-banner'>
                    <div className='title'>Payment</div>
                    <div className='sub-title'>Pay your cart</div>
                </div>
            </div>
            <div className='section-2'>
                <NavLink to={'/website/template/KLD1312'}>Homepage</NavLink>
                <div>/</div>
                <div>Payment</div>
            </div>
            <div className='section-3'>
                <div className='row payment-cart'>

                    {isGuest === 1 &&
                        <div className='col-md-6 left'>
                            <div className='title'>As Guest</div>
                            <input type="email" placeholder='Enter your email' />
                            <div className='text'>An order key to activate the course will be sent to your email after the payment has proceeded successfully.</div>
                            <div className='text'>Or you can <a onClick={() => setIsGuest(2)}>Sign in</a>, <a onClick={() => setIsGuest(3)}>Sign up</a> now.</div>
                            <textarea rows="4" placeholder='Note message'></textarea>
                            <div className='title'>Payment <span><i className='fa fa-lock' ></i>Secure Connection</span></div>
                            <div className='select-payment-type'>
                                <span className='paypal'>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/plugins/learnpress/assets/images/paypal-logo-preview.png" alt="" />
                                </span>
                                <span className='cod'>
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/plugins/learnpress/inc/gateways/offline-payment/images/cod.png" alt="" />
                                </span>
                            </div>
                            <button className='btn-pay'>Pay order</button>
                        </div>
                    }
                    {isGuest === 2 &&
                        <div className='col-md-6 left'>
                            <div className='title'>Sign in</div>
                            <div className='label-left'>Username or email <span style={{ color: 'red' }}>*</span></div>
                            <input type="email" placeholder='Enter your username or email' />
                            <div className='label-left'>Password <span style={{ color: 'red' }}>*</span></div>
                            <input type="password" placeholder='Enter your password' />
                            <button className='btn-pay'>Sign in</button>
                            <div className='text'>Or you can <a onClick={() => setIsGuest(3)}>Sign up</a>, <a onClick={() => setIsGuest(1)}>Guest</a> now.</div>
                        </div>
                    }
                    {isGuest === 3 &&
                        <div className='col-md-6 left'>
                            <div className='title'>Sign up</div>
                            <div className='label-left'>Email <span style={{ color: 'red' }}>*</span></div>
                            <input type="email" placeholder='Enter your email' />
                            <div className='label-left'>Username <span style={{ color: 'red' }}>*</span></div>
                            <input type="text" placeholder='Enter your username' />
                            <div className='label-left'>Confirm password <span style={{ color: 'red' }}>*</span></div>
                            <input type="password" placeholder='Enter your confirm password' />
                            <div className='label-left'>Password <span style={{ color: 'red' }}>*</span></div>
                            <input type="password" placeholder='Enter your password' />
                            <button className='btn-pay'>Sign up</button>
                            <div className='text'>Or you can <a onClick={() => setIsGuest(2)}>Sign in</a>, <a onClick={() => setIsGuest(1)}>Guest</a> now.</div>
                        </div>
                    }
                    <div className='col-md-6 right'>
                        <div className='title'>Your order</div>
                        <div className='table-cart'>
                            <div className='name'>The Basic Of Financial Analyst Course</div>
                            <div className='price'>$100.00</div>
                        </div>
                        <div className='sub-total'>
                            <div className='name'>Subtotal</div>
                            <div className='price'>$100.00</div>
                        </div>
                        <div className='total'>
                            <div className='name'>Total</div>
                            <div className='price'>$100.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

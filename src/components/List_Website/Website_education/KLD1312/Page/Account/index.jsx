import React, { useState } from 'react';
import 'assets/List_Website/KLD1312/scss/account.scss';
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [isPage, setIsPage] = useState(1)
    const [isMyCourse, setIsMyCourse] = useState(1)
    const [isQuiz, setIsQuiz] = useState(1)
    const [isSetting, setIsSetting] = useState(1)
    const [isCourseDetail, setCourseDetail] = useState(1)
    return (
        <div className='account-kld1312'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/shutterstock_218235004.jpg'}
                />
                <div className='text-banner'>
                    <div className='title'>Account</div>
                    <div className='sub-title'>You can check your profile and course</div>
                </div>
            </div>
            <div className='section-2'>
                <div className='row'>
                    <div className='col-md-3 left'>
                        <div className={isPage === 1 ? 'nav-account active' : 'nav-account'} onClick={() => setIsPage(1)}>
                            <span><i className='fa fa-book-open'></i></span>
                            <span>My course</span>
                        </div>
                        <div className={isPage === 2 ? 'nav-account active' : 'nav-account'} onClick={() => setIsPage(2)}>
                            <span><i className='fa fa-puzzle-piece'></i></span>
                            <span>Quiz</span>
                        </div>
                        <div className={isPage === 3 ? 'nav-account active' : 'nav-account'} onClick={() => setIsPage(3)}>
                            <span><i className='fa fa-heart'></i></span>
                            <span>Wishlist</span>
                        </div>
                        <div className={isPage === 4 ? 'nav-account active' : 'nav-account'} onClick={() => setIsPage(4)}>
                            <span><i className='fa fa-cart-shopping'></i></span>
                            <span>Order</span>
                        </div>
                        <div className={isPage === 5 ? 'nav-account active' : 'nav-account'} onClick={() => setIsPage(5)}>
                            <span><i className='fa fa-gear'></i></span>
                            <span>Setting</span>
                        </div>
                        <div className='nav-account'>
                            <span><i className='fa fa-sign-out' style={{ color: 'red' }}></i></span>
                            <span style={{ color: 'red' }}>Logout</span>
                        </div>
                    </div>
                    <div className='col-md-9 right'>
                        {isPage === 1 && <>
                            <div className={isPage === 1 ? 'row my-course active' : 'row my-course'}>
                                <div className='col-md-4 list-progress'>
                                    <div className='detail-progress'>
                                        <i className='fa fa-book'></i>
                                        <span>
                                            <div className='title'>Enrolled Course</div>
                                            <div className='number'>1</div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-4 list-progress'>
                                    <div className='detail-progress'>
                                        <i className='fa fa-file-lines'></i>
                                        <span>
                                            <div className='title'>Inprogress Course</div>
                                            <div className='number'>1</div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-4 list-progress'>
                                    <div className='detail-progress'>
                                        <i className='fa fa-file-lines'></i>
                                        <span>
                                            <div className='title'>Finished Course</div>
                                            <div className='number'>1</div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-4 list-progress'>
                                    <div className='detail-progress'>
                                        <i className='fa fa-file-lines'></i>
                                        <span>
                                            <div className='title'>Passed Course</div>
                                            <div className='number'>1</div>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-md-4 list-progress'>
                                    <div className='detail-progress'>
                                        <i className='fa fa-file-lines'></i>
                                        <span>
                                            <div className='title'>Failed Course</div>
                                            <div className='number'>1</div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='row list-status-progress'>
                                <div className={isMyCourse === 1 ? 'col-1 status-progress active' : 'col-1 status-progress'} onClick={() => setIsMyCourse(1)}>All</div>
                                <div className={isMyCourse === 2 ? 'col-3 status-progress active' : 'col-3 status-progress'} onClick={() => setIsMyCourse(2)}>In Progress</div>
                                <div className={isMyCourse === 3 ? 'col-3 status-progress active' : 'col-3 status-progress'} onClick={() => setIsMyCourse(3)}>Finished</div>
                                <div className={isMyCourse === 4 ? 'col-3 status-progress active' : 'col-3 status-progress'} onClick={() => setIsMyCourse(4)}>Passed</div>
                                <div className={isMyCourse === 5 ? 'col-2 status-progress active' : 'col-2 status-progress'} onClick={() => setIsMyCourse(5)}>Failed</div>
                            </div>
                            {isMyCourse === 1 && <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image" style={{borderRadius:'15px 0 0 0'}}>Image</th>
                                                <th class="name">Name</th>
                                                <th class="result">Result</th>
                                                <th class="expiration">Expiration</th>
                                                <th class="end-time" style={{borderRadius:'0 15px 0 0'}}>End time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            }
                            {isMyCourse === 2 && <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image">Image</th>
                                                <th class="name">Name</th>
                                                <th class="result">Result</th>
                                                <th class="expiration">Expiration</th>
                                                <th class="end-time">End time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>}
                            {isMyCourse === 3 && <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image">Image</th>
                                                <th class="name">Name</th>
                                                <th class="result">Result</th>
                                                <th class="expiration">Expiration</th>
                                                <th class="end-time">End time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>}
                            {isMyCourse === 4 && <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image">Image</th>
                                                <th class="name">Name</th>
                                                <th class="result">Result</th>
                                                <th class="expiration">Expiration</th>
                                                <th class="end-time">End time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>}
                            {isMyCourse === 5 && <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image">Image</th>
                                                <th class="name">Name</th>
                                                <th class="result">Result</th>
                                                <th class="expiration">Expiration</th>
                                                <th class="end-time">End time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>}

                        </>}
                        {isPage === 2 && <>
                            <div className='row list-status-progress'>
                                <div className={isQuiz === 1 ? 'col-1 status-progress active' : 'col-1 status-progress'} onClick={() => setIsQuiz(1)}>All</div>
                                <div className={isQuiz === 2 ? 'col-3 status-progress active' : 'col-3 status-progress'} onClick={() => setIsQuiz(2)}>In Progress</div>
                                <div className={isQuiz === 3 ? 'col-3 status-progress active' : 'col-3 status-progress'} onClick={() => setIsQuiz(3)}>Finished</div>
                                <div className={isQuiz === 4 ? 'col-3 status-progress active' : 'col-3 status-progress'} onClick={() => setIsQuiz(4)}>Passed</div>
                                <div className={isQuiz === 5 ? 'col-2 status-progress active' : 'col-2 status-progress'} onClick={() => setIsQuiz(5)}>Failed</div>
                            </div>
                            <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image" style={{borderRadius:'15px 0 0 0'}}>Image</th>
                                                <th class="name">Name</th>
                                                <th class="result">Result</th>
                                                <th class="expiration">Expiration</th>
                                                <th class="end-time" style={{borderRadius:'0 15px 0 0'}}>End time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image"><img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802.jpg" alt="Image" /></td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="result">0%</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </>}
                        {isPage === 3 && <>
                            <div style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '1px' }}>Your Wishlist</div>
                            
                            <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="expiration" style={{borderRadius:'15px 0 0 0'}}>Email</th>
                                                <th class="name">Question</th>
                                                <th class="expiration">Date</th>
                                                <th class="end-time" style={{borderRadius:'0 15px 0 0'}}>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="expiration">dongduclan277@gmail.com</td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">Spending</td>
                                            </tr>
                                            <tr>
                                                <td class="expiration">dongduclan277@gmail.com</td>
                                                <td class="name">Long Name That Should Overflow To Test Scrolling Behavior</td>
                                                <td class="expiration">December 16, 2024 3:18 am</td>
                                                <td class="end-time">Successful</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </>}
                        {isPage === 4 && <>
                            <div style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '1px' }}>Your Order</div>
                            <div className='title-course-progress'>
                                <div class="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="image" style={{borderRadius:'15px 0 0 0'}}>Order Id</th>
                                                <th class="name">Name</th>
                                                <th class="result">Total</th>
                                                <th class="expiration">Status</th>
                                                <th class="end-time" style={{borderRadius:'0 15px 0 0'}}>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="expiration">#0000007372</td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">$0.00</td>
                                                <td class="expiration">Successful</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                            <tr>
                                                <td class="image">#0000007373</td>
                                                <td class="name">Digital Marketing Masterclass</td>
                                                <td class="result">$100.00</td>
                                                <td class="expiration">Spending</td>
                                                <td class="end-time">December 16, 2024 3:18 am</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className='row course-detail' style={{ padding: 30, color: 'grey' }}>Displaying 1 to 2 of 2 items.</div>
                                </div>

                            </div>
                            <div className='key-submit'>
                                <div className='title-key'>If you have a valid order key, you can recover it here.</div>
                                <div className='text-key'>When you checkout as a Guest, an order key will be sent to your email. You can use the order key to create an order.</div>
                                <div className='input-key'>
                                    <input type="text" placeholder='Order key' />
                                    <button className='col'>Submit</button>
                                </div>
                            </div>
                        </>}
                        {isPage === 5 && <>
                            <div className='row list-status-progress'>
                                <div className={isSetting === 1 ? 'col-6 status-progress active' : 'col-6 status-progress'} onClick={() => setIsSetting(1)}>General</div>
                                <div className={isSetting === 2 ? 'col-6 status-progress active' : 'col-6 status-progress'} onClick={() => setIsSetting(2)}>Password</div>
                            </div>
                            {isSetting === 1 && <div className='row title-course-progress'>
                                <div className='col-md-12 name-general'>
                                    <div className='image-upload-wrap'>
                                        <input className="file-upload-input" type="file" accept="image/*"></input>
                                        <div className="drag-text">
                                            <h3>Drag and drop a file or select add Image</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 name-general'>
                                    <div>First name</div>
                                    <input type="text" />
                                </div>
                                <div className='col-md-6 name-general'>
                                    <div>Last name</div>
                                    <input type="text" />
                                </div>
                                <div className='col-md-6 name-general'>
                                    <div>Username</div>
                                    <input type="text" placeholder='kass' disabled />
                                </div>
                                <div className='col-md-6 name-general'>
                                    <div>Email</div>
                                    <input type="text" placeholder='dongduclan277@gmail.com' disabled />
                                </div>
                                <div className='col-md-12 name-general'>
                                    <div>Biographical Info</div>
                                    <textarea rows={4} type="text" placeholder='Share a little biographical information to fill out your profile. This may be shown publicly.' />
                                </div>
                                <button className='btn-general'>Submit</button>
                            </div>}
                            {isSetting === 2 && <div className='row title-course-progress'>

                                <div className='col-md-12 name-general'>
                                    <div>Current password</div>
                                    <input type="password" placeholder='Current password' />
                                </div>
                                <div className='col-md-12 name-general'>
                                    <div>New password</div>
                                    <input type="password" placeholder='New password' />
                                </div>
                                <div className='col-md-12 name-general'>
                                    <div>Confirm new password</div>
                                    <input type="password" placeholder='Confirm new password' />
                                </div>
                                <button className='btn-general'>Submit</button>
                            </div>}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

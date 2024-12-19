import React, { useState, useEffect } from 'react';
import 'assets/List_Website/KLD1312/scss/course_detail.scss';
import { NavLink, useParams } from 'react-router-dom';

const Index = () => {
    const params = useParams()
    const [course, setCourse] = useState([
        {
            id: 1001,
            name: 'The Basic Of Financial Analyst Course',
            price: '$100.00',
            category: 'accounting',
            detail: 'Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.',
            language: 'English',
            duration: '3 weeks',
            level: 'Beginner',
            lecture: 12,
            quiz: 12,
            full: 'Lifetime Access',
            auth: {
                name: 'John Smith',
                intro: 'The leading global marketplace for learning and instruction. By connecting students all over the world to the best instructors.'
            },
            review: {
                star_5: 4,
                star_4: 2,
                star_3: 5,
                star_2: 4,
                star_1: 1,
            },
            curriculum: [
                {}
            ]
        }
    ])
    const selectedCourse = course.find(c => c.id === parseInt(params.idCourse));
    const [barStyle, setBarStyle] = useState({ left: "0%", width: "33%" }); // Vị trí thanh trượt hiện tại
    const [defaultBarStyle, setDefaultBarStyle] = useState({ left: "0%", width: "33%" }); // Vị trí mặc định
    const [section_4, setSection_4] = useState(1)
    const handleHover = (left, width) => {
        setBarStyle({ left, width });
    };

    const handleLeave = () => {
        setBarStyle(defaultBarStyle);
    };

    const handleClick = (left, width, section_4) => {
        setDefaultBarStyle({ left, width });
        setSection_4(section_4);
    };
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
        <div className='course-detail-kld1312'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/shutterstock_218235004.jpg'}
                />
                <div className='text-banner'>

                    <div className='sub-title animate-section'>Empower your skill</div>
                    <div className='title animate-section'>{selectedCourse.name}</div>
                </div>
            </div>
            <div className='section-2'>
                <div className='details'>
                    <div className='col-md-8 left'>
                        <div className='e1st'>
                            <div className='img-auth animate-section'>
                                <img src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=250&d=mm&r=g" alt="" />
                                <div>
                                    <div className='title'>Teacher</div>
                                    <div className='name'>James Smith</div>
                                </div>
                            </div>
                            <div className='category animate-section'>
                                <div>
                                    <div className='title'>Category</div>
                                    <div className='name'>{selectedCourse.category}</div>
                                </div>
                            </div>
                            <div className='review animate-section'>
                                <div>
                                    <div className='title'>Review</div>
                                    <div className='star'>
                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                    </div>
                                    <div className='number'>(5/5)</div>
                                </div>
                            </div>
                            <div className=' wishlist animate-section'><i className='fa fa-bookmark-o'></i> Wishlist</div>
                        </div>
                        <div className='course-information'>
                            <div className='title animate-section'>The Basic Of Financial Analyst Course</div>
                            <div className='sub-title animate-section'>Earn a University of London degree in Computer Science</div>
                            <div className='text animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science degree from the University of London. You’ll master in-demand computing skills, solve complex problems, and hone your innovation and creativity.</div>
                            <div className='schedule'>
                                <div className='col-md-4 animate-section' style={{ color: 'grey', display: 'flex', gap: 20, textAlign: 'center' }}><i className='fa fa-clock' style={{ color: 'grey', lineHeight: 'unset' }}></i><span>Duration</span><span>{selectedCourse.duration}</span></div>
                                <div className='col-md-4 animate-section' style={{ color: 'grey', display: 'flex', gap: 20, textAlign: 'center' }}><i className='fa fa-book' style={{ color: 'grey', lineHeight: 'unset' }}></i><span>Lectures</span><span>{selectedCourse.lecture}</span></div>
                                <div className='col-md-4 animate-section' style={{ color: 'grey', display: 'flex', gap: 20, textAlign: 'center' }}><i className='fa fa-globe' style={{ color: 'grey', lineHeight: 'unset' }}></i><span>Language</span><span>{selectedCourse.language}</span></div>
                                <div className='col-md-4 animate-section' style={{ color: 'grey', display: 'flex', gap: 20, textAlign: 'center' }}><i className='fa fa-graduation-cap' style={{ color: 'grey', lineHeight: 'unset' }}></i><span>Skill Level</span><span>{selectedCourse.level}</span></div>
                                <div className='col-md-4 animate-section' style={{ color: 'grey', display: 'flex', gap: 20, textAlign: 'center' }}><i className='fa fa-bolt' style={{ color: 'grey', lineHeight: 'unset' }}></i><span>Quizzes</span><span>{selectedCourse.quiz}</span></div>
                                <div className='col-md-4 animate-section' style={{ color: 'grey', display: 'flex', gap: 20, textAlign: 'center' }}><i className='fa fa-flag' style={{ color: 'grey', lineHeight: 'unset' }}></i><span>Full</span><span>{selectedCourse.full}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 right'>
                        <div className='right-box'>
                            <div className='price animate-section'>{selectedCourse.price}</div>
                            <NavLink to={'/website/template/KLD1312/payment'} className='btn-price animate-section'>Buy now</NavLink>
                            <div className='text-price animate-section'>Earn a University of London degree in Computer Science</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='section-3'>
                <div className='row tab-course'>
                    <div className='col-md-4 tab-detail animate-section'

                        onMouseEnter={() => handleHover("0%", "33%")} onMouseLeave={handleLeave}
                        onClick={() => handleClick("0%", "33%", 1)}
                    >curriculum
                    </div>
                    <div className='col-md-4 tab-detail animate-section'
                        onMouseEnter={() => handleHover("33%", "33%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("33%", "33%", 2)}
                    >instructor</div>
                    <div className='col-md-4 tab-detail animate-section'
                        onMouseEnter={() => handleHover("66%", "33%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("66%", "33%", 3)}
                    >Reviews</div>
                    <div className='bottom-slide-bar animate-section' style={{ left: barStyle.left, width: barStyle.width }}>
                        <div className='bottom-slide-bar-border'></div>
                    </div>
                </div>
            </div>
            <div className='section-4'>
                {section_4 === 3 && (
                    <div className="row review animate-section">
                        <div className="col-md-3 left">
                            <div className="title-review">0</div>
                            <div className="star-rating">
                                <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                <i className="fa fa-star" style={{ color: '#fed35b' }} />
                            </div>
                            <div className="total-rating">0 ratings</div>
                        </div>
                        <div className="col-md-5 right">
                            <div className="line-rate">
                                <span>
                                    5<i className="fa fa-star" style={{ color: '#fed35b' }} />
                                </span>
                                <div className="line-color-wrapper">
                                    <div className="line-color-default"></div>
                                    <div className="line-color-active" style={{ width: "100%" }}></div>
                                </div>
                                <span>10</span>
                            </div>
                            <div className="line-rate">
                                <span>
                                    4<i className="fa fa-star" style={{ color: '#fed35b' }} />
                                </span>
                                <div className="line-color-wrapper">
                                    <div className="line-color-default"></div>
                                    <div className="line-color-active" style={{ width: "50%" }}></div>
                                </div>
                                <span>5</span>
                            </div>
                            <div className="line-rate">
                                <span>
                                    3<i className="fa fa-star" style={{ color: '#fed35b' }} />
                                </span>
                                <div className="line-color-wrapper">
                                    <div className="line-color-default"></div>
                                    <div className="line-color-active" style={{ width: "40%" }}></div>
                                </div>
                                <span>4</span>
                            </div>
                            <div className="line-rate">
                                <span>
                                    2<i className="fa fa-star" style={{ color: '#fed35b' }} />
                                </span>
                                <div className="line-color-wrapper">
                                    <div className="line-color-default"></div>
                                    <div className="line-color-active" style={{ width: "0%" }}></div>
                                </div>
                                <span>0</span>
                            </div>
                            <div className="line-rate">
                                <span>
                                    1<i className="fa fa-star" style={{ color: '#fed35b' }} />
                                </span>
                                <div className="line-color-wrapper">
                                    <div className="line-color-default"></div>
                                    <div className="line-color-active" style={{ width: "0%" }}></div>
                                </div>
                                <span>0</span>
                            </div>
                            {/* Các phần khác */}
                        </div>
                    </div>
                )}
                {section_4 === 2 && (
                    <div className="row introduce animate-section">
                        <div className="col-md-3 left">
                            <img src="https://secure.gravatar.com/avatar/c4ffc7a48d6a02dac31975c893fa7ddb?s=250&d=mm&r=g" alt="" />
                        </div>
                        <div className="col-md-5 right">
                            <div className='title'>James Smith</div>
                            <div className='text'>The leading global marketplaceThe leading global marketplaceThe leading global marketplaceThe leading global marketplace for learning and instruction. By connecting students all over the world to the best instructors.</div>
                        </div>
                    </div>
                )}
                {section_4 === 1 && (
                    <div className="row list-curriculum animate-section">
                        <div className='curriculum'>
                            <button data-toggle="collapse" href="#section1ContentId">
                                <span>Introduction</span>
                                <span>+</span>
                            </button>
                            <div id="section1ContentId" class="collapse in collapse-show" role="tabpanel" aria-labelledby="section1HeaderId">
                                <div class="card-body123">
                                    <NavLink to=''>
                                        <span><div className='name'>Financial Markets Introduction</div><div className='time'>7 minutes</div></span>
                                        <span className='preview'>Preview</span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>S&P 500</div><div className='time'>9 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Health Insurance</div><div className='time'>6 minutes</div></span>
                                        <span className='preview'>Preview</span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Short Sales</div><div className='time'>8 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='curriculum'>
                            <button data-toggle="collapse" href="#section2ContentId">
                                <span>The Three Main Statements in Financial Accounting</span>
                                <span>+</span>
                            </button>
                            <div id="section2ContentId" class="collapse in collapse-show" role="tabpanel" aria-labelledby="section2HeaderId">
                                <div class="card-body123">
                                    <NavLink to=''>
                                        <span><div className='name'>P&L, Balance Sheet and Cash Flow</div><div className='time'>9 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Income Statement Items</div><div className='time'>6 minutes</div></span>
                                        <span className='preview'>Preview</span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Depreciation and amortization</div><div className='time'>11 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Balance sheet items</div><div className='time'>8 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Assets & Liabilities</div><div className='time'>10 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Financial Statement Quiz</div><div className='time'>8 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='curriculum'>
                            <button data-toggle="collapse" href="#section3ContentId">
                                <span>Stock, Bond and Financial Tools</span>
                                <span>+</span>
                            </button>
                            <div id="section3ContentId" class="collapse in collapse-show" role="tabpanel" aria-labelledby="section3HeaderId">
                                <div class="card-body123">
                                    <NavLink to=''>
                                        <span><div className='name'>Compound Interest</div><div className='time'>7 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Discount Bonds</div><div className='time'>7 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Leverage</div><div className='time'>8 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                    <NavLink to=''>
                                        <span><div className='name'>Share Repurchase</div><div className='time'>8 minutes</div></span>
                                        <span><i className='fa fa-lock' style={{ color: 'grey' }}></i></span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='row section-5'>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>free</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Marketing</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{ color: 'grey' }}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{ color: 'grey' }}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Digital Marketing Masterclass</div>

                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>

                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1152820865-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>$100.00</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Accounting</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{ color: 'grey' }}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{ color: 'grey' }}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>The Basic Of Financial Analyst Course</div>

                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>

                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-638855738-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>$119.00</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Marketing</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{ color: 'grey' }}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{ color: 'grey' }}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Digital Marketing Masterclass</div>

                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>

                        </div>
                    </NavLink>
                </div>
            </div>
        </div >
    );
}

export default Index;

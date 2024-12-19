import React, {useEffect} from 'react';
import 'assets/List_Website/KLD1312/scss/course.scss';
import { NavLink } from 'react-router-dom';
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
        <div className='course-kld1312'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/shutterstock_218235004.jpg'}
                />
                <div className='text-banner'>
                    <div className='title animate-section'>Course List</div>
                    <div className='sub-title animate-section'>We have a little course for you</div>
                </div>
            </div>
            <div className='row section-2'>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
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
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Digital Marketing Masterclass</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
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
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>The Basic Of Financial Analyst Course</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
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
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Digital Marketing Masterclass</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1072035598-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>Free</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Accounting, Business</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Investment Master : Key To Success</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-996082438-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>$170.00</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Programming</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Python Programming Materclass</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/shutterstock_393673021-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>$70.00</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Design</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Introduction to Architecture</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/shutterstock_393673021-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>$79.00</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Graphic</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Photoshop CC 2019 MasterClass</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-820609122-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>$149.00</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Business, Marketing</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>Essential Business Analysis</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
                <div className='col-md-4'>
                    <NavLink to={'/website/template/KLD1312/course/detail/1001'} className='course'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1135306875-400x245.jpg" alt="" />
                        <div className='detail'>
                            <div className='price animate-section'>
                                <div className='number-price'>free</div>
                                <i className='fa fa-bookmark-o'></i>
                            </div>
                            <div className='review animate-section'>
                                <div className='type-course'>Accounting, Business</div>
                                <span>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                    <i className='fa fa-star' style={{ color: 'rgb(254, 211, 91)' }}></i>
                                </span>
                            </div>
                            <div className='member-course animate-section'>
                                <div className='left'><i className='fa fa-book' style={{color:'grey'}}></i> 10 lessons</div>
                                <div className='right'><i className='fa fa-user' style={{color:'grey'}}></i> 10 members</div>
                            </div>
                            <div className='name-course animate-section'>The Business Intelligence Analyst</div>
                            
                            <div className='text-course animate-section'>Open the door to sought-after technology careers with a world-class online Bachelor of Science (BSc) in Computer Science...</div>
                            
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;

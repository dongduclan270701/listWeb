import React, { useEffect } from 'react';
import 'assets/List_Website/KLD1312/scss/about.scss'
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
        <div className='about-kld1312'>
            <div className='section-1'>
                <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1139704046.jpg' alt='' />
                <div className='title'>
                    <div className='title-above animate-section'>Know Us Better</div>
                    <div className='title-below animate-section'>About Us</div>
                </div>
            </div>
            <div className='section-2'>
                <div className='row'>
                    <div className='col-md-4 e1st animate-section'>
                        <p>Eduction's History</p>
                    </div>
                    <div className='col-md-4 e2nd animate-section'>
                        If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds. If you would like to study
                    </div>
                    <div className='col-md-4 e3rd animate-section'>
                        If you would like to study in the university in the heart of the city that focus on chaning the world for better to morrow, you’re choosin the right place. We do not use special formulas to select students. We look at every single applicant’s application, academic and personal, to select students who suit to our community with a full range of backgrounds. If you would like to study
                    </div>
                </div>
            </div>
            <div className='section-3'>
                <div className='row content'>
                    <div className='col-md-4 box'>
                        <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/col-icon-3.png' alt='' />
                        <div className='title animate-section'>Our Philosophy</div>
                        <div className='sub-title animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</div>
                        <NavLink className=' animate-section' to=''>Learn more ›</NavLink>
                    </div>
                    <div className='col-md-4 box'>
                        <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/col-icon-4.png' alt='' />
                        <div className='title animate-section'>Kingster's Principle</div>
                        <div className='sub-title animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</div>
                        <NavLink className=' animate-section' to=''>Learn more ›</NavLink>
                    </div>
                    <div className='col-md-4 box'>
                        <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/col-icon-2.png' alt='' />
                        <div className='title animate-section'>Key Of Success</div>
                        <div className='sub-title animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.</div>
                        <NavLink className=' animate-section' to=''>Learn more ›</NavLink>
                    </div>
                </div>
            </div>
            <div className='section-4'>
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/about-icon-1.png" alt="" />
                        <div className='title animate-section'>Special Campus Tour</div>
                        <div className='text animate-section'>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</div>
                    </div>
                    <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1135306875.jpg' alt='' className='col-md-6 right animate-section' />
                </div>
                <div className='e2nd'>
                    <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-539246041.jpg' alt='' className='col-md-6 left animate-section' />
                    <div className='col-md-6 right'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/about-icon-2.png" alt="" />
                        <div className='title animate-section'>Graduation</div>
                        <div className='text animate-section'>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</div>
                    </div>
                </div>
                <div className='e1st'>
                    <div className='col-md-6 left'>
                        <img className=' animate-section' src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/about-icon-3.png" alt="" />
                        <div className='title animate-section'>Powerful Alumni</div>
                        <div className='text animate-section'>Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.</div>
                    </div>
                    <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1198229796.jpg' alt='' className='col-md-6 right animate-section' />
                </div>
            </div>
            <div className='section-5'>
                <div className='row'>
                    <div className='col-md-3 animate-section'>
                        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/banner-1.png" alt="" />
                    </div>
                    <div className='col-md-3 animate-section'>
                        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/banner-2.png" alt="" />
                    </div>
                    <div className='col-md-3 animate-section'>
                        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/banner-3.png" alt="" />
                    </div>
                    <div className='col-md-3 animate-section'>
                        <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/banner-4-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

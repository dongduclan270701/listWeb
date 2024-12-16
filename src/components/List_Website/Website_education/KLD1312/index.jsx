import React, { useState, useEffect, useRef } from 'react';
import 'assets/List_Website/KLD1312/scss/homepage.scss'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const sliderItems = [
        { id: 1, img: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802-700x450.jpg', alt: 'Item 1' },
        { id: 2, img: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802-700x450.jpg', alt: 'Item 2' },
        { id: 3, img: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802-700x450.jpg', alt: 'Item 3' },
        { id: 4, img: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802-700x450.jpg', alt: 'Item 4' },
        { id: 5, img: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/iStock-1156240802-700x450.jpg', alt: 'Item 5' }
    ];

    const itemsToShow = window.innerWidth > 768 ? 4 : 1;

    const nextSlide = () => {
        if (currentIndex < sliderItems.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const updateSliderPosition = () => {
        const sliderItem = sliderRef.current?.querySelector('.slider-item');
        const itemWidth = sliderItem ? sliderItem.offsetWidth : 0;
        return `translateX(-${currentIndex * itemWidth}px)`;
    };

    useEffect(() => {
        const handleResize = () => {
            setCurrentIndex(0); // Reset về đầu khi resize
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [currentIndex2, setCurrentIndex2] = useState(0);
    const sliderRef2 = useRef(null);

    const sliderItems2 = [
        { id: 1, avt: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/testimonial-3-150x150.jpg', text: 'This is a life saver. I don’t have time or money for a college education. My goal is to become a freelance web developer and thanks to these courses, I’m really close.', name: 'Monica Smith' },
        { id: 2, avt: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/testimonial-4-150x150.jpg', text: 'This is a life saver. I don’t have time or money for a college education. My goal is to become a freelance web developer and thanks to these courses, I’m really close.', name: 'Paul George' },
        { id: 3, avt: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/testimonial-5-150x150.jpg', text: 'This is a life saver. I don’t have time or money for a college education. My goal is to become a freelance web developer and thanks to these courses, I’m really close.', name: 'Frank Miller' },
        { id: 4, avt: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/testimonial-2-150x150.jpg', text: 'This is a life saver. I don’t have time or money for a college education. My goal is to become a freelance web developer and thanks to these courses, I’m really close.', name: 'Thomas Smith' },
        { id: 5, avt: 'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/testimonial-1-150x150.jpg', text: 'This is a life saver. I don’t have time or money for a college education. My goal is to become a freelance web developer and thanks to these courses, I’m really close.', name: 'Stella Smith' },
    ];
    const [barStyle, setBarStyle] = useState({ left: "0%", width: "16.6%" }); // Vị trí thanh trượt hiện tại
    const [defaultBarStyle, setDefaultBarStyle] = useState({ left: "0%", width: "16.6%" }); // Vị trí mặc định
    const [section_4, setSection_4] = useState(1)
    const itemsToShow2 = window.innerWidth > 768 ? 3 : 1;

    const nextSlide2 = () => {
        if (currentIndex2 < sliderItems2.length - itemsToShow2) {
            setCurrentIndex2(currentIndex2 + 1);
        }
    };

    const prevSlide2 = () => {
        if (currentIndex2 > 0) {
            setCurrentIndex2(currentIndex2 - 1);
        }
    };

    const updateSliderPosition2 = () => {
        const sliderItem = sliderRef2.current?.querySelector('.slider-item');
        const itemWidth = sliderItem ? sliderItem.offsetWidth : 0;
        return `translateX(-${currentIndex2 * itemWidth}px)`;
    };

    useEffect(() => {
        const handleResize2 = () => {
            setCurrentIndex2(0); // Reset về đầu khi resize
        };

        window.addEventListener('resize', handleResize2);
        return () => window.removeEventListener('resize', handleResize2);
    }, []);
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

    return (
        <div className='homepage-kld1312'>
            <video
                className="banner"
                autoPlay={true}
                loop
                muted
                playsInline
                src={'https://res.cloudinary.com/dolydpat4/video/upload/v1734047138/video-educationnn_cprvaj.mp4'}
            >

            </video>
            <div className='text-banner'>
                <div className='title'>Offering access to high-quality education for everyone. </div>
                <div className='sub-title'>Access 2500+ Online Courses from 140 Top Institutions. Start Today! </div>
            </div>
            <div className='row section-2'>
                <div className='col-md-5 content'>
                    <div className='box'>
                        <div className='sub-title'>Learn how you want, where you want</div>
                        <div className='title'>The world’s largest selection of online courses</div>
                        <div className='text'>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone.</div>
                        <div className='row box-icon'>
                            <div className='col-md-6 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-1.png'} alt='' /></div>
                                <div className='text'>Private Classes</div>
                            </div>
                            <div className='col-md-6 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-2.png'} alt='' /></div>
                                <div className='text'>Small Groups</div>
                            </div>
                            <div className='col-md-6 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-3.png'} alt='' /></div>
                                <div className='text'>Lifetime Access</div>
                            </div>
                            <div className='col-md-6 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-4.png'} alt='' /></div>
                                <div className='text'>Online Tutoring</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <img src={'https://res.cloudinary.com/dolydpat4/image/upload/v1734048152/hp-about-right_wvqtjh.png'} alt='' />
                </div>
            </div>
            <div className='section-3'>
                <div className='list-courses'>
                    <div className='title'>What do you want to learn today?</div>
                    <div className='content'>
                        <div className='view-all'>view all courses &gt;</div>
                        <div className='courses'>
                            <div className="slider-wrapper">
                                <button className="slider-button prev" onClick={prevSlide}>&#8249;</button>
                                <div className="slider-container">
                                    <div className="slider" ref={sliderRef} style={{ transform: updateSliderPosition() }}>
                                        {sliderItems.map((item) => (
                                            <div className="slider-item" key={item.id}>
                                                <div className="item">
                                                    <img src={item.img} alt={item.alt} />
                                                    <div className="price">2.000.000 VND</div>
                                                    <div className="name">Digital Marketing Masterclass</div>
                                                    <div className="category">
                                                        <div className="left">Marketing</div>
                                                        <div className="right">Review</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="slider-button next" onClick={nextSlide}>&#8250;</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='section-3-image'>
                    <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/cta-bg.jpg' alt='' />
                </div>
            </div>
            <div className='section-4'>
                <div className='col-md-7 image'>
                    <img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/about-left-img.jpg'} alt='' />
                </div>
                <div className='col-md-5 content'>
                    <div className='box'>
                        <div className='sub-title'>New additions published every month</div>
                        <div className='title'>Choose from over 100,000 online video courses</div>

                        <div className='row box-icon'>
                            <div className='col-12 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-5.png'} alt='' /></div>
                                <div className='text'>Private Classes</div>
                            </div>
                            <div className='col-12 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-6-1.png'} alt='' /></div>
                                <div className='text'>Small Groups</div>
                            </div>
                            <div className='col-12 box-content'>
                                <div className='icon'><img src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-list-7-1.png'} alt='' /></div>
                                <div className='text'>Lifetime Access</div>
                            </div>
                            <div className='col-12 button-content'>

                                <div className='text'>Online Tutoring</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='section-5'>
                <div className='row content'>
                    <div className='col-md-3 box'>
                        <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-col-service-1.png' alt='' />
                        <div className='title'>Online Courses</div>
                        <div className='sub-title'>Millions of people have used Kingster to decide which online course to take.</div>
                        <NavLink to=''>Learn more ›</NavLink>
                    </div>
                    <div className='col-md-3 box'>
                        <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-col-service-2.png' alt='' />
                        <div className='title'>Teaching Material</div>
                        <div className='sub-title'>Millions of people have used Kingster to decide which online course to take.</div>
                        <NavLink to=''>Learn more ›</NavLink>
                    </div>
                    <div className='col-md-3 box'>
                        <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-col-service-3.png' alt='' />
                        <div className='title'>University Life</div>
                        <div className='sub-title'>Millions of people have used Kingster to decide which online course to take.</div>
                        <NavLink to=''>Learn more ›</NavLink>
                    </div>
                    <div className='col-md-3 box'>
                        <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/icon-col-service-4.png' alt='' />
                        <div className='title'>Academic Programs</div>
                        <div className='sub-title'>Millions of people have used Kingster to decide which online course to take.</div>
                        <NavLink to=''>Learn more ›</NavLink>
                    </div>
                </div>
            </div>
            <div className='section-6'>
                <div className='color-title'>Learn on your schedule. Anywhere, anytime</div>
                <div className='title'>Choose from over 3,000 online video courses with new additions published every month</div>
                <div className='sub-title'>Learn from the best. Discover thousands of online courses from top universities around the world like MIT, Stanford and Harvard.</div>
            </div>
            <div className='section-9'>
                <div className='row tab-course'>
                    <div className='tab-detail'

                        onMouseEnter={() => handleHover("0%", "16.6%")} onMouseLeave={handleLeave}
                        onClick={() => handleClick("0%", "16.6%", 1)}
                    >backend
                    </div>
                    <div className='tab-detail'
                        onMouseEnter={() => handleHover("16.6%", "16.6%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("16.6%", "16.6%", 2)}
                    >design</div>
                    <div className='tab-detail'
                        onMouseEnter={() => handleHover("33.2%", "16.6%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("33.2%", "16.6%", 3)}
                    >finance</div>
                    <div className='tab-detail'
                        onMouseEnter={() => handleHover("48.8%", "16.6%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("49.8%", "16.6%", 4)}
                    >frontend</div>
                    <div className='tab-detail'
                        onMouseEnter={() => handleHover("66.4%", "16.6%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("66.4%", "16.6%", 5)}
                    >it & software</div>
                    <div className='tab-detail'
                        onMouseEnter={() => handleHover("83.4%", "16.6%")}
                        onMouseLeave={handleLeave}
                        onClick={() => handleClick("83.4%", "16.6%", 6)}
                    >marketing</div>
                    <div className='bottom-slide-bar' style={{ left: barStyle.left, width: barStyle.width }}>
                        <div className='bottom-slide-bar-border'></div>
                    </div>
                </div>
            </div>
            <div className='section-10'>
                {section_4 === 1 && (
                    <div className="row backend">
                        <div className="col-md-6 left">
                            <div className='title'>Learn programming languages</div>
                            <div className='text'>We offer online courses and MOOCs from University of Michigan, Vanderbilt University, Rice University, The Hong Kong University of Science and Technology and other top universities around the world. Read reviews to decide if a class is right for you. Discover thousands of online courses from top universities.</div>
                            <button className='btn-backend'>All courses</button>
                        </div>
                        <div className="col-md-6 right">
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/tab-image-8.jpg" alt="" />
                        </div>
                    </div>
                )}
                {section_4 === 2 && (
                    <div className="row backend">
                        <div className="col-md-6 left">
                            <div className='title'>How to design like a pro</div>
                            <div className='text'>We offer online courses and MOOCs from University of Michigan, Vanderbilt University, Rice University, The Hong Kong University of Science and Technology and other top universities around the world. Read reviews to decide if a class is right for you. Discover thousands of online courses from top universities.</div>
                            <button className='btn-backend'>All courses</button>
                        </div>
                        <div className="col-md-6 right">
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/tab-image-3-1.jpg" alt="" />
                        </div>
                    </div>
                )}
                {section_4 === 3 && (
                    <div className="row backend">
                        <div className="col-md-6 left">
                            <div className='title'>Learn how financial world works</div>
                            <div className='text'>We offer online courses and MOOCs from University of Michigan, Vanderbilt University, Rice University, The Hong Kong University of Science and Technology and other top universities around the world. Read reviews to decide if a class is right for you. Discover thousands of online courses from top universities.</div>
                            <button className='btn-backend'>All courses</button>
                        </div>
                        <div className="col-md-6 right">
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/tab-image-5-1.jpg" alt="" />
                        </div>
                    </div>
                )}
                {section_4 === 4 && (
                    <div className="row backend">
                        <div className="col-md-6 left">
                            <div className='title'>Design UI/UX as professional</div>
                            <div className='text'>We offer online courses and MOOCs from University of Michigan, Vanderbilt University, Rice University, The Hong Kong University of Science and Technology and other top universities around the world. Read reviews to decide if a class is right for you. Discover thousands of online courses from top universities.</div>
                            <button className='btn-backend'>All courses</button>
                        </div>
                        <div className="col-md-6 right">
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/tab-image-4-2.jpg" alt="" />
                        </div>
                    </div>
                )}
                {section_4 === 5 && (
                    <div className="row backend">
                        <div className="col-md-6 left">
                            <div className='title'>Learn python language</div>
                            <div className='text'>We offer online courses and MOOCs from University of Michigan, Vanderbilt University, Rice University, The Hong Kong University of Science and Technology and other top universities around the world. Read reviews to decide if a class is right for you. Discover thousands of online courses from top universities.</div>
                            <button className='btn-backend'>All courses</button>
                        </div>
                        <div className="col-md-6 right">
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/tab-image-2-1.jpg" alt="" />
                        </div>
                    </div>
                )}
                {section_4 === 6 && (
                    <div className="row backend">
                        <div className="col-md-6 left">
                            <div className='title'>Market your products</div>
                            <div className='text'>We offer online courses and MOOCs from University of Michigan, Vanderbilt University, Rice University, The Hong Kong University of Science and Technology and other top universities around the world. Read reviews to decide if a class is right for you. Discover thousands of online courses from top universities.</div>
                            <button className='btn-backend'>All courses</button>
                        </div>
                        <div className="col-md-6 right">
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2020/06/tab-image-6-2.jpg" alt="" />
                        </div>
                    </div>
                )}
            </div>
            <div className='section-7'>
                <div className='list-courses'>
                    <div className='sub-title'>Learn how you want, where you want</div>
                    <div className='title'>Tens of thousands of reviews written by our users help you pick</div>
                    <div className='content'>
                        <div className='courses'>
                            <div className="slider-wrapper">
                                <button className="slider-button prev" onClick={prevSlide2}>&#8249;</button>
                                <div className="slider-container">
                                    <div className="slider" ref={sliderRef2} style={{ transform: updateSliderPosition2() }}>
                                        {sliderItems2.map((item) => (
                                            <div className="slider-item" key={item.id}>
                                                <div className="item">
                                                    <div className='star'>
                                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                                        <i className="fa fa-star" style={{ color: '#fed35b' }} />
                                                        <i className="fa fa-star-half-o" style={{ color: '#fed35b' }} />
                                                    </div>
                                                    <div className='review-text'>{item.text}</div>
                                                    <div className='avt'>
                                                        <img src={item.avt} alt='' />
                                                        <div className='name'>{item.name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="slider-button next" onClick={nextSlide2}>&#8250;</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='section-8'>
                <div className='title'>Find out the latest education news</div>
                <div className='row content'>
                    <div className='col-md-4'>
                        <div className='item-content'>
                            <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-400x257.jpg' alt='' />
                            <div className='time-name'>
                                <div className='time'>June 6, 2016</div>
                                <div className='name'>Admission, Student</div>
                            </div>
                            <div className='title-content'>Professor Albert joint research on mobile money in Tanzania</div>
                            <div className='text-content'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...</div>
                            <div className='read-more-content'>Read more</div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item-content'>
                            <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-400x257.jpg' alt='' />
                            <div className='time-name'>
                                <div className='time'>June 6, 2016</div>
                                <div className='name'>Admission, Student</div>
                            </div>
                            <div className='title-content'>Professor Albert joint research on mobile money in Tanzania</div>
                            <div className='text-content'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...</div>
                            <div className='read-more-content'>Read more</div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='item-content'>
                            <img src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-400x257.jpg' alt='' />
                            <div className='time-name'>
                                <div className='time'>June 6, 2016</div>
                                <div className='name'>Admission, Student</div>
                            </div>
                            <div className='title-content'>Professor Albert joint research on mobile money in Tanzania</div>
                            <div className='text-content'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm...</div>
                            <div className='read-more-content'>Read more</div>
                        </div>
                    </div>
                </div>
                <div className='latest-news'>Latest news</div>
            </div>

        </div>
    );
}

export default Index;

import React, {useEffect} from 'react';
import 'assets/List_Website/KLD1312/scss/blog.scss'
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
        <div className='blog-kld1312'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/shutterstock_218235004.jpg'}
                />
                <div className='text-banner'>
                    <div className='title animate-section'>Blogs & News</div>
                    <div className='sub-title animate-section'>We have a little blogs for you</div>
                </div>
            </div>
            <div className='section-2'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='eblog'>
                            <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_106223549-900x500.jpg' alt='' />
                            <div className='details'>
                                <div className='title animate-section'>The Florida Project: Taking Action to Help Kids Like Moonee</div>
                                <div className='time animate-section'>June 6, 2016 / ByJames Smith / Blog</div>
                                <div className='text animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be...</div>
                                <NavLink to={'/website/template/KLD1312/blog/detail'} className='button-blog animate-section' style={{ textDecoration: 'none' }} alt='' >Read More</NavLink>
                            </div>

                        </div>
                        <div className='eblog'>
                            <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-900x500.jpg' alt='' />
                            <div className='details'>
                                <div className='title animate-section'>Professor Albert joint research on mobile money in Tanzania</div>
                                <div className='time animate-section'>June 6, 2016 / ByJames Smith / Blog</div>
                                <div className='text animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be...</div>
                                <NavLink to={'/website/template/KLD1312/blog/detail'} className='button-blog animate-section' style={{ textDecoration: 'none' }} alt='' >Read More</NavLink>
                            </div>

                        </div>
                        <div className='eblog'>
                            <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2018/08/shutterstock_218235004-900x500.jpg' alt='' />
                            <div className='details'>
                                <div className='title animate-section'>A Global MBA for the next generation of business leaders</div>
                                <div className='time animate-section'>June 6, 2016 / ByJames Smith / Blog</div>
                                <div className='text animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be...</div>
                                <NavLink to={'/website/template/KLD1312/blog/detail'} className='button-blog animate-section' style={{ textDecoration: 'none' }} alt='' >Read More</NavLink>
                            </div>
                        </div>
                        <div className='eblog'>
                            <img className=' animate-section' src='https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_481869205-900x500.jpg' alt='' />
                            <div className='details'>
                                <div className='title animate-section'>Professor Tom comments on voluntary recalls by snack brands</div>
                                <div className='time animate-section'>June 6, 2016 / ByJames Smith / Blog</div>
                                <div className='text animate-section'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be...</div>
                                <NavLink to={'/website/template/KLD1312/blog/detail'} className='button-blog animate-section' style={{ textDecoration: 'none' }} alt='' >Read More</NavLink>
                            </div>

                        </div>
                        <div className='button-page-news animate-section'>
                            <button className="page-button">‹</button>
                            <button className="page-button">1</button>
                            <button className="page-button">2</button>
                            <button className="page-button">3</button>
                            <button className="page-button">›</button>
                        </div>
                    </div>
                    <div className='col-md-4 right'>
                        <div className='title animate-section'>Text Widget</div>
                        <div className='text animate-section'>Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</div>
                        <div className='title animate-section'>Recent News</div>
                        <div className='news animate-section'>
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-900x500.jpg" alt="" />
                            <div className='details-new'>
                                <div className='title-news'>Professor Albert joint research on mobile money in Tanzania</div>
                                <div className='time-news'>June 6, 2016 / ByJames Smith</div>
                            </div>
                        </div>
                        <div className='news animate-section'>
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-900x500.jpg" alt="" />
                            <div className='details-new'>
                                <div className='title-news'>A Global MBA for the next generation of business leaders</div>
                                <div className='time-news'>June 6, 2016 / ByJames Smith</div>
                            </div>
                        </div>
                        <div className='news animate-section'>
                            <img src="https://demo.goodlayers.com/kingster/homepages/onlineacademy/wp-content/uploads/sites/4/2016/06/shutterstock_135948689-900x500.jpg" alt="" />
                            <div className='details-new'>
                                <div className='title-news'>Professor Tom comments on voluntary recalls by snack brands</div>
                                <div className='time-news'>June 6, 2016 / ByJames Smith</div>
                            </div>
                        </div>
                        <div className='title animate-section'>Tag Cloud</div>
                        <div className='list-tag'>
                            <div className='tag animate-section'>admissions</div>
                            <div className='tag animate-section'>article</div>
                            <div className='tag animate-section'>event</div>
                            <div className='tag animate-section'>hot</div>
                            <div className='tag animate-section'>news</div>
                            <div className='tag animate-section'>post format</div>
                            <div className='tag animate-section'>research</div>
                            <div className='tag animate-section'>social</div>
                            <div className='tag animate-section'>sport</div>
                            <div className='tag animate-section'>student</div>
                            <div className='tag animate-section'>updates</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

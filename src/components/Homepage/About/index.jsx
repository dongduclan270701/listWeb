import React, { useState, useEffect, memo } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import 'assets/Homepage/scss/Page.scss'
import Sign from 'assets/Homepage/images/signature.png'
import Avatar from 'assets/Homepage/images/avatar.jpeg'
import Loading from 'components/Homepage/About/Loading'
import axios from 'axios'
const Index = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeLink, setActiveLink] = useState('home')
    const [selectedIndexes, setSelectedIndexes] = useState([])
    const [focusedInput, setFocusedInput] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isMenu, setIsMenu] = useState(false)
    const handleInputFocus = (inputName) => {
        setFocusedInput(inputName)
    }

    const handleInputBlur = () => {
        setFocusedInput(null)
    }
    const handleBoxClick = (index) => {
        const updatedIndexes = [...selectedIndexes]
        const indexPosition = updatedIndexes.indexOf(index)

        if (indexPosition === -1) {
            updatedIndexes.push(index) // Nếu phần tử chưa được chọn, thêm vào danh sách
        } else {
            updatedIndexes.splice(indexPosition, 1) // Nếu phần tử đã được chọn, loại bỏ khỏi danh sách
        }

        setSelectedIndexes(updatedIndexes)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false) // Kết thúc loading sau 2 giây
        }, 2000)
        if (isLoading === false) {
            const handleScroll = () => {
                const sections = document.querySelectorAll('.section-content > div')
                sections.forEach(section => {
                    const top = section.getBoundingClientRect().top
                    if (top >= 0 && top <= window.innerHeight) {
                        setActiveLink(section.id)
                    }
                })
            }

            window.addEventListener('scroll', handleScroll)

            const observeElements = (selector) => {
                document.querySelectorAll(selector).forEach(card => {
                    observer.observe(card)
                })
            }

            const unobserveElements = (selector) => {
                document.querySelectorAll(selector).forEach(card => {
                    observer.unobserve(card)
                })
            }

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const { target } = entry
                    if (entry.isIntersecting) {
                        if (!target.classList.contains('animation-done')) {
                            target.classList.add('active')
                            setTimeout(() => {
                                if (target.classList.contains('active')) {
                                    target.classList.remove('active')
                                    target.classList.add('animation-done')
                                }
                            }, 2000)
                        }
                    } else {
                        if (!target.classList.contains('animation-done')) {
                            target.classList.remove('active')
                        }
                    }
                })
            })

            observeElements('.section-content .section-content-home .section-home-title')
            observeElements('.section-content .section-content-about .section-about-title')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-left .section-about-infor-box')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-number')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-text')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-cv')
            observeElements('.section-content .section-content-services .section-services-title')
            observeElements('.section-content .section-content-services .section-services-content .section-services-box')
            observeElements('.section-content .section-content-skills .section-skills-title')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-title')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-content')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no .section-skills-infor-right-line .section-skills-infor-right-line-content .section-skills-infor-right-line-color .section-skills-infor-right-line-color2')
            observeElements('.section-content .section-content-education .section-education-title')
            observeElements('.section-content .section-content-education .section-education-infor .section-education-infor-box')
            observeElements('.section-content .section-content-feedback .section-feedback-title')
            observeElements('.section-content .section-content-feedback .section-feedback-infor .section-feedback-info-box')
            observeElements('.section-content .section-content-contact .section-contact-title')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .section-contact-infor-left-box')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .btn-submit-contact')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-title')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-content')
            return () => {
                window.removeEventListener('scroll', handleScroll)
                unobserveElements('.section-content .section-content-home .section-home-title')
                unobserveElements('.section-content .section-content-about .section-about-title')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-left .section-about-infor-box')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-number')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-text')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-cv')
                unobserveElements('.section-content .section-content-services .section-services-title')
                unobserveElements('.section-content .section-content-services .section-services-content .section-services-box')
                unobserveElements('.section-content .section-content-skills .section-skills-title')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-title')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-content')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no .section-skills-infor-right-line .section-skills-infor-right-line-content .section-skills-infor-right-line-color .section-skills-infor-right-line-color2')
                unobserveElements('.section-content .section-content-education .section-education-title')
                unobserveElements('.section-content .section-content-education .section-education-infor .section-education-infor-box')
                unobserveElements('.section-content .section-content-feedback .section-feedback-title')
                unobserveElements('.section-content .section-content-feedback .section-feedback-infor .section-feedback-info-box')
                unobserveElements('.section-content .section-content-contact .section-contact-title')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .section-contact-infor-left-box')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .btn-submit-contact')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-title')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-content')
            }
        }
        return () => {
            clearTimeout(timer)
        }
    }, [isLoading])

    useEffect(() => {
        // const fetchPostIP = async () => {
        //     const req = await axios.post('https://ktech-admin.onrender.com/v1/ip/ipUser')
        //     return req.data
        // }
        // fetchPostIP()
        //     .then()
        //     .catch(error => {
        //         return 0
        //     })
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)
    const zaloLink = isIOS ? 'zalo://qr/p/b0vaft11czp1' : isAndroid ? 'https://zaloapp.com/qr/p/b0vaft11czp1' : 'zalo://conversation?phone=0379382992'
    return (
        <>
        <style>
                {`
          * {
            margin: 0;
            padding: 0;
            font-family: 'Saira Condensed', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: normal;
          }
          body {
            background-color: #343434 !important;
          }
        `}
            </style>
            {isLoading ?
                <Loading />
                :
                <div className='section-page'>
                    <div className='section-header'>
                        <div className='col-2 section-header-nav'>
                            <>
                                <style dangerouslySetInnerHTML={{ __html: "\n  .absolute {\n  position: absolute;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.loader {\n  display: flex;\n  margin: 0.25em 0;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.dash {\n  animation: dashArray 5s ease-in-out infinite,\n    dashOffset 5s linear infinite;\n}\n\n\n@keyframes dashArray {\n  0% {\n    stroke-dasharray: 0 1 359 0;\n  }\n\n  50% {\n    stroke-dasharray: 0 359 1 0;\n  }\n\n  100% {\n    stroke-dasharray: 359 1 0 0;\n  }\n}\n\n\n@keyframes dashOffset {\n  0% {\n    stroke-dashoffset: 365;\n  }\n\n  100% {\n    stroke-dashoffset: 5;\n  }\n}\n" }} />
                                <div className="login-sign loader">
                                    <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
                                        <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
                                            <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="b">
                                                <stop className="s-xJBuHA073rTt" stopColor="black" />
                                                <stop className="s-xJBuHA073rTt" stopColor="black" offset={1} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" height={154} width={154} className="inline-block" viewBox="0 0 385.000000 397.000000" preserveAspectRatio="xMidYMid meet">

                                        <g transform="translate(0.000000,397.000000) scale(0.100000,-0.100000)" fill="#ffffff00" >
                                            <animate attributeName="fill" values="black;#ffffff00;black" dur="5s" repeatCount="indefinite" />
                                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={18} stroke="url(#b)" className="dash" id="b" pathLength={1100} d="M1624 3481 c-57 -35 -82 -147 -65 -290 7 -53 16 -134 22 -181 5 -47 18 -121 29 -165 10 -44 30 -142 45 -219 14 -76 46 -209 71 -295 25 -86 47 -163 49 -171 2 -8 13 -58 25 -110 11 -52 23 -102 26 -111 3 -11 -21 -33 -83 -75 -93 -62 -93 -62 -175 -110 -69 -42 -122 -81 -325 -246 -225 -182 -314 -285 -316 -364 -1 -44 38 -84 82 -84 16 0 95 23 177 51 161 54 475 208 650 319 53 33 99 60 103 60 3 0 12 -26 20 -57 17 -79 90 -354 98 -373 3 -8 7 -22 8 -30 2 -14 100 -414 127 -518 13 -51 46 -74 74 -51 19 16 18 43 -20 290 -37 243 -50 435 -40 629 12 251 13 275 13 281 1 6 141 101 256 174 70 44 270 174 540 352 105 68 223 145 263 170 58 36 72 50 70 67 -6 38 -37 28 -130 -42 -51 -38 -223 -157 -383 -264 -275 -185 -356 -238 -539 -350 l-78 -48 7 59 c8 71 -15 131 -70 180 -31 27 -43 31 -93 31 -33 0 -86 -10 -125 -24 -46 -15 -70 -19 -72 -12 -3 12 -44 177 -51 211 -3 11 -12 58 -20 105 -9 47 -35 184 -59 305 -54 271 -50 246 -76 445 -30 234 -20 400 25 400 26 0 98 -74 128 -133 65 -130 77 -195 79 -435 1 -154 4 -174 19 -182 27 -14 34 3 55 129 29 182 7 373 -56 491 -55 104 -171 210 -228 210 -14 0 -40 -9 -57 -19z m495 -1567 c39 -28 53 -76 45 -159 l-7 -74 -95 -56 c-52 -31 -98 -53 -103 -48 -4 4 -10 19 -12 33 -3 14 -17 74 -31 134 -15 60 -26 116 -24 125 3 17 125 60 173 60 17 1 41 -6 54 -15z m-249 -146 c11 -46 28 -104 36 -129 29 -92 38 -80 -126 -169 -217 -118 -437 -222 -585 -275 -186 -67 -224 -70 -193 -11 23 43 120 146 188 199 36 28 67 54 70 57 26 28 257 202 340 255 58 37 134 87 170 111 36 23 68 43 71 43 4 1 17 -36 29 -81z m276 -175 c-23 -116 -28 -217 -24 -427 5 -205 1 -249 -16 -163 -2 12 -20 83 -40 157 -19 74 -48 186 -65 248 l-29 114 36 21 c78 47 127 75 135 76 5 1 6 -11 3 -26z" />
                                        </g>
                                    </svg>
                                </div>
                            </>
                            <div className='section-nav'>
                                <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Home</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>About</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollTo('services')}>Services</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => scrollTo('services')}>Skills</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => scrollTo('services')}>Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className='container-header-mobile'>
                        <div className='logo'>
                            <img src={Sign} className='svg-logo' alt="Logo" />
                        </div>
                        <div style={{ display: 'flex', gap: 15, alignItems: 'center', paddingRight: 15 }}>
                            
                            <div id="checkbox2" className={isMenu ? 'checked' : ''}></div>
                            <label class="toggle toggle2" for="checkbox2" onClick={() => { setIsMenu(!isMenu) }}>
                                <div id="bar4" class="bars"></div>
                                <div id="bar5" class="bars"></div>
                                <div id="bar6" class="bars"></div>
                            </label>
                        </div>
                    </div>
                    <div className={isMenu ? 'section-nav-mobile-box active' : 'section-nav-mobile-box deactivate'} >
                        <div className='section-nav-mobile'>
                            <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => { scrollTo('home'); setIsMenu(!isMenu) }}>Home</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => { scrollTo('about'); setIsMenu(!isMenu) }}>About</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => { scrollTo('services'); setIsMenu(!isMenu) }}>Services</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => { scrollTo('skills'); setIsMenu(!isMenu) }}>Skills</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => { scrollTo('contact'); setIsMenu(!isMenu) }}>Contact</a>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='col-10 section-content-home' id='home'>
                            <div className='section-home-title'>
                                <div className='section-home-title-name'>Kass<br />D. DONG</div>
                                <div className='section-home-title-desc'>UI-UX designer, developer Front-end & Back-end ( ReactJS, React Navtive )</div>
                            </div>
                            <div className='section-home-img'>
                                <img src={Avatar} alt='Kass D. Dong' />
                            </div>
                        </div>
                        <div className='col-10 section-content-about' id='about'>
                            <div className='section-about-title'>
                                About
                            </div>
                            <div className='section-about-infor'>
                                <div className='section-about-infor-left'>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            NAME
                                        </div>
                                        <div className='section-about-infor-content'>
                                            Kass D. Dong
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            EMAIL
                                        </div>
                                        <div className='section-about-infor-content'>
                                            dongduclan277@gmail.com
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            PHONE
                                        </div>
                                        <div className='section-about-infor-content'>
                                            (+84) 0379382992
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            LOCATION
                                        </div>
                                        <div className='section-about-infor-content'>
                                            TP.HCM, VIET NAM
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            SOCIAL
                                        </div>
                                        <div className='section-about-infor-content'>
                                            <div style={{ display: 'flex', gap: 15 }}>
                                                <a href="https://www.facebook.com/kass277" aria-label="Click to facebook" alt='facebook'><i className="fa-brands fa-facebook-f" /></a>
                                                <a href="tel:0379382992" aria-label="Click to call" alt='phoneCall'><i className="fa-solid fa-phone fa-sm" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-about-infor-right'>
                                    <div className='section-about-infor-number'>
                                        <div className='section-about-infor-number-title'>XP YEARS</div>
                                        <div className='section-about-infor-number-content'>1+</div>
                                    </div>
                                    <div className='section-about-infor-number'>
                                        <div className='section-about-infor-number-title'>CLIENTS</div>
                                        <div className='section-about-infor-number-content'>2</div>
                                    </div>
                                    <div className='section-about-infor-number'>
                                        <div className='section-about-infor-number-title'>PROJECT</div>
                                        <div className='section-about-infor-number-content'>7</div>
                                    </div>
                                    <div className='section-about-infor-text'>
                                        <div className='section-about-infor-text-title'>Come to me if you need:</div>
                                        <div className='section-about-infor-text-content'>1. Website system design or just website interface design</div>
                                        <div className='section-about-infor-text-content'>2. Database design (from small to large).</div>
                                        <div className='section-about-infor-text-content'>3. Your company is recruiting people for Front-end | Back-end.</div>
                                        <div className='section-about-infor-text-content'>4. You are looking for a freelancer to do your own website system development work for you.</div>
                                        <div className='section-about-infor-text-content'>Please rest assured about our service, we understand your feelings when spending an amount of money to make a quality product. When I receive 1$ from you, I will make for you a quality product that is not only worth 1$ but has a value even greater than 1$.</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='col-10 section-content-services' id='services'>
                            <div className='section-services-title'>
                                Srvcs
                            </div>
                            <div className='row section-services-content'>
                                <div className='col-md-6 '>
                                    <div className='section-services-box' onClick={() => handleBoxClick(0)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>Design</div>
                                            {selectedIndexes.includes(0) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(0) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Design for website and application mobile</li>
                                                <li>Using tools ( Figma & Adobe XD )</li>
                                                <li>Professional & modern</li>
                                                <li>Faster & detailed</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='section-services-box' onClick={() => handleBoxClick(1)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>Website</div>
                                            {selectedIndexes.includes(1) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(1) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Using library ( ReactJS & more vv.v )</li>
                                                <li>System optimization</li>
                                                <li>Using the latest technology</li>
                                                <li>Mainly used language (Javascript, HTML, Scss)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='section-services-box' onClick={() => handleBoxClick(2)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>Application Mobile</div>
                                            {selectedIndexes.includes(2) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(2) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Using library ( React Native & more vv.v )</li>
                                                <li>Optimized system & running on 2 main platforms (IOS & Android) </li>
                                                <li>Using the latest technology</li>
                                                <li>Mainly used language (Javascript, HTML, Css)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='section-services-box' onClick={() => handleBoxClick(3)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>Database</div>
                                            {selectedIndexes.includes(3) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(3) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Using NodeJS</li>
                                                <li>Database design ( noSQL ) ( MongoDb ) & API design</li>
                                                <li>Mainly used language (Javascript)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 section-content-skills' id='skills'>
                            <div className='section-skills-title'>
                                Skills
                            </div>
                            <div className='section-skills-infor'>
                                <div className='section-skills-infor-left'>
                                    <div className='section-skills-infor-left-title'>About specialized skills</div>
                                    <div className='section-skills-infor-left-content'>With more than 1 year of experience and participating in a number of different projects. That has improved my specialized skills quite a lot.</div>
                                    <div className='section-skills-infor-left-content'>The following parameters most clearly reflect skills.</div>
                                </div>
                                <div className='section-skills-infor-right'>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            80%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                HTML & CSS
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '80%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            70%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                Javascript
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '70%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            75%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                ReactJS
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '75%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            50%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                React Native
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '50%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            70%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                NodeJS
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '70%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-10 section-content-contact' id='contact'>
                            <div className='section-contact-title'>
                                Contact
                            </div>
                            <div className='section-contact-infor'>
                                <div className='section-contact-infor-left'>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'name' ? 'input-focused' : ''}`}>
                                            Name
                                        </div>
                                        <input
                                            type='text'
                                            aria-label=''
                                            placeholder=''
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('name')}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'email' ? 'input-focused' : ''}`}>
                                            Email
                                        </div>
                                        <input
                                            type='text'
                                            aria-label=''
                                            placeholder=''
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('email')}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'subject' ? 'input-focused' : ''}`}>
                                            Subject
                                        </div>
                                        <input
                                            type='text'
                                            aria-label=''
                                            placeholder=''
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('subject')}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'message' ? 'input-focused' : ''}`}>
                                            Message
                                        </div>
                                        <textarea
                                            className='section-contact-infor-left-input'
                                            aria-label=''
                                            placeholder=''
                                            onFocus={() => handleInputFocus('message')}
                                            onBlur={handleInputBlur}
                                            name="Text1"
                                            cols="40"
                                            rows="5" />
                                    </div>
                                    <button type='submit' className='btn-submit-contact'>
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        fill="currentColor"
                                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Send</span>
                                    </button>
                                </div>
                                <div className='section-contact-infor-right'>
                                    <div className='section-contact-infor-right-title'>Contact to me if you need:</div>
                                    <div className='section-contact-infor-right-content'>- Website system design or just website interface design.<br />- Database design (from small to large).<br />- Your company is recruiting people for Front-end | Back-end.<br />- You are looking for a freelancer to do your own website system development work for you.</div>
                                    <div className='section-contact-infor-right-content'>Please rest assured about our service, we understand your feelings when spending an amount of money to make a quality product. When I receive 1$ from you, I will make for you a quality product that is not only worth 1$ but has a value even greater than 1$.</div>
                                    <div className='section-contact-infor-right-content'>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Name: </span>Kass D. Dong</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Address: </span>Ha Noi, Viet Nam</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Phone: </span>(+84) 0379382992</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Hours: </span>6:00 am – 2:00 am</div>
                                    </div>
                                    <div className='section-contact-infor-right-content'>
                                        <div style={{ display: 'flex', gap: 15 }}>
                                            <a href="https://www.facebook.com/kass277" aria-label="Click to facebook" alt='facebook'><i className="fa-brands fa-facebook-f" /></a>
                                            <a href="tel:0379382992" aria-label="Click to call" alt='phoneCall'><i className="fa-solid fa-phone fa-sm" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default memo(Index)

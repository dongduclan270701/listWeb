import React, { useState, useEffect, memo } from 'react'
import 'assets/Homepage/scss/Landing_page.scss'
import LandingPage from 'assets/Homepage/images/Landing-page.png'
import { NavLink } from 'react-router-dom'
import Loading from 'components/Homepage/About/Loading'
const Index = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);

        return () => clearTimeout(timer);
    }, [isLoading]);
    return (
        <>
            {isLoading ?
            <div style={{backgroundColor:'#343434', margin:0, padding:0}}>
                <Loading />
                </div>
                :
                <div className='category-landing-page'>
                    <div className='banner-image'>
                        <img src={LandingPage} className='image' alt="Landing-page-image" />
                    </div>
                    <div>
                        <NavLink to={'https://www.xeghepbacgiangbacninhhanoi.net'} className='nav-link'>
                            Xe ghép
                        </NavLink>
                        <NavLink to={'/website/template/KLD0512'} className='nav-link'>
                            KLD0512
                        </NavLink>
                    </div>
                </div>
            }
        </>
    );
}

export default Index;

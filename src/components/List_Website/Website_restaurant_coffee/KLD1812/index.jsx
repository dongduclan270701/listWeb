import React from 'react';
import 'assets/List_Website/KLD1812/scss/homepage.scss'
import Svg1 from 'assets/List_Website/KLD1812/images/banner-logo-1.svg'
import Svg2 from 'assets/List_Website/KLD1812/images/banner-logo-2.svg'
import Svg3 from 'assets/List_Website/KLD1812/images/banner-logo-3.svg'
const Index = () => {
    return (
        <div className='homepage-kld1812'>
            <div className='section-1'>
                <img
                    className="banner"
                    src={'https://res.cloudinary.com/dolydpat4/image/upload/v1734534995/FloraSpring23_005-1_eij0xi.jpg'}
                />
                <div className='text-banner'>
                    <img src={Svg2} alt="" />
                    <img src={Svg1} alt="" />
                    <img src={Svg3} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Index;

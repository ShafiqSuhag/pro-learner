import React from 'react';

const HeroSection = (props) => {
    const {title , bgImg, bgColor, titleBgColor } = props
    const bgClass = `h-96  ${bgColor} rounded flex justify-center items-center z-10 cover-image-bg shadow-xl`
    const titleClass = `relative ${titleBgColor} z-20 w-52 md:w-96 h-16 md:h-20 -300 rounded-lg  -mt-10 mx-auto shadow-lg flex justify-center items-center  text-xl md:text-2xl font-bold text-white`
    return (
        <>
            {/* hero section  */}
            <div className="relative z-10">
                <div className={bgClass} style={{ backgroundImage: `url(${bgImg})` }} >
                </div>
            </div>
            <div className={titleClass}>
                {title}
            </div>
            {/* hero section / */}
        </>
    );
};

export default HeroSection;
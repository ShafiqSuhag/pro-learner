import React from 'react';

const HeroSection = (props) => {
    const {title , bgImg } = props
    return (
        <>
            {/* hero section  */}
            <div className="relative z-10">
                <div className="h-96  bg-purple-300 rounded flex justify-center items-center z-10 cover-image-bg shadow-xl " style={{ backgroundImage: `url(${bgImg})` }} >
                </div>
            </div>
            <div className="relative bg-purple-600 z-20 w-96 h-20 -300 rounded-lg  -mt-10 mx-auto shadow-lg flex justify-center items-center text-2xl font-bold text-white">
                {title}
            </div>
            {/* hero section  */}
        </>
    );
};

export default HeroSection;
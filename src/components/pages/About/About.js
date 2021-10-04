import React from 'react';
import HeroSection from '../../sections/HeroSection/HeroSection';

const About = () => {
    return (
        <div>
            {/* hero section  */}
            <HeroSection title="ABOUT US" bgImg="./images/contact-cover.png"></HeroSection>

            {/* about us page info  */}
            <div>
                <div>
                    imgage
                </div>
                <div>
                Welcome to Edule.
You can join with Edule and upgrade your skill for your bright future.
Lorem Ipsum has been the industr’s standard dummy text ever since unknown printer took galley type and scmbled make type specimen book. It has survived not only five centuries.
                </div>
            </div>
            {/* about us page info  */}
        </div>
    );
};

export default About;
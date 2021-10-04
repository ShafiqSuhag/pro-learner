import React from 'react';
import HeroSection from '../../sections/HeroSection/HeroSection';

const About = () => {
    return (
        <div >
            {/* hero section  */}
            <HeroSection title="ABOUT US" bgImg="./images/about-us.png" bgColor="bg-indigo-300" titleBgColor="bg-indigo-400"></HeroSection>

            {/* about us page info  */}
            <div className="grid grid-cols-2 mt-20 mx-10 ">
                <div className="flex items-center justify-center ">
                    <img src="./images/about-us.webp" alt="about us " className=" rounded shadow-lg" />
                </div>
                <div className="flex flex-col items-start justify-center pr-28">
                    <h1 className="text-xl text-green-500">
                        Welcome to Pro Learner.
                    </h1>
                    <p className="text-4xl my-5 font-medium	">
                        You can join with PRO LEARNER and upgrade your skill for your bright future.

                    </p>
                    <p className="my-5">
                        Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
                    </p>
                    <button className="btn btn-outline btn-accent">BROWSE COURSES</button>


                </div>
            </div>

            {/* card info  */}

            {/* card item  */}
            <div className="grid grid-cols-3 gap-4 my-20 mx-10">
                {/* card item  */}
                <div className="bg-indigo-600 p-10 text-white hover:bg-indigo-500">
                    <h1 className="text-2xl my-2">
                        Work with us
                    </h1>
                    <p>
                        At Udemy, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.
                    </p>
                </div>
                {/* card item  */}
                {/* card item  */}
                <div className="bg-yellow-600 p-10 text-white hover:bg-yellow-500">
                    <h1 className="text-2xl my-2">
                        See our research
                    </h1>
                    <p>
                        We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.
                    </p>
                </div>
                {/* card item  */}
                {/* card item  */}
                <div className="bg-green-600 p-10 text-white hover:bg-green-500">
                    <h1 className="text-2xl my-2">
                        Read our blog
                    </h1>
                    <p>
                        Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.
                    </p>
                </div>
                {/* card item  */}
            </div>
            {/* card info  */}

            {/* about us page info  */}
        </div>
    );
};



export default About;
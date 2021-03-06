import React from 'react';
import HeroSection from '../../sections/HeroSection/HeroSection';
import ContactInfo from './contact-info/ContactInfo';
import './Contact.css';
// const contactUsCover = '../../../images/contact-us-cover.jpg'
const Contact = () => {
    return (
        <div>
            {/* hero section  */}
            <HeroSection title="CONTACT US" bgImg="./images/contact-cover.png" bgColor="bg-green-300" titleBgColor="bg-green-400"></HeroSection>
            {/* hero section / */}


            {/* contact us form  */}
            <div className="grid grid-cols-1 md:grid-cols-2 py-5 my-5">
                <div id="pro-learner-info-container " className="flex items-center justify-center md:justify-end ">
                    <div className="bg-green-100 flex flex-col  md:w-7/12 rounded shadow-lg py-5 ">
                        {/* info item  */}
                        <ContactInfo icon="phone_in_talk" infoTitle="Phone No." infoValue="(88) 1677 000 123"></ContactInfo>
                        <ContactInfo icon="drafts" infoTitle="Email" infoValue="info@prolearner.com"></ContactInfo>
                        <ContactInfo icon="place" infoTitle="Office Address." infoValue="Dhaka, Bangladesh"></ContactInfo>
                        {/* info item  */}
                    </div>
                </div>
                {/* contact form  */}
                <div id="pro-learner-info-container " className="flex items-center justify-start">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control my-2">

                                <input placeholder="Name" className="input input-bordered" type="text" />
                            </div>
                            <div className="form-control my-2">

                                <input placeholder="Email" className="input input-bordered" type="text" />
                            </div>
                            <div className="form-control my-2">

                                <input placeholder="Subject" className="input input-bordered" type="text" />
                            </div>

                            <div className="form-control my-2">

                                <textarea rows="4" cols="50" placeholder="Message" className="textarea input-bordered" type="text" />
                            </div>

                            <div className="form-control mt-6">
                                <input type="button" value="SEND MESSAGE" className="btn btn-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* contact form  */}
            </div>
            {/* contact us form  */}



        </div>
    );
};

export default Contact;
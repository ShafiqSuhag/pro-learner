import React from 'react';

const ContactInfo = (props) => {
    const { icon, infoTitle, infoValue } = props
    return (
        <div className="flex items-center justify-start mx-2 my-2 border-b-2 border-white mx-16 px-5 py-5 rounded ">
            <div className="contact-icon rounded-full h-16 w-16 flex items-center justify-center bg-green-200 hover:text-white">
                <span className="material-icons ">
                    {icon}
                </span>
            </div>
            <div className="ml-6">
                <p> {infoTitle} </p>
                <h3 className="font-bold">{infoValue} </h3>
            </div>
        </div>
    );
};

export default ContactInfo;
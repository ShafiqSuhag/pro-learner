import React from 'react';
const contactUsCover = '../../../images/contact-us-cover.jpg'
const Contact = () => {
    return (
        <div>
            <div className="hero  bg-base-200 block">
                <div className="hero-content grid grid-cols-2 gap-4">
                    {/* <div className="flex-col hero-content lg:flex-row-reverse  justify-between"> */}
                    <div className="  order-last ml-auto">
                        <img src={contactUsCover} alt="hero section img" className="max-w-sm rounded-lg shadow-2xl " />
                    </div>
                    <div className="mx-auto">
                        <h1 className=" mb-5 text-5xl font-bold text-green-600">
                            Contact Us
                        </h1>
                        {/* <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            {/* contact us form  */}
            <div>
                {/* institue info  */}
                <div className="hero min-h-screen bg-base-200">
                    <div className="flex-col justify-center hero-content lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="mb-5 text-5xl font-bold">
                                Hello there
                            </h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
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
                                   
                                    <textarea rows="4" cols="50"  placeholder="Message" className="textarea input-bordered" type="text" />
                                </div>
                                
                                <div className="form-control mt-6">
                                    <input type="button" value="SEND MESSAGE" className="btn btn-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* fomr  */}
            </div>
        </div>
    );
};

export default Contact;
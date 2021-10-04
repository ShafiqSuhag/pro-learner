import React from 'react';

const ServiceSidebar = () => {
    return (
        <div>
            <div className="py-4 artboard artboard-demo  ">
                <ul className="menu py-4 shadow-lg bg-base-100 rounded-box w-full">
                    <li className="menu-title">
                        <span>
                            Course Categories
                        </span>
                    </li>

                   
                    <li className="hover-bordered">
                        <a href="/">
                            <span className="material-icons mr-3">layers</span>
                           All Courses
                        </a>
                    </li>
                    <li className="hover-bordered">
                        <a href="/">
                            <span className="material-icons mr-3">layers</span>
                            Programming
                        </a>
                    </li>
                    
                    <li className="hover-bordered">
                        <a href="/">
                            <span className="material-icons mr-3">layers</span>
                            programming2
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default ServiceSidebar;
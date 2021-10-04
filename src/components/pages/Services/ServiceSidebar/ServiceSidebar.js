import React from 'react';

const ServiceSidebar = () => {
    return (
        <div>
            <div class="py-4 artboard artboard-demo bg-base-200">
                <ul class="menu py-4 shadow-lg bg-base-100 rounded-box">
                    <li class="menu-title">
                        <span>
                            Menu Title
                        </span>
                    </li>
                    <li class="bordered disabled">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Item is disabled

                        </a>
                    </li>
                    <li class="bordered">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            It has border

                        </a>
                    </li>
                    <li class="hover-bordered">
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            It shows border on hover

                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ServiceSidebar;
import React from 'react';

const CourseItem = () => {
    return (
        <div className="course-item mx-4  my-1 border-2 rounded-lg  hover:border-green-500   flex flex-col p-5">
            <div className="flex pb-5">
                <img src="https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-01.jpg" alt="course item" srcset="" className="rounded" />
            </div>
            <div id="2nd line" className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                    <div>
                        <img src="https://template.hasthemes.com/edule/eduLe/assets/images/author/author-01.jpg" alt="instructor " srcset="" className="rounded-full h-12 w-12 " />
                    </div>
                    <div className="text-gray-500 text-sm ml-2">
                        Pamela Foster
                    </div>
                </div>
                <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded text-sm	 ">
                    Programming
                </button>

            </div>
            <div id="3" className="text-lg font-semibold mb-4">
                Data Science and Machine Learning with Python - Hands On!
            </div>
            <div id="4" className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <span className="material-icons mr-1">
                        timer
                    </span> 08 hr 15 mins
                </div>
                <div className="flex items-center">
                    <span className="material-icons mr-1">
                        library_books
                    </span> 29 Lectures
                </div>
            </div>
            <div id="5" className="flex justify-between">
                <div>
                    $385.00
                </div>
                <div>
                    4.9
                </div>
            </div>
        </div>
    );
};

export default CourseItem;
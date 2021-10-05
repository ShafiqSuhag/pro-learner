import React from 'react';
import Preloader from '../preloader/Preloader';

const CourseItem = (props) => {
    

    const { name, category, instructor, img, price, duration, lectures, authorImg } = props.course
    return (
        <div className="course-item mx-4  my-1 border-2 rounded-lg  hover:border-green-500   flex flex-col p-5 bg-white">
            <div className="flex pb-5 relative h-48">
                <img src={img} alt="course item" className="rounded  top-0 z-20" />
                {/* <Preloader className="h-48 bg-white absolute left-0 top-0 z-10"></Preloader> */}
                <div className="w-full bg-white absolute top-0 left-0 z-10">
                    <Preloader></Preloader>
                </div>
                
            </div>
            <div className="flex justify-between items-center mb-5 relative">
                <div className="flex items-center">
                    <div className="">
                        <img src={authorImg} alt="instructor " className="rounded-full h-12 w-12 top-0 " />
                        
                    </div>
                    <div className="text-gray-500 text-sm ml-2">
                        {instructor}
                    </div>
                </div>
                <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded text-sm	 ">
                    {category}
                </button>

            </div>
            <div  className="text-lg font-semibold relative ">
                {name}
            </div>
            <div className="flex justify-between items-center my-6 text-gray-500 flex-wrap py-2 relative">
                <div className="flex items-center ">
                    <span className="material-icons mr-1">
                        timer
                    </span>{duration}
                </div>
                <div className="flex items-center ">
                    <span className="material-icons mr-1">
                        library_books
                    </span> {lectures}
                </div>
            </div>
            <div className="flex justify-between items-center relative">
                <div className="text-2xl font-semibold">
                    ${price}
                </div>
                <div>
                    <button className="px-4 py-1 bg-green-500 rounded text-white hover:bg-green-800 hover:text-white ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;
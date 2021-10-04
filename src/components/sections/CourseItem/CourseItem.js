import React from 'react';

const CourseItem = (props) => {
    

    const { name, category, instructor, img, price, duration, lectures, authorImg } = props.course
    return (
        <div className="course-item mx-4  my-1 border-2 rounded-lg  hover:border-green-500   flex flex-col p-5 bg-white">
            <div className="flex pb-5">
                <img src={img} alt="course item" className="rounded" />
            </div>
            <div id="2nd line" className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                    <div>
                        <img src={authorImg} alt="instructor " className="rounded-full h-12 w-12 " />
                    </div>
                    <div className="text-gray-500 text-sm ml-2">
                        {instructor}
                    </div>
                </div>
                <button className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded text-sm	 ">
                    {category}
                </button>

            </div>
            <div id="3" className="text-lg font-semibold ">
                {name}
            </div>
            <div id="4" className="flex justify-between items-center my-6">
                <div className="flex items-center">
                    <span className="material-icons mr-1">
                        timer
                    </span>{duration}
                </div>
                <div className="flex items-center">
                    <span className="material-icons mr-1">
                        library_books
                    </span> {lectures}
                </div>
            </div>
            <div id="5" className="flex justify-between items-center">
                <div className="text-2xl font-semibold">
                    ${price}
                </div>
                <div>
                    {/* {rating} */}
                    <button className="px-4 py-1 bg-green-500 rounded text-white hover:bg-green-800 hover:text-white ">Buy Now</button>

                </div>
            </div>
        </div>
    );
};

export default CourseItem;
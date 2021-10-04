import React, { useEffect, useState } from 'react';
import CourseItem from '../../sections/CourseItem/CourseItem';
import ServiceSidebar from './ServiceSidebar/ServiceSidebar';

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }
        , [])
    return (

        <div className="md:flex">

            <div className="md:w-3/12">
                <ServiceSidebar></ServiceSidebar>
            </div>
            <div className="md:w-9/12 ">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-1 md:mx-1 xl:mx-5 lg:pb-36    ">
                    {
                        courses.map(course => <CourseItem key={course.id} course={course}></CourseItem>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Services;
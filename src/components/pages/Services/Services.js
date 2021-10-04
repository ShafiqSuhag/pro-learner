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

        <div className="flex">

            <div className="w-3/12 ">
                <ServiceSidebar></ServiceSidebar>
            </div>
            <div className="w-9/12 ">
                <div className="grid grid-cols-3 gap-1 ">
                    {
                        courses.map(course => <CourseItem key={course.id} course={course}></CourseItem>)
                    }

                </div>
            </div>



        </div>
    );
};

export default Services;
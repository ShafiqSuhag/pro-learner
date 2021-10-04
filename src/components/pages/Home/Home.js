import React, { useEffect, useState } from 'react';
import CourseItem from '../../sections/CourseItem/CourseItem';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }
        , [])

    return (

        <div className="bg-base-200">

            {/* Homepage hero section  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src="./images/home-hero.png" alt="hero " className="max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">
                            Learn Without Limits
                        </h1>
                        <p className="mb-5">
                            Build skills with courses, certificates, and degrees online from world-class universities and companies.
                        </p>
                        <button className="btn bg-indigo-400 border-0 ">BROWSE ALL COURSES</button>
                    </div>
                </div>
            </div>
            {/* Homepage hero section  */}


            {/* service section  */}
            <div className="grid grid-cols-3 gap-1 mx-36 mb-36 ">
                {
                    courses.map(course => {
                        if (course.id < 4) {
                            return <CourseItem key={course.id} course={course}></CourseItem>
                        }
                        return []

                    })
                }

            </div>

            {/* service section  */}

            {/* Students testimonial  */}

            {/* Students testimonial  */}


        </div>
    );
};

export default Home;
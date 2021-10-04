import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CourseItem from '../../sections/CourseItem/CourseItem';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }
        , [])

        const history = useHistory()
        const handleBrowseCourseBtn = () => history.push("/services")
    return (

        <div className="bg-base-200">

            {/* Homepage hero section  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src="./images/home-hero.png" alt="hero " className="lg:max-w-sm rounded-full shadow-2xl" />
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">
                            Learn Without Limits
                        </h1>
                        <p className="mb-5">
                            Build skills with courses, certificates, and degrees online from world-class universities and companies.
                        </p>
                        <button onClick={handleBrowseCourseBtn} className="btn bg-indigo-400 border-0 ">BROWSE ALL COURSES</button>
                    </div>
                </div>
            </div>
            {/* Homepage hero section  */}


            {/* service section  */}
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-1 md:mx-10 xl:mx-36 lg:pb-36    ">
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
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CourseItem from '../../sections/CourseItem/CourseItem';
import Testimonial from '../../sections/Testimonial/Testimonial';

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
            <div className="py-5">
                <h1 className="text-center text-5xl text-green-400 font-bold">Testimonials </h1>
            </div>
            {/* Students testimonial  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:grid-cols-3 mx-2 md:mx-10 xl:mx-36 pb-10 lg:pb-36 ">
                
                <Testimonial  name="Janis Johnson" occupation="Web Developer" img="https://i.pravatar.cc/500?img=32"
                 msg="Pro Learner fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers." ></Testimonial>
                <Testimonial  name="Miralia H." occupation="Graphics Designer" img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/yi0wou0N5EsZGDfVejLKR/efce71fb9c36c759a5c96d37a8cdc5e0/coursera-learner-b.png"
                 msg="In total, it was a big success, I would get emails about what a fantastic resource it was." ></Testimonial>
                <Testimonial  name="Sabrina M." occupation="HR Manager" img="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5LDGatPtRSYDXjfMkQF0Id/238e7338df5a05e837e1fef84cceb7fc/coursera-learner-d.png"
                 msg="Pro Learner responds to the needs of the business in an agile and global manner. It’s truly the best solution for our employees and their careers." ></Testimonial>

                

                
            </div>
            {/* Students testimonial  */}


        </div>
    );
};

export default Home;
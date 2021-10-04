import React from 'react';
import CourseItem from '../../sections/CourseItem/CourseItem';

const Home = () => {
    return (
        <div className="">
            {/* <div class="grid grid-cols-4 gap-4">
                <div className="card text-center shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://picsum.photos/id/1005/400/250" className="rounded-xl" alt="service img " />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">shadow, center, padding</h2>
                        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                        <div className="justify-center card-actions">
                            <button className="btn btn-outline btn-accent">More info</button>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* service section  */}
            <div className="grid grid-cols-3 gap-1 mx-36">
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
                <CourseItem></CourseItem>
            </div>

            {/* service section  */}

            {/* Students testimonial  */}

            {/* Students testimonial  */}


        </div>
    );
};

export default Home;
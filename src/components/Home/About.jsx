import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
        <section className="about_section pt-5">
            <div className="container">
                <div className="text-center about_content">
                    <div className="row row-cols-md-2 order-2 about_wrapper">
                        <div className="col  d-flex align-items-center">
                        <div className="section_one">
                            <div className="card w-100 mb-3 border-0 bg-transparent text-start">
                                <div className="card-body">
                                    <h2 className="card-title text_area">
                                        New album available on vinyl on June 15th. 
                                    </h2>
                                    <p className="card-text">
                                        I'm a frontend developer that specialises in building websites and web apps.
                                        <br />
                                        I specialise in creating user interfaces with HTML, CSS and JavaScript.
                                        <br />
                                        Additionally, I'm experienced in using libraries and frameworks
                                        such as React, as well as various task runners and build tools.
                                    </p>
                                    <button type="button" className="btn me-3 ms-2 p-2 border border-2 rounded about_button">
                                    Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="section_two">
                            <div>
                                <img className='w-75' src="https://images.squarespace-cdn.com/content/v1/624b503b0f4c592cc4f8981f/1649102922665-MMEWY9T81L9I5M6FPPKB/record.jpg?format=1500w" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
    import React from 'react';
    import './AboutHome.css';

    const AboutHome = () => {
    return (
        <div>
            <section className="aboutHome_section p-5">
                <div className="container">
                    <div className="text-center aboutHome_content">
                        <div className="row row-cols-md-2 order-2 aboutHome_wrapper">
                            <div className="col  d-flex align-items-center">
                            <div className="aboutHome_one">
                                <div className="card w-100 mb-3 border-0 bg-transparent text-start">
                                    <div className="card-body">
                                        <h2 className="card-title aboutHome_title">
                                            From University to Professional: Elevating Web Development
                                        </h2>
                                        <p className="card-text aboutHome_text">
                                            During my time at university, I had the opportunity to work on a variety of projects, both individually and in teams, 
                                            demonstrating my problem-solving and attention to detail.
                                            <br />
                                            One of my strengths is my ability to translate complex ideas and concepts into intuitive and engaging user interfaces. 
                                            In addition to my technical skills, I am a dedicated learner and always seeking new challenges. 
                                            <br />
                                            I am eager to expand my knowledge and stay updated with emerging technologies and industry trends. 
                                        </p>
                                        <button type="button" className="btn p-2 border border-2 rounded aboutHome_button">
                                         Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="col">
                            <div className="aboutHome_two">
                                <div>
                                    <img className="aboutHome_img" src="https://images.squarespace-cdn.com/content/v1/624b503b0f4c592cc4f8981f/1649102922665-MMEWY9T81L9I5M6FPPKB/record.jpg?format=1500w" alt="" />
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

    export default AboutHome;
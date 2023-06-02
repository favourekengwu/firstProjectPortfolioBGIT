import React from 'react';
import './PortfolioHome.css';
import GuessImage from '../../assets/guess1.png';
import CorpImage from '../../assets/corp1.png';
import PortImage from '../../assets/port1.png'

const PortfolioHome = () => {
  return (
    <div>
        <section className="portfolioHome_section pt-5">
            <div className="container" >
                <div className="portfolioHome_content">
                    <h2 className="text-center display-4 fw-bold portfolioHome_title">Some Of My Works</h2>
                    <div class="text-center fs-5 text-secondary-emphasis">
                        There are many variations of passages of Lorem Ipsum available, but
                        <br /> the majority have suffered alteration.
                    </div>
                    <div className="row row-cols-md-3 w-100 d-flex justify-content-center">
                        <div className="portfolioHome_card card border-0 text-start bg-transparent ">
                            <div className="card-body text-center card-services">
                                <img src={CorpImage}
                                className="card-img-top rounded"
                                alt="..."
                                />
                                <div class="card-body pe-0 ps-0">
                                    <h5 class="card-title">Cooperate Business Landing Page</h5>
                                    <p class="card-text">
                                        A website belonging to a cooperative company that includes price tags
                                    </p>
                                    <a href="https://first-bootstrap-project-sigma.vercel.app/" class="services-pt2-card-link" target='_blank'>
                                        <span class="underline-me2">Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioHome_card card border-0 text-start bg-transparent ">
                            <div className="card-body text-center card-services">
                                <img src={GuessImage}
                                className="card-img-top rounded"
                                alt="..."
                                />
                                <div class="card-body pe-0 ps-0">
                                    <h5 class="card-title">Guessing Game</h5>
                                    <p class="card-text">
                                        A Javascript guessing game in which users have five chances to guess the correct number and receive feedback on each guess.
                                    </p>
                                    <a href="#" class="services-pt2-card-link">
                                        <span class="underline-me2">Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="portfolioHome_card card border-0 text-start bg-transparent ">
                            <div className="card-body text-center card-services">
                                <img src={PortImage}
                                className="card-img-top rounded"
                                alt="..."
                                />
                                <div class="card-body pe-0 ps-0">
                                    <h5 class="card-title">First CSS website</h5>
                                    <p class="card-text">
                                        The very first website built with only the most fundamental elements of HTML and CSS
                                    </p>
                                    <a href="https://first-css-sproject.vercel.app/" class="services-pt2-card-link" target='_blank'>
                                        <span class="underline-me2">Read More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </section> 

        <section>
            <div class="my-5">
                <h2 class="text-center display-4 fw-bold">Some Of My Works</h2>
                <p class="text-center fs-5 text-secondary-emphasis">
                There are many variations of passages of Lorem Ipsum available, but<br />
                the majority have suffered alteration.
                </p>

                <div class="container">
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1">
                        <div class="mb-4">
                            <div
                                class="fashion-wrapper position-relative img-wrapper rounded-2 border"
                                style={{backgroundImage:`url(${CorpImage})` }}
                            >
                                <div class="overlay w-100 h-100 position-absolute rounded-2">
                                <div
                                    class="text-white ps-4 fashion-stats position-relative top-50"
                                >
                                    <span class="d-block fw-bold mb-2">Development</span>
                                    <p class="text-light fs-5 fw-bold">
                                    Getting tickets to the big show
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    Read More
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div
                                class="fashion-wrapper position-relative img-wrapper rounded-2 border"
                                style={{backgroundImage:`url(${GuessImage})` }}
                            >
                                <div
                                class="overlay w-100 h-100 position-absolute top-0 start-0 rounded-2"
                                >
                                <div
                                    class="pb-3 text-white ps-4 fashion-stats position-relative top-50"
                                >
                                    <span class="d-block fw-bold mb-2">Management.</span>
                                    <p class="text-light fs-5 fw-bold">
                                    A big ticket gone to be an interesting
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    Read More
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-4">
                        <div
                            class="fashion-wrapper position-relative img-wrapper rounded-2 border"
                            style={{backgroundImage:`url(${PortImage})` }}
                        >
                            <div
                            class="overlay w-100 h-100 position-absolute top-0 start-0 rounded-2"
                            >
                                <div
                                    class="pb-3 text-white ps-4 fashion-stats position-relative top-50"
                                >
                                    <span class="d-block fw-bold mb-2">Design</span>
                                    <p class="text-light fs-5 fw-bold">
                                    The Home of the Future Could Bebes
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    Read More
                                    </button>
                                </div>
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

export default PortfolioHome;
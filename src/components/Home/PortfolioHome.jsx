import React from 'react';
import './PortfolioHome.css';
import GuessImage from '../../assets/guess1.png';
import CorpImage from '../../assets/corp1.png';
import PortImage from '../../assets/port1.png'

const PortfolioHome = () => {
  return (
    <div>
        <section className="portfolioHome_section p-3">
            <div className="container" >
                <div className="portfolioHome_content my-5">
                    <h2 className="text-center display-4 fw-bold portfolioHome_title">Some Of My Works</h2>
                    <div class="text-center fs-5 portfolioHome_text">
                        There are many variations of passages of Lorem Ipsum available, but
                        <br /> the majority have suffered alteration.
                    </div>
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 portfolioHome_gallary ">
                        <div class="mb-4">
                            <div
                                class="portfolioHome_wrapper position-relative img-wrapper rounded-2 border"
                                style={{backgroundImage:`url(${CorpImage})` }}
                            >
                                <div class="portfolioHome_overlay w-100 h-100 position-absolute rounded-2"></div>
                                <div
                                    class="text-white ps-4 portfolioHome_stats position-relative top-50"
                                >
                                    <span class="d-block fw-bold mb-2">Development</span>
                                    <p class="text-light fs-5 fw-bold">
                                    Getting tickets to the big show
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    <a href="https://first-bootstrap-project-sigma.vercel.app/" class="portfolioHome_link" target='_blank'>Read More</a>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="mb-4">
                            <div
                                class="portfolioHome_wrapper position-relative img-wrapper rounded-2 border"
                                style={{backgroundImage:`url(${GuessImage})` }}
                            >
                                <div
                                class="portfolioHome_overlay w-100 h-100 position-absolute top-0 start-0 rounded-2"
                                ></div>
                                <div
                                    class="pb-3 text-white ps-4 portfolioHome_stats position-relative top-50"
                                >
                                    <span class="d-block fw-bold mb-2">Management.</span>
                                    <p class="text-light fs-5 fw-bold">
                                    A big ticket gone to be an interesting
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    <a href="https://first-css-sproject.vercel.app/" class="portfolioHome_link" target='_blank'>Read More</a>
                                    </button>
                                </div>
                                
                            </div>
                        </div>

                        <div class="mb-4">
                        <div
                            class="portfolioHome_wrapper position-relative img-wrapper rounded-2 border"
                            style={{backgroundImage:`url(${PortImage})` }}
                        >
                            <div
                            class="portfolioHome_overlay w-100 h-100 position-absolute top-0 start-0 rounded-2"
                            ></div>
                            <div
                                class="pb-3 text-white ps-4 portfolioHome_stats position-relative top-50"
                            >
                                <span class="d-block fw-bold mb-2">Design</span>
                                <p class="text-light fs-5 fw-bold">
                                The Home of the Future Could Bebes
                                </p>
                                <button
                                class="btn border border-3 border-danger text-white px-4 py-2"
                                >
                                <a href="https://first-css-sproject.vercel.app/" class="portfolioHome_link" target='_blank'>Read More</a>
                                </button>
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
import React from 'react';
import './PortfolioHome.css';
import FigmaImage from '../../assets/figma1.png';
import CorpImage from '../../assets/corp1.png';
import PortImage from '../../assets/port1.png'

const PortfolioHome = () => {
  return (
    <div>
        <section className="portfolioHome_section p-3">
            <div className="container" >
                <div className="portfolioHome_content">
                    <h2 className="text-center display-4 fw-bold portfolioHome_title">My Latest Works</h2>
                    <div class="text-center portfolioHome_text">
                        These are the latest works of website developemnt and UI Design.
                    </div>
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 portfolioHome_gallary ">
                        <div class="mb-4">
                            <div
                                class="portfolioHome_wrapper position-relative rounded-2 border"
                                style={{backgroundImage:`url(${CorpImage})` }}
                            >
                                <div class="portfolioHome_overlay w-100 h-100 position-absolute rounded-2"></div>
                                <div
                                    class="text-white ps-4 portfolioHome_stats position-relative top-50"
                                >
                                    <h4 class="d-block fw-bold mb-2">Development</h4>
                                    <p class="text-light fs-5 fw-bold">
                                    Cooperate Business Landing Page
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    <a href="https://first-bootstrap-project-sigma.vercel.app/" class="portfolioHome_link" target='_blank'>View</a>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <div class="mb-4">
                            <div
                                class="portfolioHome_wrapper position-relative img-wrapper rounded-2 border"
                                style={{backgroundImage:`url(${FigmaImage})` }}
                            >
                                <div
                                class="portfolioHome_overlay w-100 h-100 position-absolute top-0 start-0 rounded-2"
                                ></div>
                                <div
                                    class="pb-3 text-white ps-4 portfolioHome_stats position-relative top-50"
                                >
                                    <h4 class="d-block fw-bold mb-2">Design</h4>
                                    <p class="text-light fs-5 fw-bold">
                                    Figma Design for a Pet Minder Business
                                    </p>
                                    <button
                                    class="btn border border-3 border-danger text-white px-4 py-2"
                                    >
                                    <a href="https://www.figma.com/file/5BCkyFYc0QNKiUEdjgjkut/Pet-Minders?type=design&node-id=53-1130" class="portfolioHome_link" target='_blank'>View</a>
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
                                <h4 class="d-block fw-bold mb-2">Portflio</h4>
                                <p class="text-light fs-5 fw-bold">
                                Personal Portflio using HTML and CSS
                                </p>
                                <button
                                class="btn border border-3 border-danger text-white px-4 py-2"
                                >
                                <a href="https://first-css-sproject.vercel.app/" class="portfolioHome_link" target='_blank'>View</a>
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
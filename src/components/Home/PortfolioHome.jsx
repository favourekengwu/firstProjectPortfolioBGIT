import React from 'react';
import './PortfolioHome.css';

const PortfolioHome = () => {
  return (
    <div>
        <section className="portfolio_section pt-5">
            <div className="portfolio_content">
                <h2>Upcoming Dates</h2>
                <div className="section_two_child">
                    <div className="">
                    <img
                        className="object-cover-image-section-two"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                        alt="image"
                    />
                    <br />
                    <span>Clay</span>
                    </div>
                    <div className="">
                    <img
                        className="object-cover-image-section-two"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                        alt="image"
                    />
                    <br />
                    <span>Clay</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default PortfolioHome;
import React from 'react';
import './Herobox.css';

const Herobox = () => {
  return (
    <section className="herobox_section">
      <div className="bg_image position-relative w-100">
        <div className="bg_overlay position-absolute w-100 h-100"></div>
        <div className="container">
            <div className="hero_content d-flex align-items-end">
              <div className="row row-cols-md-2 row-cols-1 intro_wrapper">
                <div className="col">
                  <div className="herobox_one">
                    <div className="card w-100 border-0 bg-transparent text-start">
                      <div className="card-body">
                        <h2 className="card-title hero_title">
                          Frontend developer seeking to become fully immersed in the tech world.   
                          <br />
                          Final-year student studying BSc (hons) Business Information Systems. 
                        </h2>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="herobox_two d-flex justify-content-end">
                    <div className="card w-100 ps-4 border-0 bg-transparent text-start">
                      <div className="card-body">
                        <p className="card-text hero_text">
                          Passionate front-end developer, with a keen eye for design and a strong focus on user experience.
                          <br />
                          With a solid foundation in web development and a creative mindset, 
                          I am excited to showcase my innovative approach and projects to potential clients and employers.
                          <br />
                          I leverage front-end framework like React to add functionality and interactivity to websites.
                        </p>
                        <button type="button" className="btn p-2 nav-button border border-2 rounded herobox_button">
                         Inquire
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Herobox;
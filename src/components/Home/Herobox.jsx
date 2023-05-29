import React from 'react';
import './Herobox.css';

const Herobox = () => {
  return (
    <section className="herobox_section">
      <div className="bg_image position-relative w-100">
        <div className="bg_overlay position-absolute w-100 h-100"></div>
        <div className="container">
            <div class="text-center hero_content d-flex align-items-end">
              <div class="row row-cols-md-2 row-cols-1 intro_wrapper">
                <div class="col">
                  <div className="section_one">
                    <div class="card w-100 mb-3 border-0 bg-transparent text-start">
                      <div class="card-body">
                        <h2 class="card-title text_area">
                          Frontend developer seeking to become fully immersed in the tech world.   
                          <br />
                          Currently a final-year Business Information Systems student. 
                        </h2>
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div className="section_two d-flex justify-content-end">
                    <div class="card w-75 mb-3 border-0 bg-transparent text-start">
                      <div class="card-body">
                        <p class="card-text">
                          I'm a frontend developer that specialises in building websites and web apps.
                          <br />
                          I specialise in creating user interfaces with HTML, CSS and JavaScript.
                          <br />
                          Additionally, I'm experienced in using libraries and frameworks
                          such as React, as well as various task runners and build tools.
                        </p>
                        <button type="button" class="btn me-3 ms-2 p-2 nav-button border border-2 rounded herobox_button">
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
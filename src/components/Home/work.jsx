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














<div>
    <main class="main">
    <section class="section_one container">
        <div class="section_one_parent">
        <div class="section_one_first_child">
            <h2>New album available on vinyl on June 15th</h2>
        </div>
        <div class="section_one_second_child position-relative">
            Pretium primis nisl ultricies commodo. A molestie amet montes eu
            proin vitae. Rutrum scelerisque hendrerit duis ut pellentesque
            inceptos neque eget hendrerit feugiat netus dapibus fusce. Cras.
            Mi. Commodo quisque rhoncus diam ad velit felis habitasse quam per
            etiam integer lacinia egestas ac. Ut quam netus enim aliquam.
            Vestibulum facilisi ut dictum sem mi libero penatibus nisl
            dignissim dictumst ve non.
        </div>
        <div class="section_one_third_child">
            <img
            class="object-cover-image-section-one"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
            alt="image"
            />
        </div>
        <div class="section_one_four_child position-relative">
            <a
            class="btn btn-primary position-absolute top-50 start-0 translate-middle-y"
            href="#"
            role="button"
            >Button </a>
        </div>
        </div>
    </section>
    <section class="section_two text-center">
        <div class="section_two_parent">
        <h2>Upcoming Dates</h2>
        <div class="section_two_child">
            <div class="">
            <img
                class="object-cover-image-section-two"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                alt="image"
            />
            <br />
            <span>Clay</span>
            </div>
            <div class="">
            <img
                class="object-cover-image-section-two"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14179/image.png"
                alt="image"
            />
            <br />
            <span>Clay</span>
            </div>
        </div>
        </div>
    </section>
</main>

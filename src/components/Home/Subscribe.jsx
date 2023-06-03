import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
  return (
    <div>
        <section className="subscribe_section pt-5">
            <div className="container">
                <div className="subscribe_wrapper w-100">
                    <div className="subscribe_content">
                        <h2 className="subscribe_title">Subscribe</h2>
                        <p className="subscribe_text">Subscribe with your email address to receive news and updates from Favour Ekengwu.</p>
                        <div className="form-floating mb-3">
                            <input
                            type="text"
                            className="form-control input_style"
                            name="formId1"
                            id="formId1"
                            placeholder="Email Address"
                            />
                            <label for="formId1">Email Address</label>
                        </div>
                        <button type="button" className="btn me-3 ms-2 p-3 nav-button border border-2 rounded subscribe_button">Sign Up</button>
                        {/* <a href="mailto:favourekengwu@gmail.com?subject=my email address" whileHover={{scale: 1.3, textShadow: "0px 0px 20px rgb(221, 195, 239)",}}>Sign Up</a> */}
                    </div>
                    <div className='pt-5 subscribe_text'>
                        We respect your privacy.
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Subscribe;
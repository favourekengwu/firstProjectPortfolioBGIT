import React, {useState} from 'react';
import './Subscribe.css';

const Subscribe = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const onFormSubmit = (e) => {
        e.preventDefault();
       if (emailAddress === "" ) {
        alert('Please Enter Your Email Address');
       } else {
        alert("Email Entered is valid");
       };
    };
  return (
    <div id="subscribe">
        <section  className="subscribe_section pt-5">
            <div className="container">
                <div className="subscribe_wrapper w-100">
                    <div className="subscribe_content">
                        <h2 className="subscribe_title">Subscribe</h2>
                        <p className="subscribe_text">Subscribe with your email address to receive news and updates from Favour Ekengwu.</p>
                        <form onSubmit={onFormSubmit} className="form-floating mb-3">
                            <input
                            type="email"
                            onChange={(e)=>setEmailAddress(e.target.value)} value={emailAddress}
                            className="form-control input_style"
                            name="formId1"
                            id="formId1"
                            placeholder="Email Address"
                            />
                            <label for="formId1">Email Address</label>

                            <button type="submit" value="Submit" className="btn mt-4 p-2 nav-button border border-2 rounded subscribe_button">Sign Up</button>

                        </form>

                        {/* <a href="mailto:favourekengwu@gmail.com?subject=my email address" whileHover={{scale: 1.3, textShadow: "0px 0px 20px rgb(221, 195, 239)",}}>Sign Up</a> */}
                    </div>
                    <div className='pt-3 subscribe_text'>
                        We respect your privacy.
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Subscribe;
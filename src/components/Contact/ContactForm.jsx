import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div>
        <section>
            <div>
                <h2>If you have a project in mind. please complete the form below to send your enquiry</h2>
                <form class="needs-validation" novalidate>
                    <div class="mb-3">
                        Name <span class="text-muted">(required)</span>
                    </div>
                    <div class="row w-100 m-0 mb-3">
                        <div class="col-md-6 form-padding-left">
                            <label for="validationCustom01" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="validationCustom01" required />
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please provide First Name .
                            </div>
                        </div>
                        <div class="col-md-6 form-padding-right">
                            <label for="validationCustom02" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="validationCustom02" required />
                            <div class="valid-feedback">
                            Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please provide last Name .
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 w-100">
                        <label for="validationCustom03" class="form-label">Email</label>
                        <input type="email" class="form-control" id="validationCustom03" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div class="mb-3 w-100">
                        <label for="validationCustom04" class="form-label">Business name</label>
                        <input type="text" class="form-control" id="validationCustom04" required />
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please provide last Name .
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Textarea</label>
                        <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                        Please enter a message in the textarea.
                        </div>
                    </div>
                    <div class="col-12">
                    <button class="btn btn-outline-primary p-3" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  );
}

export default ContactForm;
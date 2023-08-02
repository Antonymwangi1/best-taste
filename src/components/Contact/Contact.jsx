import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container-fluid contact-fluid" id="contact">
        <h1 className="text-center contact-h1">Contact Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="call-us">
              <h3 className="text-red">Call Us</h3>
              <h1>+001 234 56 789</h1>
              <p>
                From Tuesday to Sunday 10.30am to 13.00pm Friday and Saturday
                18:30pm to 20:30pm
              </p>
            </div>
            <div className="email">
              <h3 className="text-red">Email</h3>
              <p>best@taste.com</p>
            </div>
            <div className="cancel">
              <h3 className="text-red">Cancellations</h3>
              <p>
                To cancel your booking it is compulsory to write an email or
                call us at least 72 hours in advance.
              </p>
            </div>
          </div>
          <div className="col-lg-6 form-reserve">
            <h3 className="text-red">Reservation</h3>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="" id="" className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="" className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="guest">Number of Guest</label>
                        <input type="number" name="" id="" className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="children">Children</label>
                        <input type="number" name="" id="" className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="time">Time</label>
                        <input type="time" name="" id="" className="form-control" />
                    </div>
                    <div className="col-lg-6">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn-red reserve-btn w-100">Submit reservation request</button>
                </div><br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

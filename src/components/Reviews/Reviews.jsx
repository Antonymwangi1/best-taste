import React from "react";
import "./Reviews.css";
import DefaultRating from "../../Rating/Rating";

import Avatar1 from "../../assets/images/avatar-02.jpg"
import Avatar2 from "../../assets/images/avatar-03.jpg"
import Avatar3 from "../../assets/images/avatar-06.jpg"
import Avatar4 from "../../assets/images/avatar-07.jpg"

const Reviews = () => {
  return (
    <div className="container reviews-fluid">
        <h1 className="text-center review-h1">Reviews</h1>
      <div className="row">
        <div className="col-lg-3">
          <div className="card card-body">
            <div className="people-name">
                <img src={Avatar1} alt="..." className="review-img" />
                <div>
                    <h4 className="no-marg-padd">John Doe</h4>
                    <DefaultRating rating={4} />
                </div>
            </div>
            <p style={{marginTop: '20px'}}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body">
            <div className="people-name">
                <img src={Avatar2} alt="..." className="review-img" />
                <div>
                    <h4 className="no-marg-padd">Suzanne Cate</h4>
                    <DefaultRating rating={4} />
                </div>
            </div>
            <p style={{marginTop: '20px'}}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body">
            <div className="people-name">
                <img src={Avatar3} alt="..." className="review-img" />
                <div>
                    <h4 className="no-marg-padd">Becky G. Amber</h4>
                    <DefaultRating rating={4} />
                </div>
            </div>
            <p style={{marginTop: '20px'}}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card card-body">
            <div className="people-name">
                <img src={Avatar4} alt="..." className="review-img" />
                <div>
                    <h4 className="no-marg-padd">Mark S. Tylor</h4>
                    <DefaultRating rating={4} />
                </div>
            </div>
            <p style={{marginTop: '20px'}}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

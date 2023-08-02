import React from "react";
import "./About.css";

import CookingImg from "../../assets/images/cooking.jpg";

const About = () => {
  return (
    <>
      <div className="about-fluid container-fluid" id="about">
        {/* <div className="overlay"></div> */}
        <div className="about-section">
          <div className="about-content container">
            <div className="about-us card card-body">
              <h1 className="text-red">About Us</h1>
              <p>
                Best Taste Restaurant, a hidden gem in the heart of the city,
                orchestrates an extraordinary gastronomic adventure. With master
                chefs curating a diverse menu, each dish celebrates its origin
                while seamlessly blending flavors. Ethically sourced ingredients
                and an extraordinary wine selection complement the culinary
                symphony. It's a place where dining becomes a celebration of
                life's simple pleasures, a journey that awakens the epicurean
                soul.
              </p>
            </div>
            <div className="img">
              <img src={CookingImg} alt="" className="cooking-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

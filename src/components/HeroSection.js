import React from "react";
import "../assets/css/heroSection.css";
import dateLogo from "../assets/images/datLogo.png";
import personsLogo from "../assets/images/personslogo.png";
import regionLogo from "../assets/images/regionlogo.png";

import customer1 from "../assets/images/customer1.png"
import customer2 from "../assets/images/customer2.png"
import customer3 from "../assets/images/customer3.png"
import customer4 from "../assets/images/customer4.png"

import food1 from "../assets/images/spoon.png";
import food2 from "../assets/images/salad.png";
import food3 from "../assets/images/drinks.png";
import food4 from "../assets/images/desert.png";
import food5 from "../assets/images/sweets.png";

import visa from "../assets/images/visa.png";
import master from "../assets/images/master.png";

export const HeroSection = () => {
  return (
    <section className="hero-section bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="tag">
              Book <span className="tagline">O16 Labs</span> <br />
              for your <br />
              <span className="tagline">Dinner Party</span>
            </h1>
            <p className="para">
              We’re providing the best Chef booking platform.
              <br />
              Choose a menu and book your Chef instantly.
            </p>

            <div className="row mb-4">
              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <img src={regionLogo} alt="" />
                  </span>
                  <select className="form-select" aria-label="Select region">
                    <option selected disabled>
                      Select region
                    </option>
                    <option value="Al Shamal">Al Shamal</option>
                    <option value="Shahrah-e-Faisal">Shahrah-e-Faisal</option>
                    <option value="DHA Phase 2">DHA Phase 2</option>
                  </select>
                </div>
              </div>

              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <img src={dateLogo} alt="" />
                  </span>
                  <input
                    type="text"
                    className="form-control date-input"
                    placeholder="Select date"
                    aria-label="Select date"
                    readOnly
                  />
                  <span className="input-group-text date-icon">
                    <img src={dateLogo} alt="" />
                  </span>
                </div>
              </div>

              <div className="col">
                <div className="input-group">
                  <span className="input-group-text">
                    <img src={personsLogo} alt="" />
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Select persons"
                    aria-label="Select persons"
                  />
                </div>
              </div>
            </div>

            <div className="row happy-customers mb-4">
            <div className="col customer-images">
                  <img src={customer1} alt="Customer 1" />
                  <img src={customer2} alt="Customer 2" />
                  <img src={customer3} alt="Customer 3" />
                  <img src={customer4} alt="Customer 4" />
              </div>
              <div className="col">
                <h5 className="text-primary">Our happy customers</h5>
                <div className="customer-reviews">
                  <span>⭐ 4.7 (8.2K Reviews)</span>
                </div>
              </div>

              <div className="col cards">
                <span>We accept</span>
                <span className="row accept">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-4">
                <img src={food1} alt="Food 1" className="food-small" />
                <img src={food2} alt="Food 2" className="food-large" />
              </div>
              <div className="col-4 ">
                <img src={food3} alt="Food 3" className="food-large" />
                <img src={food4} alt="Food 4" className="food-large" />
              </div>
              <div className="col-4 text-center">
                <img src={food5} alt="Food 5" className="center-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

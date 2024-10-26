import React from 'react';
import logo from '../assets/images/logo.svg';
import location from '../assets/images/location.png';
import mail from '../assets/images/mail.png';
import phone from '../assets/images/phone.png';
import { IoIosSend } from "react-icons/io";
import fb from '../assets/images/fb.png';
import tweet from '../assets/images/tweet.png';
import insta from '../assets/images/insta.png';

export const Footer = () => {
  return (
    <footer className="bg-dark pt-5 pb-3">
      <div className="container">
        
        <div className="row">

          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="Logo" style={{ width: '150px' }} />
          </div>


          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <h5 className="text-primary">Address</h5>

            <div className="d-flex align-items-start mb-2">
              <img src={location} alt="Location" className="me-2 mt-1" />
              <p className="text-light mb-0">Park Avenue South, New York, 74812, United States</p>
            </div>
            <div className="d-flex align-items-start mb-2">
              <img src={mail} alt="Mail" className="me-2 mt-1" />
              <p className="text-light mb-0">contact@016labs.com</p>
            </div>
            <div className="d-flex align-items-start">
              <img src={phone} alt="Phone" className="me-2 mt-1" />
              <p className="text-light mb-0">000-123-456</p>
            </div>
            <div className="d-flex align-items-start mt-1">
              <p className="text-light mb-0">FAQ's Contact us</p>
            </div>
          </div>

          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <h5 className="text-primary">Links</h5>
            <p className="text-light">Home</p>
            <p className="text-light">How it works</p>
            <p className="text-light">Our Chefs</p>
            <p className="text-light">Reviews</p>
            <p className="text-light">What's new</p>
          </div>


          <div className="col-md-3 text-center text-md-start">
            <h5 className="text-primary">Subscribe to our Newsletter</h5>
            <form className="d-flex align-items-center mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary ms-2">
                <IoIosSend />
              </button>
            </form>

            <h5 className="text-primary mt-4">Our Social</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <img className='me-2' src={fb} alt="" />
              <img className='me-2' src={tweet} alt="" />
              <img  className='me-2' src={insta} alt="" />
         
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-light d-flex align-items-center justify-content-center">
            <hr className="w-25 mx-3" />
            <p className="text-center mb-0 text-light">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <hr className="w-25 mx-3" />
          </div>
        </div>
      </div>
    </footer>
  );
};


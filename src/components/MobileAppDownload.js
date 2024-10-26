import React from 'react';

import '../assets/css/mobileDownload.css';

import rectangleBack from '../assets/images/Rectangle.png';
import mobile from '../assets/images/mobile.png';
import andriod from '../assets/images/googleDownload.png';
import ios from '../assets/images/appStore.png';
import pizza from '../assets/images/pizza.png';
import icecream from '../assets/images/icecream.png';

export const MobileAppDownload = () => {
  return (
    <div className='container w-100 d-flex align-items-center justify-content-center'>
      <div className="row position-relative overflow-hidden bg-container py-5 px-5">
        
        <img src={rectangleBack} alt="Background" className="w-100 bg-image rounded-bg" />
      
        <div className="overlay-content text-center">
          <img src={mobile} alt="Overlay" className="position-absolute overlay-image" />

          <h2>Download Our Mobile App</h2>
          <div className="row justify-content-center mt-3">
            <div className="col-6 col-md-4">
              <img src={andriod} alt="Android Download" className="img-fluid download-icon" />
            </div>
            <div className="col-6 col-md-4">
              <img src={ios} alt="iOS Download" className="img-fluid download-icon" />
            </div>
          </div>

          <img src={pizza} alt="Pizza" className="position-absolute right-top-image" />
          <img src={icecream} alt="Ice Cream" className="position-absolute right-bottom-image" />
        </div>
      </div>
    </div>
  );
};

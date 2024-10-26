import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
import cat4 from "../assets/images/ctat4.png"; 
import cat5 from "../assets/images/cat5.png";

const BrowseCategories = () => {
  return (
    <div className="py-5">
      <div className='container'>
        <div className='row'>
          
          <h2 className='text-black fs-3 mb-3'> <MdOutlineHorizontalRule /> Browse By <span className='text-primary'>Categories</span> </h2>
        </div>
        <div className='row'>
          <div className='col-5 px-6'>
            <img 
              src={cat1} 
              alt="" 
              className="img-fluid" 
              style={{ height: '500px', width: '500px' }} 
            />
          </div>


          <div className='col-3 d-flex flex-column justify-content-left'>
            <img 
              src={cat2} 
              alt="" 
              className="img-fluid mb-3" 
              style={{ height: '250px', width: '250px' }} 
            />
            <img 
              src={cat3} 
              alt="" 
              className="img-fluid" 
              style={{ height: '250px', width: '250px' }} 
            />
          </div>

          <div className='col-3 d-flex flex-column' >
            <img 
              src={cat4} 
              alt="" 
              className="img-fluid mb-3" 
              style={{ height: '250px', width: '250px' }} 
            />
            <img 
              src={cat5} 
              alt="" 
              className="img-fluid" 
              style={{ height: '250px', width: '250px' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;

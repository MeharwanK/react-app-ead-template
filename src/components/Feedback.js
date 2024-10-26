import React from 'react';
import { Card } from 'react-bootstrap';
import feedbackImage from "../assets/images/feedback.png";
import goldStar from "../assets/images/goldStar.png";
import swapLeft from "../assets/images/swapeleft.png";
import swapRight from "../assets/images/swapRight.png";

const feedbackData = [
  {
    name: "William Smith",
    designation: "Customer",
    image: feedbackImage,
    feedback: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
    rating: 4.5
  },
  {
    name: "William Smith",
    designation: "Customer",
    image: feedbackImage,
    feedback: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
    rating: 4.0
  },
  {
    name: "William Smith",
    designation: "Customer",
    image: feedbackImage,
    feedback: "أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة",
    rating: 4.8
  }
];

export const Feedback = () => {
  return (
    <div className="py-5 ">
      <div className="container">
        <h2 className="text-black ml-6">What our <br /><span className='text-primary'>Customers</span> says</h2>
        <div className="row justify-content-center">

          <div className="col-md-1 d-flex align-items-center justify-content-center">
            <img src={swapLeft} alt="Previous" />
          </div>
          {feedbackData.map((feedback, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <Card className="rounded border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex align-items-center">
                   
                    <div className="rounded-circle overflow-hidden" style={{ width: '100px', height: '100px' }}>
                      <img
                        src={feedback.image}
                        alt="Profile"
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>

                    <div className="ms-3">
                      <Card.Title className="mb-0">{feedback.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{feedback.designation}</Card.Subtitle>
                    </div>

                    <div className="ms-auto">
                      <span style={{ fontSize: '20px', color: 'gold' }}>
                        {Array.from({ length: Math.floor(feedback.rating) }, (_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                        {feedback.rating % 1 !== 0 && <i className="bi bi-star-half"></i>}
                      </span>
                    </div>
                  </div>

                  <Card.Text className="mt-3">{feedback.feedback}</Card.Text>

                  <div className="d-flex justify-content-end align-items-center mt-3">
                    <img
                      src={goldStar}
                      alt="Rating"
                      style={{ width: "20px", height: "20px", marginRight: "5px" }}
                    />
                    <span>{feedback.rating}</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
          <div className="col-md-1 d-flex align-items-center justify-content-center">
            <img src={swapRight} alt="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};

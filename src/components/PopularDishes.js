import React from "react";
import { Card, Button } from "react-bootstrap";

import dish1 from "../assets/images/dish1.png";
import dish2 from "../assets/images/dish2.png";
import dish3 from "../assets/images/dish3.png";
import chef from "../assets/images/chef.png";
import starIcon from "../assets/images/starIcon.png";

const dishes = [
  {
    id: 1,
    image: dish1,
    title: "Dish 1",
    price: "QAR 200",
    chefName: "Chef One",
    rating: 4.5,
  },
  {
    id: 2,
    image: dish2,
    title: "Dish 2",
    price: "QAR 250",
    chefName: "Chef Two",
    rating: 4.0,
  },
  {
    id: 3,
    image: dish3,
    title: "Dish 3",
    price: "QAR 300",
    chefName: "Chef Three",
    rating: 4.8,
  },
];

const PopularDishes = () => {
  return (
    <div className="popular-dishes py-5">
      <div className="container">
        <div className="row mt-4">
          <div className="col-3 mt-5 ">
            <h2 className="text-left fs-2 text-black">
              Our Most <br />
              <span className="text-primary">Popular Dishes</span>
              <br /> This Month
            </h2>
            <Button className="mt-3 rounded-pill" variant="primary" >See all</Button>
          </div>
          {dishes.map((dish) => (
            <div className="col-3 ml-0" key={dish.id}> 
              <Card className="h-100"> 
                <Card.Img
                  variant="top"
                  src={dish.image}
                  style={{ height: "200px", objectFit: "cover" }} // Fixed height
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{dish.title}</Card.Title>
                  <Card.Text>
                    Pick <span className="text-primary">5</span> out of <span className="text-primary">10</span> dishes.
                  </Card.Text>
                  <Card.Text className="fw-bold fs-4">{dish.price}</Card.Text>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex align-items-center">
                      <img
                        src={chef}
                        alt="Chef"
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px", marginRight: "10px" }}
                      />
                      <span>{dish.chefName}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <img
                        src={starIcon}
                        alt="Rating"
                        style={{ width: "20px", height: "20px", marginRight: "5px" }}
                      />
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;

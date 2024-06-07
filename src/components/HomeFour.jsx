import React from "react";
import HomeFourOne from "./../assets/homeFourOne.png"
import HomeFourTwo from "./../assets/homeFourTwo.png"
import HomeFourThree from "./../assets/homeFourThree.png"
import HomeFourFour from "./../assets/homeFourFour.png"


const HomeFour = () => {
  return (
    <div>
      <div className="HomeFour">
        <div className="container">
          <h1>We also offer unique <br /> services for your events</h1>
          <div className="group">
            <div className="block">
              <img src={HomeFourOne} alt="" />
              <h4>Caterings</h4>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="block">
              <img src={HomeFourTwo} alt="" />
              <h4>Birthdays</h4>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="block">
              <img src={HomeFourThree} alt="" />
              <h4>Weddings</h4>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
            <div className="block">
              <img src={HomeFourFour} alt="" />
              <h4>Events</h4>
              <p>
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFour;

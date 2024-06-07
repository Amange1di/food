import React from "react";
import homeSixOne from "./../assets/homeSixOne.png"
import homeSixTwo from "./../assets/homeSixTwo.png"
import homeSixThree from "./../assets/homeSixThree.png"
const Otz = () => {
  return (
    <div>
      <div className="HomeSix">
        <div className="container">
          <h1 c>What Our Customers Say</h1>
          <div className="group">
            <div className="block">
              <h4>“The best restaurant”</h4>
              <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
              <hr /> <div>
                <img src={homeSixOne} alt="" />
              
                <div>
                  <b>Sophire Robson</b>
                  <h5>Los Angeles, CA</h5>
                </div>
              </div>
            </div>
            <div className="block">
              <h4>“Simply delicious”</h4>
              <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                 <hr /> <div>
              <img src={homeSixTwo} alt="" />
          
                <div>
                  <b>Matt Cannon</b>
                  <h5>San Diego, CA</h5>
                </div>
              </div>
            </div>
            <div className="block">
              <h4>“One of a kind restaurant”</h4>
              <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
             <hr />
              <div>
              <img src={homeSixThree} alt="" />
                <div>
                  <b>Andy Smith</b>
                  <h5>San Francisco, CA</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otz;

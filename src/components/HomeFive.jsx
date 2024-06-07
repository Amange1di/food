

import React from 'react'
import Min from "./../assets/homeFive.png"
import Min1 from "./../assets/homeFiveMin1.png"
import Min2 from "./../assets/homeFiveMin2.png"
import { MdOutlineAccessTime } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
const HomeFive = () => {
    return (
        <div>
            <div className="HomeFive">
                <div className="container">
                    <div className="img">
                        <img src={Min} alt="" />
                        <div className="foto">
                            <img src={Min1} alt="" />
                            <img src={Min2} alt="" />
                        </div>
                    </div>
                    <div className="text">
                        <h1>Fastest Food  <br />Delivery in City</h1>
                        <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                        <div className="groupHome">
                            <div className="block">
                                <div><MdOutlineAccessTime /></div>
                                <p>Delivery within 30 minutes</p>
                            </div>
                            <div className="block">
                                <div><BiSolidDiscount /></div>
                                <p>Best Offer & Prices</p>
                            </div>
                            <div className="block">
                                <div><MdOutlineShoppingCart /></div>
                                <p>Online Services Available</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFive